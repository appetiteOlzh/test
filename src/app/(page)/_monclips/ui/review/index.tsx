"use client";
import { FC } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import cn from "classnames";

import { Tag } from "../tag";
import s from "./style.module.css";

const reviewList = [
  {
    text: "“MonClips вытащил фото, где мы смеёмся с мамой. Я совсем забыла, что оно было. Спасибо, теперь это мой утренний ритуал.”",
    author: "Алия, 26 лет",
  },
  {
    text: "“Это как личный сериал. Без лайков, без чужих мнений. Просто я и моя жизнь.”",
    author: "Артём, 30 лет",
  },
  {
    text: "“Раньше я залипала в чужие сторис, теперь — в свои. Настроение реально поднимается.”",
    author: "Мария, 24 года",
  },
  {
    text: "“MonClips делает что-то простое, но гениальное. Напоминает, что я живу не зря.”",
    author: "Ислам, 27 лет",
  },
];

export const Review: FC = () => {
  return (
    <section id="review" className="overflow-hidden pt-15">
      <div className="container">
        <div className="p-6 md:p-10">
          <Tag href="#goal" className="mb-6 z-20">
            Отзывы
          </Tag>
          <div className={cn("relative", s.slider)}>
            <Swiper
              className="overflow-hidden"
              wrapperClass="flex"
              spaceBetween={24}
              slidesPerView="auto"
              loop
              centeredSlides
            >
              {reviewList.map(({ text, author }, index) => {
                return (
                  <SwiperSlide
                    key={index}
                    className="flex flex-col content-between basis-[360px] min-w-[360px] max-w-full h-[200px]"
                  >
                    <Tag
                      href="#review"
                      className="pointer-events-none mb-0 h-full"
                      style="gold-nocontent"
                    >
                      <i className="font-medium">{text}</i>
                      <p className="text-sm text-[#B9B9B9] mt-auto">{author}</p>
                    </Tag>
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  );
};
