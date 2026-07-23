"use client";
import Image from "next/image";
import { FC, useRef } from "react";
import { RubberBandZoom } from "../rubber-band-zoom";

export const ImageViewportObserver: FC<MediaProps> = ({
  url,
  width,
  height,
  previewUrl,
}) => {
  const imgRef = useRef<HTMLImageElement | null>(null);

  return (
    <RubberBandZoom>
      <Image
        src={url}
        blurDataURL={previewUrl}
        width={width ?? 376}
        height={height ?? 670}
        alt="monclips gallery media"
        className="md:w-[376px] w-full md:h-[670px] h-dvh m-auto object-contain relative z-20"
        loading="lazy"
        onContextMenu={(e) => e.preventDefault()}
        draggable={false}
        onError={(e) => ((e.target as HTMLImageElement).style.display = "none")}
        onMouseDown={(e) => e.preventDefault()}
        ref={imgRef}
        itemProp="contentUrl"
      />
    </RubberBandZoom>
  );
};
