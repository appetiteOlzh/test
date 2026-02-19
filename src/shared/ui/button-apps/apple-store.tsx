"use client";
import Image from "next/image";
import appstore from "/public/assets/img/appstore.svg";
import appstoreDark from "/public/assets/img/appstore-dark.svg";
import { sendGAEvent } from "@/shared/lib/sendGa";

export const AppStoreButton = ({ isDark }: { isDark?: boolean }) => {
  const onClick = () => {
    if (typeof window !== "undefined" && typeof window.gtag === "function") {
      globalThis.gtag("event", "button_appstore");
    } else {
      sendGAEvent("button_appstore");
    }
  };

  return (
    <a href={String(process.env.iosAppUrl)} rel="noopener noreferrer">
      <div onClick={onClick}>
        {isDark ? (
          <Image
            className="w-full"
            src={appstoreDark}
            alt="Download Monclips on the AppStore"
          />
        ) : (
          <Image
            className="w-full"
            src={appstore}
            alt="Download Monclips on the AppStore"
          />
        )}
      </div>
    </a>
  );
};
