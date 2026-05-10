"use client";

import { FC, useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";

// images
import mess1 from "./img/1.png";
import mess2 from "./img/2.png";
import mess3 from "./img/3.png";
import mess4 from "./img/4.png";
import mess5 from "./img/5.png";
import mess6 from "./img/6.png";
import mess7 from "./img/7.png";
import mess8 from "./img/8.png";
import mess9 from "./img/9.png";
import mess10 from "./img/10.png";

const images = [
  mess1,
  mess2,
  mess3,
  mess4,
  mess5,
  mess6,
  mess7,
  mess8,
  mess9,
  mess10,
];

gsap.registerPlugin(ScrollTrigger);

const scatterTargets = [
  { top: "0%", left: "0%", y: "-50%", rotation: -8.62, z: 1 },
  { top: "0%", left: "21.23%", y: "-50%", rotation: 9.3, z: 2 },
  { top: "0%", left: "33%", y: "-50%", rotation: -6.57, z: 3 },
  { top: "0%", left: "57%", y: "-40%", rotation: 9.57, z: 2 },
  { top: "0%", left: "81.32%", y: "-50%", rotation: -6.05, z: 3 },
  //
  { top: "0%", left: "4.6%", y: "100%", rotation: 8.44, z: 1 },
  { top: "0%", left: "25.44%", y: "120%", rotation: -11.46, z: 2 },
  { top: "0%", left: "38.54%", y: "150%", rotation: 3.05, z: 1 },
  { top: "0%", left: "61.75%", y: "75%", rotation: 6.65, z: 2 },
  { top: "0%", left: "77%", y: "125%", rotation: -9.62, z: 1 },
];

export const Mess: FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<Array<HTMLDivElement | null>>([]);

  const addToRefs = (el: HTMLDivElement | null) => {
    if (el && !cardsRef.current.includes(el)) {
      cardsRef.current.push(el);
    }
  };

  useGSAP(
    () => {
      const cards = cardsRef.current;
      if (!cards.length || !containerRef.current) return;

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "+=150%", // Scroll distance for pinning
          scrub: 1,
          pin: true,
        },
      });

      // Target scatter positions for desktop (can be responsive via CSS, but GSAP uses these absolute or viewport relative values)
      // We will use slight random offsets in viewport units so it scales

      // Initial state: slightly clustered in the center, transparent and scaled down
      gsap.set(cards, {
        x: () => gsap.utils.random(-300, 300),
        y: () => gsap.utils.random(-300, 300),
        rotation: () => gsap.utils.random(-10, 10),
        scale: 0.8,
        opacity: 0,
      });

      // Animation sequence
      // 1. Appear in the center
      tl.to(cards, {
        opacity: 1,
        scale: 1,
        duration: 0.2,
        ease: "power2.out",
        stagger: 0.02,
      })
        // 2. Scatter out to edges
        .to(
          cards,
          {
            left: (i) => scatterTargets[i % scatterTargets.length].left,
            top: (i) => scatterTargets[i % scatterTargets.length].top,
            x: "50%",
            y: (i) => scatterTargets[i % scatterTargets.length].y,
            rotation: (i) => scatterTargets[i % scatterTargets.length].rotation,
            duration: 1,
            ease: "power1.inOut",
          },
          "+=0.1",
        );
    },
    { scope: containerRef },
  );

  return (
    <section className="bg-background overflow-hidden" ref={containerRef}>
      {/* Pinned height wrapper is managed by GSAP pin, so we just need a 100vh container */}
      <div className="w-full h-screen overflow-hidden flex items-center justify-center relative">
        {/* Central Text */}
        <div className="absolute inset-x-4 top-1/2 -translate-y-1/2 z-40 pointer-events-none flex flex-col items-center justify-center">
          <div className="container relative">
            <div className="w-full flex flex-wrap justify-between relative z-10 mb-64">
              <h2 className="text-h2-wed font-black font-apple text-yellow-darker">
                Photos stay in phones
              </h2>
              <h2 className="text-h2-wed font-black font-apple text-yellow-darker">
                Chats get messy
              </h2>
            </div>
            <div className="w-full flex flex-wrap justify-between relative z-10">
              <h2 className="text-h2-wed font-black font-apple  text-yellow-darker drop-shadow-2xl">
                Stories disappear
              </h2>
              <h2 className="text-h2-wed font-black font-apple leading-[1.2] text-yellow-darker drop-shadow-2xl">
                Moments get scattered
              </h2>
            </div>

            {/* --- SCATTERED CARDS --- */}
            {Array.from({ length: 10 }).map((_, index) => (
              <div
                key={index}
                ref={addToRefs}
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 will-change-transform drop-shadow-xl"
                style={{ zIndex: scatterTargets[index].z }}
              >
                {/* 
              Using img for natural aspect ratio retention.
              Next Image requires strict aspect ratio boundaries which may warp differently shaped figma assets.
            */}
                <Image
                  src={images[index]}
                  className="pointer-events-none"
                  alt={`Memory fragment ${index + 1}`}
                  width={images[index].width / 2}
                  height={images[index].height / 2}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
