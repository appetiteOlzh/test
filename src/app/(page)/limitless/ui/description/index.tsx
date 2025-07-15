import Image from "next/image";
import React from "react";
import { useTranslations } from "next-intl";

export const DescriptionSection: React.FC = () => {
  const t = useTranslations("Unlimited.dubai");

  return (
    <section id="description" className="pt-[180px]">
      <div className="max-w-[50rem] px-4 mx-auto relative animatable fade-in">
        <div className="absolute -top-[100px] lg:-left-[171px] left-0">
          <Image
            src="/assets/icons/quote-down.svg"
            width="240"
            height="240"
            alt=""
            className="w-[200px] h-[200px] md:w-[240px] md:h-[240px]"
          />
        </div>
        <h2
          className="text-2xl md:text-4xl lg:text-5xl mb-8 font-apple font-black uppercase text-center text-yellow-darker"
          dangerouslySetInnerHTML={{ __html: t.raw("title") }}
        ></h2>
        <p className="text-center text-xl md:text-2xl">{t("description")}</p>
      </div>
    </section>
  );
};
