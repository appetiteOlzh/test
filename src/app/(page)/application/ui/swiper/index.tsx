"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Mousewheel } from "swiper/modules";
import { Post } from "../post";
import "swiper/css";
import { AppOpenerButton } from "@/features/app-opener/ui/button";

const images = [
  "/assets/img/application/post-1.png",
  "/assets/img/application/post-2.png",
  "/assets/img/application/post-3.png",
  "/assets/img/application/post-4.png",
  "/assets/img/application/post-5.png",
  "/assets/img/application/post-6.png",
  "/assets/img/application/post-7.png",
  "/assets/img/application/post-8.png",
  "/assets/img/application/post-9.png",
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
        <SwiperSlide className="h-full flex content-end pb-18 select-none">
          <h1 className="text-4xl uppercase font-black font-apple mb-24 px-4">
            Scroll your gallery like tiktok
          </h1>
        </SwiperSlide>
        {images.map((img, idx) => (
          <SwiperSlide className="h-full" key={img}>
            <Post img={img} />
            {idx === 2 ? (
              <div className="absolute top-0 bottom-0 left-0 right-0 flex flex-col content-end bg-gradient-to-b from-transparent to-black px-4 select-none">
                <div className="mb-24 mt-auto">
                  <h1 className="text-4xl uppercase font-black font-apple">
                    Local and private
                  </h1>
                  <p className="font-black text-lg font-apple mb-6">
                    Stays on device
                  </p>
                  <AppOpenerButton
                    buttonText="Download now"
                    className="w-full rounded-full"
                  />
                </div>
              </div>
            ) : null}
            {idx === 5 ? (
              <div className="absolute top-0 bottom-0 left-0 right-0 flex flex-col content-end bg-gradient-to-b from-transparent to-black px-4 select-none">
                <div className="mb-24 mt-auto">
                  <h1 className="text-4xl uppercase font-black font-apple">
                    Fast <br />
                    Sorting
                  </h1>
                  <p className="font-black text-lg font-apple mb-6">
                    Done in a couple of taps
                  </p>
                  <AppOpenerButton
                    buttonText="Download now"
                    className="w-full rounded-full"
                  />
                </div>
              </div>
            ) : null}
            {idx === 8 ? (
              <div className="absolute top-0 bottom-0 left-0 right-0 flex flex-col content-end bg-gradient-to-b from-transparent to-black px-4 select-none">
                <div className="mb-24 mt-auto">
                  <h1 className="text-4xl uppercase font-black font-apple">
                    Easy Organization
                  </h1>
                  <p className="font-black text-lg font-apple mb-6">
                    Photos and videos in place
                  </p>
                  <AppOpenerButton
                    buttonText="Download now"
                    className="w-full rounded-full"
                  />
                </div>
              </div>
            ) : null}
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};
