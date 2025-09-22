"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Mousewheel } from "swiper/modules";
import { Post } from "../post";
import "swiper/css";
import { AppOpener } from "@/features/app-opener";

const images = [
  {
    img: "/assets/img/application/post-1.png",
    title: "Scroll your camera roll like a TikTok",
    subtitle: "Every swipe is a surprise",
  },
  {
    img: "/assets/img/application/post-2.png",
    title: "Find favorite and forgotten moments",
    subtitle: "Feel them again",
  },
  {
    img: "/assets/img/application/post-3.png",
    title: "Share emotions with friends and family",
    subtitle: "Relive it together",
  },
  {
    img: "/assets/img/application/post-4.png",
    title: "Organize memories into albums",
    subtitle: "Upload instantly",
  },
  {
    img: "/assets/img/application/post-5.png",
    title: "Delete unwanted shots",
    subtitle: "Free up your phone",
  },
];

export const VerticalScroll = () => {
  return (
    <>
      <Swiper
        direction="vertical"
        slidesPerView={1}
        modules={[Mousewheel]}
        mousewheel={{
          enabled: true,
          thresholdTime: 300,
          thresholdDelta: 100,
          releaseOnEdges: true,
          forceToAxis: true,
        }}
        touchStartPreventDefault={false}
        className="h-full overflow-hidden"
        wrapperClass="h-full"
      >
        {images.map(({ img, title, subtitle }) => (
          <SwiperSlide className="h-full select-none" key={img}>
            <Post img={img} />
            <div className="absolute top-0 bottom-0 left-0 right-0 flex flex-col content-end bg-gradient-to-b from-transparent to-black px-4 select-none">
              <div className="mb-16 mt-auto">
                <h1 className="text-4xl sm:text-3xl uppercase font-black font-apple text-balance">
                  {title}
                </h1>
                <p className="font-black text-lg font-apple mb-6">{subtitle}</p>
                <AppOpener
                  buttonText="Download now"
                  className="block text-center w-full rounded-full"
                />
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};
