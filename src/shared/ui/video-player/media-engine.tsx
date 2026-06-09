class MediaEngine {
  private activeId: string | null = null;

  setActive(id: string) {
    this.activeId = id;
  }

  setPreload(id: string, level: "light" | "warm") {
    const video = document.querySelector(
      `[data-media-id="${id}"]`,
    ) as HTMLVideoElement;

    if (!video) return;

    video.muted = true;

    if (level === "light") {
      video.preload = "metadata";
    } else {
      video.preload = "auto";
      video.load();
    }
  }
}

export const mediaEngine = new MediaEngine();
