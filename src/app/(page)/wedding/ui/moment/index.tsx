"use client";

import { FC, useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

const ROW_1_IMAGES = [
  "/assets/img/wedding/moment/1.png",
  "/assets/img/wedding/moment/2.png",
  "/assets/img/wedding/moment/3.png",
  "/assets/img/wedding/moment/4.png",
  "/assets/img/wedding/moment/5.png",
  "/assets/img/wedding/moment/6.png",
  "/assets/img/wedding/moment/7.png",
];

const ROW_2_IMAGES = [
  "/assets/img/wedding/moment/5.png",
  "/assets/img/wedding/moment/6.png",
  "/assets/img/wedding/moment/7.png",
  "/assets/img/wedding/moment/8.png",
  "/assets/img/wedding/moment/9.png",
  "/assets/img/wedding/moment/1.png",
];

export const Moment: FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const row1Ref = useRef<HTMLDivElement>(null);
  const row2Ref = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      if (!containerRef.current || !row1Ref.current || !row2Ref.current) return;

      // Top row moves left
      gsap.fromTo(
        row1Ref.current,
        { x: "0%" },
        {
          x: "-35%",
          ease: "none",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top bottom",
            end: "bottom top",
            scrub: 1,
          },
        },
      );

      // Bottom row moves right
      gsap.fromTo(
        row2Ref.current,
        { x: "-35%" },
        {
          x: "0%",
          ease: "none",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top bottom",
            end: "bottom top",
            scrub: 1,
          },
        },
      );
    },
    { scope: containerRef },
  );

  return (
    <section className="py-20 md:py-32 relative md:h-[180vh] h-screen">
      <div
        className="sticky top-[15vh] md:top-[20vh]  overflow-hidden"
        ref={containerRef}
      >
        <div className="container mx-auto px-4 mb-8 md:mb-14 flex flex-col items-center text-center">
          <h2 className="text-h2-wed text-yellow-darker font-black font-apple leading-[1.2] mb-5 md:mb-8">
            <span className="block">One day.</span>
            <span className="block">So many faces.</span>
            <span className="block">So many moments.</span>
          </h2>
          <p className="text-desc-mon font-bold max-w-sm mx-auto">
            Not everything should disappear into phones and chats.
          </p>
        </div>

        <div className="flex flex-col gap-4 md:gap-5 w-full">
          {/* Row 1 */}
          <div className="w-max flex gap-4 md:gap-5" ref={row1Ref}>
            {ROW_1_IMAGES.map((src, index) => (
              <div
                key={`row1-${index}`}
                className="relative min-w-[306px] w-[380px] md:w-[26.4vw] aspect-[380/214] flex-shrink-0 overflow-hidden rounded-xl md:rounded-2xl"
              >
                <Image
                  src={src}
                  alt="Wedding moment"
                  fill
                  sizes="(max-width: 768px) 60vw, 30vw"
                  className="object-cover"
                  quality={100}
                />
              </div>
            ))}
          </div>

          {/* Row 2 */}
          <div
            className="w-max flex gap-4 md:gap-5 relative left-[-15vw] md:left-[-10vw]"
            ref={row2Ref}
          >
            {ROW_2_IMAGES.map((src, index) => (
              <div
                key={`row2-${index}`}
                className="relative min-w-[306px] w-[380px] md:w-[26.4vw] aspect-[380/214] flex-shrink-0 overflow-hidden rounded-xl md:rounded-2xl"
              >
                <Image
                  src={src}
                  alt="Wedding moment"
                  fill
                  sizes="(max-width: 768px) 60vw, 30vw"
                  className="object-cover"
                  quality={100}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
