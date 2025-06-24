"use client";
import React, { FC } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Card } from "./card";

export const TabContent: FC<{ list: { title: string; img: string }[] }> = ({
  list,
}) => {
  return (
    <Swiper slidesPerView={"auto"} wrapperClass="flex" className="w-full">
      {list.map(({ title, img }, index) => {
        return (
          <SwiperSlide className="min-w-[300px] px-2.5 mb-4 flex-1" key={index}>
            <Card image={img} title={title} />
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};
