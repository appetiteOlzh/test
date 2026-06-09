"use client";
import { FC } from "react";
// import cn from "classnames";
import { VideoPlayer, ImageViewportObserver } from "@/shared/ui";

// import s from "./styles.module.css";

export const MediaItem: FC<
  MediaProps & {
    isActive: boolean;
    setCurrentTime: (time: number) => void;
    setDuration: (duration: number) => void;
  }
> = (media) => {
  const { url, previewUrl, isActive, setCurrentTime, setDuration, id } = media;

  if (media.type === "image")
    return (
      <div className="md:w-[376px] w-full md:h-[670px] h-dvh md:rounded-[32px] bg-black mx-auto select-none overflow-hidden">
        <ImageViewportObserver {...media} />
      </div>
    );
  if (media.type === "video")
    return (
      <div className="md:w-[376px] w-full md:h-[670px] h-dvh md:rounded-[32px] bg-black mx-auto select-none overflow-hidden relative">
        <VideoPlayer
          key={url}
          id={id}
          src={url}
          previewUrl={previewUrl}
          isActive={isActive}
          onTimeUpdate={(time, duration) => {
            setCurrentTime(time);
            setDuration(duration);
          }}
        />
      </div>
    );
  return null;
};
