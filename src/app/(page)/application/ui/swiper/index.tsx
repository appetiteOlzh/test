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
import monclips from "/public/assets/img/monclips.svg";
import { useState } from "react";

const images = [
  {
    img: "/assets/img/application/post-1.png",
    title: "MonClips Gallery — your vertical gallery",
  },
  {
    img: "/assets/img/application/post-2.png",
    title: "Watch your photos and videos like TikTok",
  },
  {
    img: "/assets/img/application/post-3.png",
    title: "Switch between different viewing modes",
  },
  {
    img: "/assets/img/application/post-4.png",
    title: "Find and delete unwanted files",
  },
  {
    img: "/assets/img/application/post-5.png",
    title: "Share moments on social media and in messengers",
  },
  {
    img: "/assets/img/application/post-6.png",
    title: (
      <>
        Works offline <br />— in the subway, <br />
        on a plane, <br />
        anywhere
      </>
    ),
  },
  {
    img: "/assets/img/application/post-7.png",
    title: (
      <>
        100% secure. <br />
        No registration required. <br />
        Start for free.
      </>
    ),
  },
];

export const VerticalScroll = () => {
  const [isGifVisible, setGifVisible] = useState(true);

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
        onTransitionStart={() => setGifVisible(false)}
      >
        {isGifVisible ? (
          <div className="absolute top-[90px] left-1/2 -translate-x-1/2 w-[100px] h-[100px] z-50 rotate-180 pointer-events-none">
            <Image
              src={"/assets/img/application/chevron.gif"}
              alt="gif"
              unoptimized
              width={100}
              height={100}
            />
          </div>
        ) : null}
        {images.map(({ img, title }) => (
          <SwiperSlide className="h-full select-none" key={img}>
            <Post img={img} />
            <div className="absolute top-0 bottom-0 left-0 right-0 flex flex-col content-end px-4 select-none">
              <div className="mb-14 mt-auto">
                <h1 className="text-4xl sm:text-2xl uppercase font-black font-apple mb-6 max-w-80 sm:max-w-64">
                  {title}
                </h1>
                <AppOpener
                  buttonText="Download now"
                  className="block text-center w-full rounded-full normal-case"
                />
              </div>
            </div>
          </SwiperSlide>
        ))}
        <SwiperSlide className="h-full select-none">
          <Post img="/assets/img/application/post-2.png" />
          <div className="absolute top-0 bottom-0 left-0 right-0 flex flex-col content-end px-4 select-none">
            <div className="mt-auto mb-9">
              <div className="text-center">
                <div className="mb-10">
                  <Image
                    src={monclips}
                    alt="Monslips"
                    className="mx-auto"
                    unoptimized
                  />
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
              <p className="text-center">MONCLIPS, INC. 2026</p>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
};
