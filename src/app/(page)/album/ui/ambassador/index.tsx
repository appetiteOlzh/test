"use client";

import Image from "next/image";
import { FC } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const imageList = [
  "/assets/img/organize/ambassador/1.png?v=2",
  "/assets/img/organize/ambassador/2.jpg?v=2",
  "/assets/img/organize/ambassador/3.png?v=2",
];

export const Ambassador: FC = () => {
  return (
    <section className="pt-[60px] md:pt-[130px]" id="ambassador">
      <div className="container">
        <div className="flex flex-wrap flex-row-reverse">
          <div className="basis-full md:basis-1/2 xl:basis-5/12 xl:pl-10 md:pl-6 pt-10 mb-6">
            <h2 className="text-h2-clamp text-yellow-darker uppercase font-black font-apple mb-3 md:mb-4">
              Александр Шумский
            </h2>
            <ul className="list-disc pl-7 text-lg !leading-snug">
              <li>20 лет в event-индустрии</li>
              <li>1000+ мероприятий позади</li>
              <li>Ведущий-новатор</li>
              <li>Основатель shum.kz</li>
            </ul>
          </div>
          <div className="basis-full md:basis-1/2 xl:basis-7/12 min-w-0">
            <div className="w-full xl:rounded-[36px] rounded-3xl overflow-hidden">
              <Swiper
                modules={[Pagination, Navigation]}
                slidesPerView={1}
                loop
                wrapperClass="flex ease-linear"
                navigation={{
                  nextEl: ".swiper-button-next",
                  prevEl: ".swiper-button-prev",
                }}
                pagination={{
                  clickable: true,
                  bulletActiveClass: "swiper-pagination-bullet-active",
                  bulletClass: "swiper-pagination-bullet",
                }}
              >
                {imageList.map((image, index) => (
                  <SwiperSlide
                    key={index}
                    className="min-w-0 basis-full w-full block"
                  >
                    <Image
                      src={image}
                      alt={`Slide ${index + 1}`}
                      className="w-full h-[387px] object-cover object-top"
                      width={780}
                      height={387}
                    />
                  </SwiperSlide>
                ))}
                <div className="swiper-button-prev"></div>
                <div className="swiper-button-next"></div>
              </Swiper>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
