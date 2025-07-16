import { FC } from "react";
import { TabContent } from "./tab-content";
import { useTranslations } from "next-intl";

export const Albums: FC = () => {
  const t = useTranslations("Unlimited.album");

  const galleryList = [
    {
      title: t("made_by", { author: "Гаухар" }),
      img: "/assets/img/limitless/album/maldives.png",
      link: "https://share.monclips.com/c/13fgc77nvow8sl",
    },
    {
      title: t("made_by", { author: "Aru" }),
      img: "/assets/img/limitless/album/maldives-1.png",
      link: "https://share.monclips.com/c/1797vek78fxwdgj",
    },
    {
      title: t("made_by", { author: "Hoc" }),
      img: "/assets/img/limitless/album/viet.png",
      link: "https://share.monclips.com/c/105786vvjdwxqkxw45",
    },
  ];

  return (
    <section className="pt-[160px]">
      <div className="max-w-[970px] mx-auto px-4">
        <h2 className="text-2xl md:text-4xl lg:text-5xl mb-8 font-apple font-black uppercase text-balance md:text-center text-yellow-darker">
          {t("title")}
        </h2>
        <p className="text-lg md:text-2xl leading-tight mb-14 text-balance text-[#B9B9B9] md:text-center">
          {t("description")}
        </p>
        <div className="overflow-hidden mb-4">
          <TabContent list={galleryList} />
        </div>
        <p className="text-lg md:text-2xl leading-tight mb-14 text-balance text-yellow-darker md:text-center">
          {t("description_second")}
        </p>
      </div>
    </section>
  );
};
