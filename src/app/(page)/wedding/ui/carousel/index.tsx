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

      gsap.to(items, {
        xPercent:
          (((width + gap) * items.length - gap - wrapperWidth) * -100) / width,
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
      title:
        "The celebration is still happening. The memories are already there.",
      img: "/assets/img/wedding/car-2.png",
      description: "One link to revisit it all.",
    },
    {
      title:
        "The celebration is still happening. The memories are already there.",
      img: "/assets/img/wedding/car-3.png",
      description:
        "Set up the album, place the QR code, and let guests open the memories instantly.",
    },
  ];

  return (
    <section id="carousel" className="overflow-hidden pt-32" ref={container}>
      <div className="container mx-auto px-4">
        <div className="flex flex-nowrap" ref={wrapper}>
          {items.map(({ title, img, description }, idx) => {
            const i = idx + 1;
            return (
              <div
                className="basis-[580px] shrink-0 grow-0 rounded-3xl relative overflow-hidden mr-5"
                key={i}
                ref={(el) => {
                  sliderItems.current[i - 1] = el;
                }}
              >
                <div className="slider-content">
                  <div className="relative">
                    <Image src={img} alt="" width={580} height={437} />
                    <div className="absolute bottom-0 left-0 w-full max-h-full p-10">
                      <h4 className="text-yellow-darker text-2xl font-black">
                        {title}
                      </h4>
                      {description && (
                        <p className="font-bold mt-2">{description}</p>
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
