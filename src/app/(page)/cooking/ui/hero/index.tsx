import { FC } from "react";
import { AppOpener } from "@/features/app-opener";
import { useTranslations } from "next-intl";
import { AutoCarousel } from "@/widgets/auto-carousel";
// import CountdownTimer from "@/widgets/timer";

const firstArr = Array.from(Array(30)).map(
  (_, index) => `/assets/img/cooking/hero/img(${(index % 10) + 1}).jpg`
);
const secondArr = Array.from(Array(30)).map(
  (_, index) => `/assets/img/cooking/hero/img(${(index % 10) + 10}).jpg`
);
const thirdArr = Array.from(Array(30)).map(
  (_, index) => `/assets/img/cooking/hero/img(${(index % 10) + 20}).jpg`
);

export const Hero: FC = () => {
  const t = useTranslations("Cooking.hero");
  const t_common = useTranslations("common");

  return (
    <section className="relative">
      <div className="mb-2">
        <AutoCarousel imageList={firstArr} />
      </div>
      <div className="mb-2">
        <AutoCarousel imageList={secondArr} isReversed />
      </div>
      <div>
        <AutoCarousel imageList={thirdArr} />
      </div>
      <div className="absolute w-full h-full top-0 left-0 bg-gradient-to-r from-[#181818]/80 to-[#181818]/0 pointer-events-none z-10"></div>
      <div className="absolute w-full h-full top-0 left-0 flex flex-wrap items-center z-20">
        <div className="w-full max-w-[1270px] mx-auto px-4">
          <h1 className="max-w-[815px] text-h1-clamp text-yellow-darker heading text-balance mb-4">
            {t("title")}
          </h1>
          <p className="mb-9 text-h4-clamp max-w-[544px]">{t("description")}</p>
          <AppOpener
            buttonText={t_common("start_for_free")}
            className="w-full sm:w-72 rounded-full"
          />
        </div>
      </div>
    </section>
  );
};
