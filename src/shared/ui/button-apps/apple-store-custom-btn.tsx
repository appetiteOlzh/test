"use client";
import { useTranslations } from "next-intl";
import { FC } from "react";
import classNames from "classnames";

export const AppStoreCustomButton: FC<{
  className?: string;
  isPremium?: boolean;
  textVarity?: "family";
}> = ({ className, isPremium, textVarity }) => {
  const t = useTranslations("common");
  const onClick = () => {
    globalThis.gtag("event", "button_appstore");
  };

  return (
    <a
      href={String(process.env.iosAppUrl)}
      rel="noopener noreferrer"
      className={classNames(
        "bg-gradient-to-br from-[#018C6E] via-[#014F42] to-[#035846] py-4 px-7 rounded-2xl text-yellow uppercase font-bold",
        {
          "w-full md:w-80 block text-center":
            isPremium || textVarity === "family",
        },
        className
      )}
    >
      <span onClick={onClick}>
        {textVarity === "family"
          ? t("download_monclips")
          : isPremium
          ? t("free_download")
          : t("open_in_monclips")}
      </span>
    </a>
  );
};
