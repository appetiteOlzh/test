"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Mousewheel } from "swiper/modules";
// import { AppOpener } from "@/features/app-opener";
import { Post } from "../post";
import { swiperData } from "../../data";

import tiktok from "/public/assets/img/social/tiktok.svg";
import instagram from "/public/assets/img/social/instagram.svg";
import monclips from "/public/assets/img/monclips.svg";

import "swiper/css";
import { useMobile } from "@/shared/lib/use-mobile";

export const VerticalScroll = () => {
  const [isGifVisible, setGifVisible] = useState(true);
  const isMobile = useMobile();

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
        {swiperData.map(({ img, title }) => (
          <SwiperSlide className="h-full select-none" key={img}>
            <Post img={img} />
            <div className="absolute top-0 bottom-0 left-0 right-0 flex flex-col content-end px-4 select-none">
              <div className="mb-14 mt-auto">
                <h1 className="text-2xl uppercase font-black mb-2 max-w-80 -mr-2">
                  {title}
                </h1>
                {/* <AppOpener
                  buttonText="Download now"
                  className="block text-center w-full rounded-full normal-case"
                /> */}
              </div>
            </div>
          </SwiperSlide>
        ))}
        {isMobile ? (
          <SwiperSlide className="h-full select-none">
            <Post img="/assets/img/application/footer.png?v=1" />
            <div className="absolute top-0 bottom-0 left-0 right-0 flex flex-col content-end px-4 select-none">
              <div className="mt-auto mb-9">
                <div className="text-center">
                  <div className="mb-10">
                    <Image
                      src={monclips}
                      alt="Monslips"
                      className="mx-auto pointer-events-none select-none"
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
                      <Link href="/eula">
                        End-User License Agreement (EULA)
                      </Link>
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
        ) : null}
      </Swiper>
    </>
  );
};
