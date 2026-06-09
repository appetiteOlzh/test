"use client";

import {
  forwardRef,
  useEffect,
  useImperativeHandle,
  useRef,
  useState,
} from "react";
import { videoPool } from "./video-controller";
import { CustomControls } from "./custom-controller";
import { MuteButton } from "./mute-button";
import { useStayMuted } from "./stay-muted-provider";

interface Props {
  id: number;
  src: string;
  previewUrl?: string;
  isActive?: boolean;
  onTimeUpdate?: (time: number, duration: number) => void;
}

export interface VideoPlayerRef {
  play: () => void;
  pause: () => void;
}

export const VideoPlayer = forwardRef<VideoPlayerRef, Props>(
  ({ id, src, previewUrl, isActive, onTimeUpdate }, ref) => {
    const videoRef = useRef<HTMLVideoElement>(null);
    const { isMuted: stayMuted, setIsMuted: setStayMuted } = useStayMuted();
    const [isMuted, setIsMuted] = useState(stayMuted);

    const [currentTime, setCurrentTime] = useState(0);
    const [duration, setDuration] = useState(0);
    const [isPlaying, setIsPlaying] = useState(false);

    // 🎯 REGISTER (stable id!)
    useEffect(() => {
      const video = videoRef.current;
      if (!video) return;

      video.dataset.videoId = String(id);

      videoPool.register(String(id), video);

      return () => {
        videoPool.unregister(String(id));
      };
    }, [id]);

    // 🎯 SWIPER CONTROL ONLY HERE
    useEffect(() => {
      const video = videoRef.current;
      if (!video) return;
      if (isActive) {
        videoPool.setActive(String(id), stayMuted, (muted) => {
          setIsMuted(muted);
        });
      } else {
        video.pause();
      }
    }, [isActive, id, stayMuted]);

    // 🎯 SYNC WITH GLOBAL
    useEffect(() => {
      setIsMuted(stayMuted);
    }, [stayMuted]);

    // 🎯 TIME SYNC
    useEffect(() => {
      const video = videoRef.current;
      if (!video) return;

      const onTime = () => {
        const time = Math.round(video.currentTime);
        const dur = Math.round(video.duration) || 0;

        setCurrentTime(time);
        setDuration(dur);
        onTimeUpdate?.(time, dur);
      };

      video.addEventListener("timeupdate", onTime);
      video.addEventListener("loadedmetadata", onTime);

      return () => {
        video.removeEventListener("timeupdate", onTime);
        video.removeEventListener("loadedmetadata", onTime);
      };
    }, [onTimeUpdate]);

    // 🎯 PLAY STATE SYNC
    useEffect(() => {
      const video = videoRef.current;
      if (!video) return;

      const sync = () => setIsPlaying(!video.paused);

      video.addEventListener("play", sync);
      video.addEventListener("pause", sync);

      return () => {
        video.removeEventListener("play", sync);
        video.removeEventListener("pause", sync);
      };
    }, []);

    useImperativeHandle(ref, () => ({
      play: () => videoRef.current?.play(),
      pause: () => videoRef.current?.pause(),
    }));

    const togglePlay = () => {
      const video = videoRef.current;
      if (!video) return;

      if (video.paused) {
        videoPool.safePlay(video, stayMuted);
      } else {
        video.pause();
      }
    };

    return (
      <>
        <video
          ref={videoRef}
          src={src}
          playsInline
          preload="metadata"
          onClick={togglePlay}
          className="w-full h-full bg-contain bg-center bg-no-repeat"
          style={{
            backgroundImage: `url(${previewUrl})`,
          }}
          onEnded={(e) => {
            e.currentTarget.currentTime = 0;
            e.currentTarget.play().catch(() => {});
          }}
          disablePictureInPicture
          controlsList="nodownload noplaybackrate"
          muted={stayMuted}
        />

        <MuteButton
          videoRef={videoRef}
          initialMuted={isMuted}
          onMuteChange={(muted) => {
            setStayMuted(muted);
            setIsMuted(muted);
          }}
        />
        <div className="absolute bottom-6 left-0 w-full px-4">
          <CustomControls
            currentTime={currentTime}
            duration={duration}
            isPlaying={isPlaying}
            onTogglePlay={togglePlay}
            onSeek={(time) => {
              const video = videoRef.current;
              if (!video) return;
              video.currentTime = time;
            }}
          />
        </div>
      </>
    );
  },
);

VideoPlayer.displayName = "VideoPlayer";
