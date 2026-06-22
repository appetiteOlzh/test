"use client";

import { useEffect, useState } from "react";
import { QRCode } from "react-qrcode-logo";
import { getClickGa } from "@/shared/lib/sendGa/get-client-on-click";
import { matchDevice } from "@/shared/lib/match-device";
import { AppStoreButton, GoogleplayButton, Modal } from "@/shared/ui";

export function QrGlowButton({
  children,
  className = "",
  url = "https://monclips.com/download",
  eventName = "desktop_popup",
}: {
  children: React.ReactNode;
  className?: string;
  url?: string;
  eventName?: string;
}) {
  const [userAgent, setUserAgent] = useState("");

  useEffect(() => {
    const value = document.cookie
      .split("; ")
      .find((row) => row.startsWith("deviceOs="))
      ?.split("=")[1];

    setUserAgent(value ?? "");
  }, []);

  const [hovered, setHovered] = useState(false);
  const [isOpen, setOpen] = useState(false);

  const onClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (matchDevice(userAgent).isWeb) {
      e.preventDefault();
      setHovered(false);
      getClickGa({
        eventName,
        callback: () => setOpen(true),
      })();
    }
  };

  return (
    <div
      className="relative inline-block"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <a
        href={url}
        className={`${className} flex items-center justify-center`}
        onClick={onClick}
      >
        {children}
      </a>

      {/* modal */}
      <Modal
        isOpen={isOpen}
        onClose={() => setOpen(false)}
        size="sm"
        isRestricted
      >
        <div className="p-6 text-center">
          <div className="mb-6">
            <QRCode
              value={url}
              size={144}
              bgColor="transparent"
              fgColor="#fff"
              qrStyle="fluid"
              eyeRadius={8}
              style={{ margin: "auto" }}
              quietZone={0}
            />
          </div>
          <h4 className="gradient-text text-center text-xl leading-none mb-4 font-bold">
            Scan the QR code to download the MonClips app
          </h4>
          <p className="text-input-default mb-6 font-medium">
            Download from app stores
          </p>
          <div className="flex flex-wrap -mx-2 justify-center">
            <div className="basis-1/2 px-2">
              <GoogleplayButton />
            </div>
            <div className="basis-1/2 px-2">
              <AppStoreButton />
            </div>
          </div>
        </div>
      </Modal>
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
          <p className="text-sm text-white/70 font-medium text-center mt-3">
            Get the app
          </p>
        </div>
      </div>
    </div>
  );
}
