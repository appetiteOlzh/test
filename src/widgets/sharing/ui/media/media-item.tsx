"use client";
import { FC } from "react";
// import cn from "classnames";
import { VideoPlayer, ImageViewportObserver, Loader2 } from "@/shared/ui";
import Image from "next/image";

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
        <div className="absolute top-0 left-0 w-full h-18 z-30 pointer-events-none md:hidden">
          <Image
            src="/assets/img/overlay.png"
            alt="overlay"
            width={375}
            height={110}
            unoptimized
            className="w-full h-full object-cover object-top"
          />
        </div>
        <ImageViewportObserver {...media} />

        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 text-yellow-darker z-10">
          <Loader2 />
        </div>
      </div>
    );
  if (media.type === "video")
    return (
      <div className="md:w-[376px] w-full md:h-[670px] h-dvh md:rounded-[32px] bg-black mx-auto select-none overflow-hidden relative">
        <div className="absolute top-0 left-0 w-full h-18 z-30 pointer-events-none md:hidden">
          <Image
            src="/assets/img/overlay.png"
            alt="overlay"
            width={375}
            height={110}
            unoptimized
            className="w-full h-full object-cover object-top"
          />
        </div>
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

        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 text-yellow-darker z-10">
          <Loader2 />
        </div>
      </div>
    );
  return null;
};
