import { useTranslations } from "next-intl";
import Image from "next/image";
import React from "react";

export const Quote: React.FC = () => {
  const t = useTranslations("Cooking.quote");

  return (
    <section className="section">
      <div className="max-w-3xl px-4 md:py-11 pt-14 mx-auto">
        <div className="relative">
          <div className="absolute -top-[74px] lg:-left-[88px] left-4">
            <Image
              src="/assets/img/quote-down.svg"
              width="240"
              height="240"
              alt=""
              className="w-[140px] h-[140px] md:w-[240px] md:h-[240px]"
            />
          </div>
          <p className="text-center text-h4-clamp mb-3">{t("text")}</p>
          <p className="text-center">
            <i>{t("author")}</i>
          </p>
        </div>
      </div>
    </section>
  );
};
