"use client";
import Image from "next/image";
import { getClickGa } from "@/shared/lib/sendGa/get-client-on-click";
import appstore from "/public/assets/img/appstore.svg";
import appstoreDark from "/public/assets/img/appstore-dark.svg";

export const AppStoreButton = ({
  isDark,
  eventName = "button_appstore",
}: {
  isDark?: boolean;
  eventName?: string;
}) => {
  const onClick = getClickGa({
    eventName,
  });

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
