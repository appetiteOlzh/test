"use client";
import { useTranslations } from "next-intl";
import React, { FC } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

export const Review: React.FC = () => {
  const t = useTranslations("Home");

  return (
    <section id="review" className="md:py-[100px] py-20 overflow-hidden">
      <div className="max-w-[79.5rem] px-4 mx-auto">
        <h2
          className="text-h1-clamp font-apple font-black mb-4 uppercase text-center max-w-[53rem] mx-auto animatable slide-up"
          dangerouslySetInnerHTML={{ __html: t.raw("review.title") }}
        ></h2>
        <p className="text-lg md:text-2xl text-center mb-9">
          С нами уже сотни тысяч людей из 100+ стран.
        </p>
        <Swiper
          slidesPerView={"auto"}
          wrapperClass="flex -mx-3 animatable fade-in"
        >
          <SwiperSlide className="min-w-60 md:min-w-80 basis-1/3 px-3">
            <Card
              title={t("review.list.0.name")}
              description={t("review.list.0.text")}
            />
          </SwiperSlide>
          <SwiperSlide className="min-w-60 md:min-w-80 basis-1/3 px-3">
            <Card
              title={t("review.list.1.name")}
              description={t("review.list.1.text")}
            />
          </SwiperSlide>
          <SwiperSlide className="min-w-60 md:min-w-80 basis-1/3 px-3">
            <Card
              title={t("review.list.2.name")}
              description={t("review.list.2.text")}
            />
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
};

const Card: FC<{ title: string; description: string }> = (props) => {
  const { title, description } = props;

  return (
    <div className="px-4 py-5 rounded-2xl border border-[#434343] bg-[#333] h-full flex flex-wrap content-between">
      <div className="mt-auto basis-full">
        <h4 className="font-apple font-black text-base md:text-2xl mb-2">
          {title}
        </h4>
        <p className="text-light md:text-lg text-sm">{description}</p>
      </div>
    </div>
  );
};
