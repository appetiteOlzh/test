type VideoEntry = {
  id: string;
  el: HTMLVideoElement;
  state: "active" | "preload" | "idle";
};

type DecoderState = {
  lastActiveId: string | null;
  globalWatchdog: NodeJS.Timeout | null;
};

class VideoPool {
  private videos = new Map<string, VideoEntry>();
  private decoder: DecoderState & { stayMuted: boolean } = {
    lastActiveId: null,
    globalWatchdog: null,
    stayMuted: true,
  };

  get activeVideo() {
    return this.decoder.lastActiveId;
  }

  // 🧩 register
  register(id: string, el: HTMLVideoElement) {
    console.log("reg", el);

    if (this.videos.has(id)) {
      this.unregister(id);
    }
    if (el.src) {
      el.dataset.src = el.src;
    }

    this.videos.set(id, {
      id,
      el,
      state: "idle",
    });

    this.ensureWatchdog();
  }

  // 🧩 unregister
  unregister(id: string) {
    console.log("unregister", this.videos.get(id)?.el);

    const entry = this.videos.get(id);
    if (!entry) return;

    this.stop(entry.el);
    this.videos.delete(id);

    if (this.decoder.lastActiveId === id) {
      this.decoder.lastActiveId = null;
    }

    if (this.videos.size === 0) {
      this.stopWatchdog();
    }
  }

  // 🔥 MAIN: strict active switch
  setActive(
    id: string | null,
    stayMuted: boolean,
    callback?: (muted: boolean) => void,
  ) {
    console.log("setActive");

    if (this.decoder.lastActiveId === id) {
      this.decoder.stayMuted = stayMuted;
      const entry = this.videos.get(id!);
      if (entry) {
        this.safePlay(entry.el, stayMuted, callback);
      }
      return;
    }

    this.decoder.stayMuted = stayMuted;

    // 1. Stop previous active video only
    if (this.decoder.lastActiveId && this.decoder.lastActiveId !== id) {
      const prev = this.videos.get(this.decoder.lastActiveId);
      if (prev) {
        this.stop(prev.el);
        prev.state = "idle";
      }
    }

    this.decoder.lastActiveId = id;

    if (!id) return;

    const next = this.videos.get(id);
    if (!next) {
      console.warn(
        `[VideoPool] Attempted to activate non-registered video: ${id}`,
      );
      return;
    }

    this.activate(next, stayMuted, callback);
  }

  // 🎯 ACTIVE (only ONE allowed)
  private activate(
    entry: VideoEntry,
    stayMuted: boolean,
    callback?: (muted: boolean) => void,
  ) {
    console.log("activate");

    const video = entry.el;

    entry.state = "active";

    console.log(!video.src, video.dataset.src);

    if (!video.src && video.dataset.src) {
      video.src = video.dataset.src;
    }

    // IMPORTANT: ensure clean state before playing
    video.pause();

    this.safePlay(video, stayMuted, callback);
  }

  public safePlay = async (
    video: HTMLVideoElement,
    stayMuted: boolean,
    callback?: (muted: boolean) => void,
  ) => {
    console.log("safePlay");

    try {
      // Wait until browser has enough data
      if (video.readyState < 2) {
        await new Promise<void>((resolve) => {
          const onLoaded = () => {
            video.removeEventListener("loadeddata", onLoaded);
            resolve();
          };
          video.addEventListener("loadeddata", onLoaded);
          // Safety timeout for metadata/loading
          setTimeout(resolve, 1000);
        });
      }

      // Safari render/decode sync fix
      await new Promise<void>((resolve) => {
        requestAnimationFrame(() => {
          requestAnimationFrame(() => {
            resolve();
          });
        });
      });

      // Final check if it still should be playing (some state might have changed during await)
      const entry = Array.from(this.videos.values()).find(
        (v) => v.el === video,
      );
      if (entry && entry.state !== "active") return;

      if ((window as Window).isAudioUnlocked) {
        if (!stayMuted) video.muted = false;
        else video.muted = true;
        callback?.(stayMuted);
      }
      try {
        await video.play();
      } catch (err) {
        console.log(err);

        video.muted = true;
        callback?.(true);
        video.play();
      }
    } catch (e) {
      console.error("[VideoPool] Video play failed", e);
    }
  };

  // ⚡ PRELOAD (only ONE neighbor)
  setPreload(id: string, level: "light" | "warm" = "light") {
    if (!id) return;

    const entry = this.videos.get(id);
    if (!entry) return;

    // ⚠️ CRITICAL: Never downgrade active video
    if (entry.state === "active") return;

    const video = entry.el;

    // Avoid duplicate work
    if (
      entry.state === "preload" &&
      video.preload === (level === "light" ? "metadata" : "auto")
    )
      return;

    entry.state = "preload";
    video.muted = true;
    video.playsInline = true;

    if (level === "light") {
      video.preload = "metadata";
      if (video.readyState < 1) {
        video.load();
      }
      return;
    }

    // WARM PRELOAD
    video.preload = "auto";

    if (video.readyState >= 2) return;

    video.load();

    // Safari decoder warmup trick
    const tryWarm = async () => {
      try {
        if (entry.state !== "preload") return;
        const p = video.play();
        if (p && typeof p.catch === "function") {
          await p;
        }
        video.pause();
        video.currentTime = 0;
      } catch {
        // ignore Safari autoplay rejection
      }
    };

    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        tryWarm();
      });
    });
  }

  // 🧠 GLOBAL WATCHDOG (single timer for all)
  private ensureWatchdog() {
    if (this.decoder.globalWatchdog) return;

    this.decoder.globalWatchdog = setInterval(() => {
      this.videos.forEach((entry, id) => {
        if (entry.state !== "active") return;

        const video = entry.el;
        if (video.paused || video.ended) return;

        const stuck =
          video.currentTime > 0 &&
          video.readyState < 3 &&
          video.buffered.length === 0;

        if (stuck) {
          console.warn("🔥 [VideoPool] Decoder stall detected:", id);
          this.recover(video);
        }
      });
    }, 2000);
  }

  private stopWatchdog() {
    if (this.decoder.globalWatchdog) {
      clearInterval(this.decoder.globalWatchdog);
      this.decoder.globalWatchdog = null;
    }
  }

  // 🔧 RECOVERY
  private recover(video: HTMLVideoElement) {
    try {
      video.pause();
      // soft reset
      video.currentTime = Math.max(0, video.currentTime - 0.5);

      video.play().catch(() => {
        // hard fallback
        video.load();
        video.play().catch(() => {});
      });
    } catch (e) {
      console.error("[VideoPool] Decoder recovery failed", e);
    }
  }

  // 🧹 stop helper
  public stop(video: HTMLVideoElement) {
    console.log("stop");

    video.pause();

    video.removeAttribute("src");
    video.load();
  }

  // 📊 debug
  getState() {
    return {
      active: this.decoder.lastActiveId,
      videoCount: this.videos.size,
      videos: Array.from(this.videos.values()).map((v) => ({
        id: v.id,
        state: v.state,
        readyState: v.el.readyState,
      })),
    };
  }
}
declare global {
  interface Window {
    isAudioUnlocked: boolean;
  }
}
export const videoPool = new VideoPool();
