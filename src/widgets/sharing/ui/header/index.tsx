import Image from "next/image";
import { FC, isValidElement, ReactNode } from "react";
import { useTranslations } from "next-intl";
import Monclips from "/public/assets/img/monclips-icon.svg";

export const Header: FC<{
  author: string;
  lngSelect: ReactNode;
  appNavigator: ReactNode;
}> = ({ author, lngSelect, appNavigator }) => {
  const t = useTranslations("Sharing");

  return (
    <header className="container mx-auto pt-12 pb-6 px-4">
      <div className="flex flex-wrap items-center">
        <div className="flex-none mr-12">
          <Image
            src={Monclips}
            alt="Monclips Gallery"
            className="w-[154px] md:w-auto"
          />
        </div>
        <div className="md:flex-1 basis-full order-1 md:-order-none pt-6 md:pt-0">
          <p className="font-secondary font-bold text-xl">
            {t("you_were_shared")}
          </p>
          <p className="font-secondary font-bold">
            {t("author")}: {author}
          </p>
        </div>
        {isValidElement(appNavigator) ? (
          <div className="flex-none px-9 hidden md:block">{appNavigator}</div>
        ) : null}
        <div className="flex-none ml-auto">{lngSelect}</div>
      </div>
    </header>
  );
};
