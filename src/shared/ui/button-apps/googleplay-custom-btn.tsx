"use client";
import classNames from "classnames";
import Link from "next/link";
import { FC } from "react";

export const GoogleplayCustomButton: FC<{
  className?: string;
  isPremium?: boolean;
  buttonText: string;
}> = ({ className, buttonText }) => {
  const onClick = () => {
    globalThis.gtag("event", "button_googleplay");
  };

  return (
    <Link
      href={String(process.env.androidAppUrl)}
      target="_blank"
      rel="noopener noreferrer"
      onClick={onClick}
      className={classNames(
        "bg-gradient-to-br from-[#018C6E] via-[#014F42] to-[#035846] py-4 px-7 rounded-2xl text-yellow uppercase font-bold",

        className
      )}
    >
      {buttonText}
    </Link>
  );
};
