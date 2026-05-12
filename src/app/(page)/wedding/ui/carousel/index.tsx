"use client";
import Image from "next/image";
import { FC, useRef } from "react";
// gsap
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

export const CarouselSection: FC = () => {
  const container = useRef<HTMLDivElement>(null);
  const wrapper = useRef<HTMLDivElement>(null);
  const sliderItems = useRef<(HTMLDivElement | null)[]>([]);

  useGSAP(
    (context) => {
      const items = gsap.utils.toArray<HTMLDivElement>(
        sliderItems.current,
        context,
      );
      const width = items[0].offsetWidth;
      const gap = parseInt(getComputedStyle(items[0]).marginRight);
      const wrapperWidth = wrapper.current?.offsetWidth ?? 0;

      const mm = gsap.matchMedia();

      mm.add("(min-width: 768px)", () => {
        gsap.to(items, {
          xPercent:
            (((width + gap) * items.length - gap - wrapperWidth) * -100) /
            width,
          ease: "none",
          scrollTrigger: {
            trigger: container.current,
            pin: true,
            scrub: 1,
            snap: 1 / (items.length - 1),
            end: () =>
              "+=" + (width + gap) * ((width * items.length) / wrapperWidth),
          },
        });
      });
    },
    [container, wrapper, sliderItems],
  );

  const items = [
    {
      title:
        "The celebration is still happening. The memories are already there.",
      img: "/assets/img/wedding/car-1.png",
    },
    {
      title: "When the day is over, the memories stay together.",
      img: "/assets/img/wedding/car-2.png",
      description: "One link to revisit it all.",
    },
    {
      title: "Simple for couples. Easy for wedding teams.",
      img: "/assets/img/wedding/car-3.png",
      description:
        "Set up the album, place the QR code, and let guests open the memories instantly.",
    },
  ];

  return (
    <section id="carousel" className="overflow-hidden pt-32" ref={container}>
      <div className="container mx-auto !px-0 sm:px-4">
        <div className="flex flex-wrap md:flex-nowrap" ref={wrapper}>
          {items.map(({ title, img, description }, idx) => {
            const i = idx + 1;
            return (
              <div
                className="md:basis-[580px] basis-full shrink-0 grow-0 sm:rounded-3xl relative overflow-hidden md:mr-5 mb-2.5 md:mb-0"
                key={i}
                ref={(el) => {
                  sliderItems.current[i - 1] = el;
                }}
              >
                <div className="slider-content">
                  <div className="relative h-[437px] md:h-auto">
                    <Image
                      src={img}
                      alt=""
                      width={580}
                      height={437}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute bottom-0 left-0 w-full max-h-full md:p-10 p-7">
                      <h4 className="text-yellow-darker text-2xl font-black text-balance">
                        {title}
                      </h4>
                      {description && (
                        <p className="font-bold mt-2 text-balance">
                          {description}
                        </p>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
