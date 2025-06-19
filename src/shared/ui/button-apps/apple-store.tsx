"use client";
import Image from "next/image";
import appstore from "/public/assets/img/appstore.svg";
import appstoreDark from "/public/assets/img/appstore-dark.svg";

export const AppStoreButton = ({ isDark }: { isDark?: boolean }) => {
  const onClick = () => {
    globalThis.gtag("event", "button_appstore");
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
