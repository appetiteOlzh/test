"use client";

import React, { useRef, ReactNode } from "react";
// 1. Импортируем сам класс QuickPinchZoom для типизации useRef
import QuickPinchZoom, { make3dTransformValue } from "react-quick-pinch-zoom";

// Типизируем параметры, которые передает QuickPinchZoom в onUpdate
interface UpdateActionParameters {
  x: number;
  y: number;
  scale: number;
}

interface RubberBandZoomProps {
  children: ReactNode;
  duration?: number; // Длительность анимации возврата (по умолчанию 250мс)
  className?: string;
}

export function RubberBandZoom({
  children,
  duration = 250,
  className = "",
}: RubberBandZoomProps) {
  // Ref для обертки над картинкой или видео
  const containerRef = useRef<HTMLDivElement | null>(null);

  // 2. Указываем класс QuickPinchZoom в качестве типа ref'а вместо самописного интерфейса
  const pzRef = useRef<QuickPinchZoom | null>(null);

  // Функция обновления трансформы при жесте
  const handleUpdate = ({ x, y, scale }: UpdateActionParameters): void => {
    if (containerRef.current) {
      const value = make3dTransformValue({ x, y, scale });
      containerRef.current.style.setProperty("transform", value);
    }
  };

  // Возврат в исходное состояние при отпускании пальцев / мыши
  const handleTouchEnd = (): void => {
    if (pzRef.current) {
      // Метод alignCenter теперь полностью типизирован
      pzRef.current.alignCenter({
        scale: 1,
        x: 0,
        y: 0,
        animated: true,
        duration,
      });
    }
  };

  return (
    <div
      className={`relative overflow-hidden select-none ${className}`}
      onTouchEnd={handleTouchEnd}
      onPointerUp={handleTouchEnd}
    >
      <QuickPinchZoom
        ref={pzRef}
        onUpdate={handleUpdate}
        draggableUnZoomed={false}
        inertia={false}
      >
        <div ref={containerRef} className="w-full h-full will-change-transform">
          {children}
        </div>
      </QuickPinchZoom>
    </div>
  );
}
