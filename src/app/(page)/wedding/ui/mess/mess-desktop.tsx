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
  // ── Upper row (level of first heading pair) ──
  { left: "3.6%", yOffset: 0, rotation: -8.62, z: 1 },
  { left: "23.23%", yOffset: -20, rotation: 9.3, z: 2 },
  { left: "33%", yOffset: 30, rotation: -6.57, z: 3 },
  { left: "58%", yOffset: -15, rotation: 9.57, z: 2 },
  { left: "80.32%", yOffset: 10, rotation: -6.05, z: 3 },
  // ── Lower row (level of second heading pair) ──
  { left: "4.6%", yOffset: 15, rotation: 8.44, z: 1 },
  { left: "25.44%", yOffset: -10, rotation: -11.46, z: 2 },
  { left: "38.54%", yOffset: -25, rotation: 3.05, z: 1 },
  { left: "55.75%", yOffset: -40, rotation: 6.65, z: 2 },
  { left: "71%", yOffset: 5, rotation: -9.62, z: 1 },
];

export const MessDesktop: FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<Array<HTMLDivElement | null>>([]);
  const messTextRef = useRef<HTMLDivElement>(null);
  const messHeadingsRef = useRef<HTMLDivElement>(null);
  const albumHeadingRef = useRef<HTMLHeadingElement>(null);
  const albumSubRef = useRef<HTMLParagraphElement>(null);
  const phoneRef = useRef<HTMLDivElement>(null);

  const addToRefs = (el: HTMLDivElement | null) => {
    if (el && !cardsRef.current.includes(el)) {
      cardsRef.current.push(el);
    }
  };

  useGSAP(
    () => {
      const cards = cardsRef.current;
      if (!cards.length || !containerRef.current) return;

      // ── Measure heading row positions BEFORE gsap.set changes layout ──
      const containerRect = containerRef.current.getBoundingClientRect();
      const headingsEl = messHeadingsRef.current;
      let row1Y = containerRect.height * 0.3; // fallback
      let row2Y = containerRect.height * 0.6; // fallback

      if (headingsEl && headingsEl.children.length >= 2) {
        const row1Rect = headingsEl.children[0].getBoundingClientRect();
        const row2Rect = headingsEl.children[1].getBoundingClientRect();
        // Center of each heading row, relative to container top
        row1Y = row1Rect.top + row1Rect.height / 2 - containerRect.top;
        row2Y = row2Rect.top + row2Rect.height / 2 - containerRect.top;
      }

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "+=300%",
          scrub: 1,
          pin: true,
        },
      });

      // Initial states
      gsap.set(cards, {
        x: () => gsap.utils.random(-300, 300),
        y: () => gsap.utils.random(-300, 300),
        rotation: () => gsap.utils.random(-10, 10),
        scale: 0.8,
        opacity: 0,
      });

      // Headings start invisible
      gsap.set(messHeadingsRef.current, { opacity: 0, y: 20 });

      gsap.set([albumHeadingRef.current, albumSubRef.current], {
        opacity: 0,
        y: 30,
      });
      gsap.set(phoneRef.current, { opacity: 0, scale: 0.7 });

      // ── PHASE 1: Cards appear in the center ──
      tl.to(cards, {
        opacity: 1,
        scale: 1,
        duration: 0.15,
        ease: "power2.out",
        stagger: 0.02,
      })

        // ── PHASE 2: Scatter out to edges ──
        .to(
          cards,
          {
            left: (i: number) => scatterTargets[i % scatterTargets.length].left,
            top: "-10vh",
            x: "50%",
            y: (i: number) => {
              const target = scatterTargets[i % scatterTargets.length];
              const baseY = i < 5 ? row1Y : row2Y;
              return baseY + target.yOffset;
            },
            rotation: (i: number) =>
              scatterTargets[i % scatterTargets.length].rotation,
            duration: 0.8,
            ease: "power1.inOut",
          },
          "+=0.05",
        )

        // ── PHASE 2.5: Headings appear after cards land ──
        .to(
          messHeadingsRef.current,
          {
            opacity: 1,
            y: 0,
            duration: 0.3,
            ease: "power2.out",
          },
          "-=0.2",
        )

        // Hold with headings visible
        .to({}, { duration: 0.25 })

        // ── PHASE 3: Fade out mess text ──
        .to(messTextRef.current, {
          opacity: 0,
          duration: 0.3,
          ease: "power2.in",
        })

        // ── PHASE 4: Cards converge to center and shrink into phone ──
        .to(
          cards,
          {
            left: "50%",
            top: "50%",
            x: "-50%",
            y: "-50%",
            scale: 0,
            rotation: 0,
            opacity: 0,
            duration: 1,
            ease: "power2.inOut",
            stagger: 0.015,
          },
          "-=0.15",
        )

        // ── PHASE 5: Phone mockup appears ──
        .to(
          phoneRef.current,
          {
            opacity: 1,
            scale: 1,
            duration: 0.5,
            ease: "back.out(1.5)",
          },
          "-=0.5",
        )

        // ── PHASE 6: Album heading appears ──
        .to(
          albumHeadingRef.current,
          {
            opacity: 1,
            y: 0,
            duration: 0.3,
            ease: "power2.out",
          },
          "-=0.3",
        )

        // Album subheading appears
        .to(
          albumSubRef.current,
          {
            opacity: 1,
            y: 0,
            duration: 0.25,
            ease: "power2.out",
          },
          "-=0.1",
        )

        // Hold album view
        .to({}, { duration: 0.4 });
    },
    { scope: containerRef },
  );

  return (
    <section ref={containerRef}>
      <div className="w-full min-h-screen flex items-center justify-center relative">
        {/* ── MESS TEXT (fades out during transition) ── */}
        <div
          ref={messTextRef}
          className="absolute inset-x-4 top-1/2 -translate-y-1/2 z-40 pointer-events-none flex flex-col items-center justify-center"
        >
          <div className="container pt-[20vh]">
            <div ref={messHeadingsRef}>
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
            </div>
          </div>
        </div>

        {/* ── SCATTERED CARDS (bounded by container width) ── */}
        <div className="absolute inset-0 z-30 pointer-events-none">
          <div className="container mx-auto relative h-full">
            {Array.from({ length: 10 }).map((_, index) => (
              <div
                key={index}
                ref={addToRefs}
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 will-change-transform drop-shadow-xl"
                style={{ zIndex: scatterTargets[index].z }}
              >
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

        {/* ── ALBUM CONTENT (fades in after cards converge) ── */}
        <div className="absolute inset-0 z-20 flex flex-col items-center justify-center pointer-events-none px-4 text-center">
          <h2
            ref={albumHeadingRef}
            className="text-h2-wed text-yellow-darker font-black font-apple leading-[1.2] mb-4 md:mb-6"
          >
            What if it all stayed
            <br />
            together?
          </h2>

          <p
            ref={albumSubRef}
            className="text-desc-mon font-bold mb-8 md:mb-12"
          >
            One wedding. One album.
            <br />
            One place for every moment.
          </p>

          <div ref={phoneRef} className="relative">
            <Image
              src="/assets/img/wedding/together.png"
              alt="MonClips wedding album on iPhone"
              width={366}
              height={884}
              className="w-full h-[60vh] min-h-[680px]"
              quality={100}
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
};
