"use client";

import { useState, useEffect, RefObject } from "react";

interface MuteButtonProps {
  videoRef: RefObject<HTMLVideoElement | null>;
  initialMuted?: boolean;
  onMuteChange?: (muted: boolean) => void;
}

export const MuteButton = ({
  videoRef,
  initialMuted = true,
  onMuteChange,
}: MuteButtonProps) => {
  const [isMuted, setIsMuted] = useState(initialMuted);

  // Синхронизируем состояние при загрузке
  useEffect(() => {
    setIsMuted(initialMuted);
  }, [initialMuted]);

  const toggleMute = (e: React.MouseEvent) => {
    e.stopPropagation();
    const video = videoRef.current;
    if (!video) return;

    if (isMuted) {
      // Пытаемся включить звук
      video.muted = false;
      setIsMuted(false);
      onMuteChange?.(false);

      // ХАК: Если это был первый клик пользователя,
      // помечаем систему как разблокированную для других видео
      window.isAudioUnlocked = true;

      // Safari check: если видео встало на паузу после unmute (бывает при строгих политиках)
      video.play().catch(() => {
        // Если заблокировано — возвращаем mute
        video.muted = true;
        setIsMuted(true);
        onMuteChange?.(true);
      });
    } else {
      video.muted = true;
      setIsMuted(true);
      onMuteChange?.(true);
    }
  };

  return (
    <button
      onClick={toggleMute}
      className="absolute md:top-6 top-20 md:right-4 right-1 z-50 flex h-12 w-12 items-center justify-center rounded-full bg-white/20 backdrop-blur-md transition-all hover:bg-white/40 active:scale-90"
      aria-label={isMuted ? "Включить звук" : "Выключить звук"}
    >
      {isMuted ? (
        // Иконка Muted (Перечеркнутый динамик)
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="white"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M11 5L6 9H2v6h4l5 4V5zM23 9l-6 6M17 9l6 6" />
        </svg>
      ) : (
        // Иконка Unmuted (Динамик с волнами)
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="white"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M11 5L6 9H2v6h4l5 4V5zM19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07" />
        </svg>
      )}
    </button>
  );
};
