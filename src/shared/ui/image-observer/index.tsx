"use client";
import Image from "next/image";
import { FC, useEffect, useRef } from "react";

export const ImageViewportObserver: FC<
  MediaProps & { onEnterViewport: () => void }
> = ({ url, width, height, onEnterViewport }) => {
  const imgRef = useRef<HTMLImageElement | null>(null);

  useEffect(() => {
    const img = imgRef.current;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          onEnterViewport();
        }
      },
      { threshold: 0.5 } // 50% видео должно быть видно
    );

    if (img) {
      observer.observe(img);
    }

    return () => {
      if (img) {
        observer.unobserve(img);
      }
    };
  }, [onEnterViewport]);

  return (
    <Image
      src={url}
      width={width ?? 376}
      height={height ?? 670}
      alt="monclips gallery media"
      className="md:w-[376px] w-screen md:h-[670px] h-screen m-auto object-contain "
      loading="lazy"
      onContextMenu={(e) => e.preventDefault()}
      draggable={false}
      onError={(e) => ((e.target as HTMLImageElement).style.display = "none")}
      onMouseDown={(e) => e.preventDefault()}
      ref={imgRef}
    />
  );
};
