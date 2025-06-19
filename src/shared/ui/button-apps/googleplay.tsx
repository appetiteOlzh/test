"use client";
import Image from "next/image";
import googleplay from "/public/assets/img/googleplay.svg";
import googleplayDark from "/public/assets/img/googleplay-dark.svg";

export const GoogleplayButton = ({ isDark }: { isDark?: boolean }) => {
  const onClick = () => {
    globalThis.gtag("event", "button_googleplay");
  };

  return (
    <a
      href={String(process.env.androidAppUrl)}
      target="_blank"
      rel="noopener noreferrer"
      onClick={onClick}
    >
      {isDark ? (
        <Image
          className="w-full"
          src={googleplayDark}
          alt="Get Monclips on Google Play"
        />
      ) : (
        <Image
          className="w-full"
          src={googleplay}
          alt="Get Monclips on Google Play"
        />
      )}
    </a>
  );
};
