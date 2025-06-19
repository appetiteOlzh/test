"use client";
import Image from "next/image";
import React, { FC, useCallback, useEffect, useRef, useState } from "react";
import PlayIcon from "./icon/play.svg";
import PauseIcon from "./icon/pause.svg";

export const CustomControls: FC<{
  lastVideo: HTMLVideoElement | null;
}> = ({ lastVideo }) => {
  const progressRef = useRef<HTMLDivElement>(null);

  const [isPlaying, setIsPlaying] = useState(true);
  const [wasPlaying, setWasPlaying] = useState(true);
  const [progress, setProgress] = useState(0);
  const [isSeeking, setIsSeeking] = useState(false);
  const [seekTime, setSeekTime] = useState(0);

  useEffect(() => {
    const video = lastVideo;
    if (!video) return console.log("return");
    const updateProgress = () => {
      const progressPercent = (video.currentTime / video.duration) * 100;
      setProgress(progressPercent);
    };

    const play = () => setIsPlaying(true);
    const pause = () => setIsPlaying(false);

    video.addEventListener("timeupdate", updateProgress);
    video.addEventListener("play", play);
    video.addEventListener("pause", pause);

    return () => {
      video.removeEventListener("timeupdate", updateProgress);
      video.removeEventListener("play", play);
      video.removeEventListener("pause", pause);
    };
  }, [lastVideo]);

  const handleSeek = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const video = lastVideo;
    if (!video) return;

    const rect = e.currentTarget.getBoundingClientRect();
    const seekTime = ((e.clientX - rect.left) / rect.width) * video.duration;

    video.currentTime = seekTime;
  };

  const handleSeekStart = (
    e: React.MouseEvent<HTMLDivElement> | React.TouchEvent<HTMLDivElement>
  ) => {
    setWasPlaying(isPlaying);
    if (wasPlaying) lastVideo?.pause();
    setIsSeeking(true);
    const clientX = "touches" in e ? e.touches[0].clientX : e.clientX;
    setSeekTime(getSeekTime(clientX, e.currentTarget));
  };

  const getSeekTime = useCallback(
    (clientX: number, target: HTMLDivElement) => {
      if (!lastVideo) return 0;
      const rect = target.getBoundingClientRect();
      const percent = Math.min(
        Math.max((clientX - rect.left) / rect.width, 0),
        1
      );
      return percent * lastVideo.duration;
    },
    [lastVideo]
  );

  const handleSeekMove = useCallback(
    (e: MouseEvent | TouchEvent) => {
      if (!isSeeking || !lastVideo) return;
      const clientX = "touches" in e ? e.touches[0].clientX : e.clientX;
      if (progressRef.current)
        setSeekTime(getSeekTime(clientX, progressRef.current));
      setProgress((seekTime / lastVideo.duration) * 100);
    },
    [getSeekTime, isSeeking, lastVideo, seekTime]
  );

  // ✅ Окончание перемотки
  const handleSeekEnd = useCallback(() => {
    if (lastVideo) {
      lastVideo.currentTime = seekTime;
    }
    setIsSeeking(false);
    if (wasPlaying)
      lastVideo?.play().catch((e) => {
        console.log("seek play error", e);
      });
  }, [lastVideo, seekTime, wasPlaying]);

  useEffect(() => {
    if (isSeeking) {
      document.addEventListener("mousemove", handleSeekMove);
      document.addEventListener("mouseup", handleSeekEnd);
      document.addEventListener("touchmove", handleSeekMove);
      document.addEventListener("touchend", handleSeekEnd);
    } else {
      document.removeEventListener("mousemove", handleSeekMove);
      document.removeEventListener("mouseup", handleSeekEnd);
      document.removeEventListener("touchmove", handleSeekMove);
      document.removeEventListener("touchend", handleSeekEnd);
    }

    return () => {
      document.removeEventListener("mousemove", handleSeekMove);
      document.removeEventListener("mouseup", handleSeekEnd);
      document.removeEventListener("touchmove", handleSeekMove);
      document.removeEventListener("touchend", handleSeekEnd);
    };
  }, [handleSeekEnd, handleSeekMove, isSeeking, lastVideo, seekTime]);

  return (
    <div
      className="pointer-events-auto"
      onClick={(e) => {
        e.stopPropagation();
        e.preventDefault();
      }}
    >
      <div className="flex flex-wrap items-center -mx-3">
        <div className="px-3 flex-none">
          {!isPlaying ? (
            <button
              onClick={() =>
                lastVideo?.play().catch((e) => {
                  console.log("error", e);
                })
              }
              className="w-11 h-11 p-2.5 -mx-2.5"
            >
              <Image
                src={PlayIcon}
                alt="▶ Play"
                className="w-full h-full object-contain object-center"
              />
            </button>
          ) : (
            <button
              onClick={() => lastVideo?.pause()}
              className="w-11 h-11 p-2.5 -mx-2.5"
            >
              <Image
                src={PauseIcon}
                alt="❚❚ Pause"
                className="w-full h-full object-contain object-center"
              />
            </button>
          )}
        </div>
        <div className="px-3 flex-1 min-w-0">
          <div
            className=" h-1 bg-white/60 w-full touch-none rounded-full cursor-pointer"
            onClick={handleSeek}
            onMouseDown={handleSeekStart}
            onTouchStart={handleSeekStart}
            ref={progressRef}
          >
            <div
              className="h-full bg-white rounded-full"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
