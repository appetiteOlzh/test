"use client";
import React, { FC } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Card } from "./card";

type Props = { title: string; img: string; link: string; text: string }[];

export const TabContent: FC<{
  list: Props;
}> = ({ list }) => {
  return (
    <Swiper slidesPerView={"auto"} wrapperClass="flex" className="w-full">
      {list.map(({ title, img, link, text }, index) => {
        return (
          <SwiperSlide className="min-w-[300px] px-2.5 mb-4 flex-1" key={index}>
            <a href={link} target="_blank">
              <Card image={img} title={title} text={text} />
            </a>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};
