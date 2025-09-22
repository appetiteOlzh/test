"use client";
import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Mousewheel } from "swiper/modules";
import { Post } from "../post";
import "swiper/css";
import { AppOpener } from "@/features/app-opener";

import tiktok from "/public/assets/img/social/tiktok.svg";
import instagram from "/public/assets/img/social/instagram.svg";
import monclips from "/public/assets/img/monclips-icon.svg";

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
        loop
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
        <SwiperSlide className="h-full select-none">
          <Post img="/assets/img/application/post-6.png" />
          <div className="absolute top-0 bottom-0 left-0 right-0 flex flex-col content-end bg-gradient-to-b from-transparent to-black px-4 select-none">
            <div className="mt-auto mb-9">
              <div className="text-center">
                <div className="mb-10">
                  <Image src={monclips} alt="Monslips" className="mx-auto" />
                </div>
                <ul className="text-center pb-2">
                  <li className="mb-3">
                    <a href="mailto:support@monclips.com">
                      support@monclips.com
                    </a>
                  </li>
                  <li className="mb-4">
                    <Link href="/privacy-policy">Privacy policy</Link>
                  </li>
                  <li className="mb-4">
                    <Link href="/terms-of-service">Terms of use</Link>
                  </li>
                  <li className="mb-4">
                    <Link href="/eula">End-User License Agreement (EULA)</Link>
                  </li>
                </ul>
                <ul className="text-center mb-6">
                  <li className="mb-3">
                    <div className="flex flex-wrap items-center justify-center -mx-2">
                      <div className="flex-none px-2">
                        <a
                          href="https://www.tiktok.com/@monclipsapp"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Image src={tiktok} alt="Tiktok" />
                        </a>
                      </div>
                      <div className="flex-none px-2">
                        <a
                          href="https://www.instagram.com/monclipsapp"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Image src={instagram} alt="Instagram" />
                        </a>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
              <div
                style={{
                  margin: "18px 0px 30px",
                  height: "1px",
                  backgroundColor: "#B9B9B9",
                }}
              ></div>
              <p className="text-center">MONCLIPS, INC. 2024</p>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
};
