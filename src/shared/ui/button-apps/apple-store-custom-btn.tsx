"use client";
import { FC } from "react";
import classNames from "classnames";
import { getClickGa } from "@/shared/lib/sendGa/get-client-on-click";

export const AppStoreCustomButton: FC<{
  className?: string;
  buttonText: string;
  eventName?: string;
}> = ({ className, buttonText, eventName = "button_appstore" }) => {
  const onClick = getClickGa({
    eventName,
  });

  return (
    <a
      href={String(process.env.iosAppUrl)}
      rel="noopener noreferrer"
      className={classNames(
        "bg-gradient-to-br from-[#018C6E] via-[#014F42] to-[#035846] py-4 px-7 rounded-2xl text-yellow uppercase font-bold",

        className,
      )}
    >
      <span onClick={onClick}>{buttonText}</span>
    </a>
  );
};
