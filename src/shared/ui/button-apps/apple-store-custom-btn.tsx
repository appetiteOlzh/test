"use client";
import { FC } from "react";
import classNames from "classnames";
import { sendGAEvent } from "@/shared/lib/sendGa";

export const AppStoreCustomButton: FC<{
  className?: string;
  buttonText: string;
}> = ({ className, buttonText }) => {
  const onClick = () => {
    if (typeof window !== "undefined" && typeof window.gtag === "function") {
      globalThis.gtag("event", "button_appstore");
    } else {
      sendGAEvent("button_appstore");
    }
  };

  return (
    <a
      href={String(process.env.iosAppUrl)}
      rel="noopener noreferrer"
      className={classNames(
        "bg-gradient-to-br from-[#018C6E] via-[#014F42] to-[#035846] py-4 px-7 rounded-2xl text-yellow uppercase font-bold",

        className
      )}
    >
      <span onClick={onClick}>{buttonText}</span>
    </a>
  );
};
