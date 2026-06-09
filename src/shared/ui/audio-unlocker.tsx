"use client";
import { useEffect } from "react";

export const AudioUnlocker = () => {
  useEffect(() => {
    const unlock = async () => {
      const audio = new Audio(
        "data:audio/wav;base64,UklGRigAAABXQVZFZm10IBAAAAABAAEARKwAAIhYAQACABAAZGF0YQQAAAAAAA==",
      );
      try {
        await audio.play();
        window.isAudioUnlocked = true;
        // После успешного клика убираем глобальные слушатели
        console.log("Success");

        window.removeEventListener("click", unlock);
        window.removeEventListener("touchstart", unlock);
      } catch (e) {
        console.warn("Audio waiting for gesture", e);
      }
    };

    window.addEventListener("click", unlock);
    window.addEventListener("touchstart", unlock);
    return () => {
      window.removeEventListener("click", unlock);
      window.removeEventListener("touchstart", unlock);
    };
  }, []);

  return null;
};

// Добавим типизацию для TS
declare global {
  interface Window {
    isAudioUnlocked: boolean;
  }
}
