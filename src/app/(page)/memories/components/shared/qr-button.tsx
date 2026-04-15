"use client";

import { useState } from "react";
import { QRCode } from "react-qrcode-logo";

// Кнопка с QR-кодом — при наведении на десктопе показывает стилизованный QR справа
export function QrGlowButton({
  children,
  className = "",
  url = "https://monclips.com/download",
}: {
  children: React.ReactNode;
  className?: string;
  url?: string;
}) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className="relative inline-block"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <a href={url} className={`${className} flex items-center justify-center`}>
        {children}
      </a>

      {/* QR popup — снизу от кнопки, только десктоп */}
      <div
        className="hidden md:block absolute left-1/2 top-full mt-4 transition-all duration-300 pointer-events-none z-[100]"
        style={{
          opacity: hovered ? 1 : 0,
          transform: `translateX(-50%) ${hovered ? "translateY(0)" : "translateY(-8px)"}`,
        }}
      >
        <div className="relative bg-neutral-800 rounded-2xl p-4 shadow-2xl shadow-black/40 border border-white/[0.08]">
          {/* Стрелка вверх */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1.5">
            <div className="w-3 h-3 bg-neutral-800 border-l border-t border-white/[0.08] rotate-45" />
          </div>
          {/* QR со скруглёнными точками */}
          <div className="rounded-xl overflow-hidden">
            <QRCode
              value={url}
              size={130}
              bgColor="#262626"
              fgColor="#ffffff"
              qrStyle="dots"
              eyeRadius={8}
              quietZone={0}
            />
          </div>
          <p className="text-sm text-white/70 font-medium text-center mt-3">Get the app</p>
        </div>
      </div>
    </div>
  );
}
