"use client";

import mergeRefs from "merge-refs";
import { useRef, useImperativeHandle, forwardRef, useEffect } from "react";
import { CustomControls } from "./video-controller";

interface VideoPlayerProps {
  src: string;
  streamSrc?: string; // Оставляем пространство для стриминга (HLS, WebRTC)
  className?: string;
  setVisibleVideo?: (video: HTMLVideoElement) => void;
}

export interface VideoPlayerRef {
  play: () => void;
  pause: () => void;
  seek: (time: number) => void;
  setSpeed: (speed: number) => void;
  mute: () => void;
  unmute: () => void;
  getCurrentTime: () => number;
  getDuration: () => number;
}

const checkStalledReason = (video: HTMLVideoElement) => {
  if (!video) return;

  const isOffline = !navigator.onLine;
  const isError = Boolean(video.error);
  const isNotFound = video.networkState === HTMLMediaElement.NETWORK_NO_SOURCE;

  if (isOffline) {
    console.error("🚨 Нет подключения к интернету!");
  }

  if (video.error) {
    console.error("🚨 Ошибка видео:", video.error.code);
  }

  if (isNotFound) {
    console.error("🚨 Видео источник не найден!");
  }

  const bufferedEnd = video.buffered.length
    ? video.buffered.end(video.buffered.length - 1)
    : 0;
  const isBufferEnd = bufferedEnd <= video.currentTime;

  if (isBufferEnd) {
    console.warn("⚠️ Видео зависло, новых данных нет!");
  }

  return {
    isOffline,
    isError,
    isNotFound,
    isBufferEnd,
  };
};

export const VideoPlayer = forwardRef<VideoPlayerRef, VideoPlayerProps>(
  ({ src, streamSrc, className = "", setVisibleVideo }, ref) => {
    const videoRef = useRef<HTMLVideoElement | null>(null);

    useEffect(() => {
      const video = videoRef.current;
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            const video = entry.target as HTMLVideoElement;
            setTimeout(() => video.play(), 100);

            if (setVisibleVideo) {
              setVisibleVideo(video);
            }
          } else {
            const video = entry.target as HTMLVideoElement;
            setTimeout(() => video.pause(), 101);
            video.currentTime = 0;
          }
        },
        { threshold: 0.5 } // 50% видео должно быть видно
      );

      if (video) {
        observer.observe(video);
      }

      return () => {
        if (video) {
          observer.unobserve(video);
        }
      };
    }, [setVisibleVideo]);

    // Экспортируем методы управления
    useImperativeHandle(mergeRefs(ref), () => ({
      play: () => videoRef.current?.play(),
      pause: () => videoRef.current?.pause(),
      seek: (time: number) => {
        if (videoRef.current) videoRef.current.currentTime = time;
      },
      setSpeed: (speed: number) => {
        if (videoRef.current) videoRef.current.playbackRate = speed;
      },
      mute: () => {
        if (videoRef.current) videoRef.current.muted = true;
      },
      unmute: () => {
        if (videoRef.current) videoRef.current.muted = false;
      },
      getCurrentTime: () => videoRef.current?.currentTime || 0,
      getDuration: () => videoRef.current?.duration || 0,
    }));

    return (
      <div className={className}>
        <video
          ref={videoRef}
          className="h-full select-none"
          controls={false}
          loop
          controlsList="nodownload"
          draggable={false}
          onMouseDown={(e) => e.preventDefault()}
          playsInline
          onClick={(e) => {
            const _this = e.currentTarget;
            if (_this.paused) _this.play();
            else _this.pause();
            return e;
          }}
          onWaiting={() => {
            console.log("...loading");
          }}
          onStalled={(e) => {
            const video = e.currentTarget;
            const isBufferEnd = checkStalledReason(video)?.isBufferEnd;
            const current = video.currentTime;

            if (isBufferEnd && !video.paused) {
              video.load();
              video
                .play()
                .then(() => (video.currentTime = current))
                .catch((e) => console.log("Play error", e));
            }
            console.log("stalled");
          }}
        >
          {streamSrc ? (
            <source src={streamSrc} type="application/x-mpegURL" />
          ) : (
            <source src={src} type="video/mp4" />
          )}
          Your browser does not support the video tag.
        </video>
        <div className="absolute bottom-0 left-0 w-full px-4 py-1 md:block hidden">
          <CustomControls lastVideo={videoRef.current} />
        </div>
      </div>
    );
  }
);

VideoPlayer.displayName = "VideoPlayer";
