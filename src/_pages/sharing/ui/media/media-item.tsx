"use client";
import { FC } from "react";
import cn from "classnames";
import { VideoPlayer, ImageViewportObserver } from "@/shared/ui";

import s from "./styles.module.css";

export const MediaItem: FC<
  MediaProps & { setVisibleVideo: (video: HTMLVideoElement | null) => void }
> = (media) => {
  const { url, setVisibleVideo } = media;

  if (media.type === "image")
    return (
      <div className="md:w-[376px] w-screen md:h-[670px] h-screen md:rounded-[32px] bg-black mx-auto select-none overflow-hidden">
        <ImageViewportObserver
          {...media}
          onEnterViewport={() => setVisibleVideo(null)}
        />
      </div>
    );
  if (media.type === "video")
    return (
      <div className="md:w-[376px] w-screen md:h-[670px] h-screen md:rounded-[32px] bg-black mx-auto select-none overflow-hidden">
        <VideoPlayer
          src={url}
          className={cn(
            "md:w-[376px] w-screen md:h-[670px] h-screen m-auto relative",
            s.video
          )}
          setVisibleVideo={setVisibleVideo}
        />
      </div>
    );
  return null;
};
