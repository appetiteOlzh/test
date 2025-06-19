"use client";
import React, { FC, useEffect, useRef, useState } from "react";

type Props = {
  originalImage: string;
  compressedImage: string;
  beforeLabel?: string;
  afterLabel?: string;
};

export const ImageComparison: FC<Props> = ({
  originalImage,
  compressedImage,
  beforeLabel = "Исходный файл с вашего телефона",
  afterLabel = "Сжатый до 4K в Monclips gallery",
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);
  const sliderRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [position, setPosition] = useState(0.5); // 50%
  const [width, setWidth] = useState(0);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const onMove = (e: MouseEvent | TouchEvent) => {
      if (!isDragging) return;
      const rect = container.getBoundingClientRect();
      const clientX = (e as TouchEvent).touches
        ? (e as TouchEvent).touches[0].clientX
        : (e as MouseEvent).clientX;
      let pos = (clientX - rect.left) / rect.width;
      pos = Math.max(0, Math.min(pos, 1));
      setPosition(pos);
    };

    const stop = () => setIsDragging(false);

    window.addEventListener("mousemove", onMove);
    window.addEventListener("touchmove", onMove);
    window.addEventListener("mouseup", stop);
    window.addEventListener("touchend", stop);

    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("touchmove", onMove);
      window.removeEventListener("mouseup", stop);
      window.removeEventListener("touchend", stop);
    };
  }, [isDragging]);

  useEffect(() => {
    const updateWidth = () => {
      const container = containerRef.current;
      if (container) {
        setWidth(container.offsetWidth);
      }
    };
    window.addEventListener("resize", updateWidth);
    updateWidth(); // Initial width calculation
    return () => {
      window.removeEventListener("resize", updateWidth);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative w-full overflow-hidden rounded-2xl md:rounded-3xl lg:rounded-5xl"
      style={{ aspectRatio: "16/9" }}
    >
      <div
        className="w-full h-full object-cover ratio-16/9"
        draggable={false}
        style={{
          backgroundImage: `url(${originalImage})`,
          backgroundSize: `${width}px auto`,
          backgroundPosition: "left center",
        }}
      ></div>

      <div
        className="absolute lg:top-12 md:top-9 top-6 lg:right-12 md:right-9 right-6 z-10 font-apple uppercase text-right md:text-xl text-sm md:w-[226px] w-32 select-none"
        style={{ textShadow: "0 0 10px rgba(0, 0, 0, 0.5)" }}
      >
        {afterLabel}
      </div>

      <div
        ref={overlayRef}
        className="absolute top-0 left-0 h-full overflow-hidden z-20"
        style={{ width: `${position * 100}%` }}
      >
        <div
          className="w-full h-full ratio-16/9"
          draggable={false}
          style={{
            backgroundImage: `url(${compressedImage})`,
            backgroundSize: `${width}px auto`,
            backgroundPosition: "left center",
          }}
        ></div>
        <div
          className="absolute lg:top-12 md:top-9 top-6 lg:left-12 md:left-9 left-6 z-10 font-apple uppercase text-left md:text-xl text-sm md:w-[226px] w-32 select-none"
          style={{ textShadow: "0 0 10px rgba(0, 0, 0, 0.5)" }}
        >
          {beforeLabel}
        </div>
      </div>

      <div
        ref={sliderRef}
        className="absolute top-0 bottom-0 z-30 cursor-ew-resize w-5"
        style={{
          left: `${position * 100}%`,
          transform: `translateX(-50%)`,
        }}
        onMouseDown={() => setIsDragging(true)}
        onTouchStart={() => setIsDragging(true)}
      >
        <div className="h-full mx-auto w-0.5 bg-white"></div>
      </div>
    </div>
  );
};
