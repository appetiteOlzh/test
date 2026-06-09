import { useRef } from "react";

type Props = {
  currentTime: number;
  duration: number;
  onSeek: (time: number) => void;
};

export const CustomProgress = ({ currentTime, duration, onSeek }: Props) => {
  const trackRef = useRef<HTMLDivElement | null>(null);

  const progress = duration > 0 ? currentTime / duration : 0;

  const handleSeek = (clientX: number) => {
    const el = trackRef.current;
    if (!el || !duration) return;

    const rect = el.getBoundingClientRect();
    const ratio = (clientX - rect.left) / rect.width;

    const clamped = Math.max(0, Math.min(1, ratio));

    onSeek(clamped * duration);
  };

  return (
    <div
      ref={trackRef}
      className="relative w-full h-1 bg-white/60 rounded-full cursor-pointer"
      onClick={(e) => handleSeek(e.clientX)}
      onPointerDown={(e) => handleSeek(e.clientX)}
    >
      {/* filled progress */}
      <div
        className="absolute left-0 top-0 h-full bg-white rounded-full"
        style={{ width: `${progress * 100}%` }}
      />

      {/* thumb */}
      {/* <div
        className="absolute top-1/2 -translate-y-1/2 h-3 w-3 bg-white rounded-full shadow-sm"
        style={{ left: `${progress * 100}%` }}
      /> */}
    </div>
  );
};
