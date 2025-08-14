import { FC } from "react";
import { AppOpener } from "@/features/app-opener";
import { useTranslations } from "next-intl";
import { AutoCarousel } from "@/widgets/auto-carousel";
// import CountdownTimer from "@/widgets/timer";

const firstArr = Array.from(Array(22)).map(
  (_, index) => `/assets/img/limitless/hero/img(${index + 1}).png`
);
const secondArr = Array.from(Array(22)).map(
  (_, index) => `/assets/img/limitless/hero/img(${(index % 11) + 11}).png`
);
const thirdArr = Array.from(Array(22)).map(
  (_, index) => `/assets/img/limitless/hero/img(${(index % 11) + 21}).png`
);

export const Hero: FC = () => {
  const t = useTranslations("Unlimited.hero");
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
          <h1 className="max-w-[815px] text-h1-clamp text-yellow-darker uppercase font-black font-apple text-balance mb-9">
            {t("title")}
          </h1>
          <AppOpener buttonText={t_common("free_download")} />
        </div>
      </div>
    </section>
  );
};
