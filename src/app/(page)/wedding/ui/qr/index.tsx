"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import { FC, useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

export const QrSection: FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const cards = gsap.utils.toArray<HTMLElement>(".qr-card");
      if (!cards.length) return;

      // Initial state: cards are layered slightly offset
      cards.forEach((card, index) => {
        if (index === 1) {
          gsap.set(card, {
            y: "110%", // Card 2 starts below
          });
        }
        if (index === 2) {
          gsap.set(card, {
            y: "200%", // Card 3 starts even lower
          });
        }
        gsap.set(card, {
          zIndex: index + 1,
        });
      });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "+=100%",
          scrub: 1,
          pin: true,
        },
      });

      // Animate card 2 and 3: Card 3 starts LATER to let Card 2 be visible
      tl.to(
        cards[1],
        {
          y: 40, // Land with offset
          ease: "none",
        },
        0,
      );

      tl.to(
        cards[2],
        {
          y: 80, // Land with more offset
          ease: "none",
        },
        0.5, // Delay start so we see Card 2 fully
      );
    },
    { scope: sectionRef },
  );

  return (
    <section ref={sectionRef}>
      <div className="container py-20 md:py-32">
        <div className="flex flex-wrap items-start -mx-5 min-h-[80vh]">
          {/* Left Block - Sticky Text */}
          <div className="basis-full md:basis-1/2 px-5">
            <div className="max-w-xl">
              <h2 className="text-h2-wed font-black font-apple text-yellow-darker leading-[1.1] mb-6 md:mb-10">
                Guests scan.
                <br />
                Open. Enjoy.
              </h2>
              <p className="text-xl md:text-2xl font-bold text-white/80 leading-snug">
                No app. No registration.
              </p>
            </div>
          </div>

          {/* Right Block - Stacking Cards */}
          <div className="basis-full md:basis-1/2 px-5 mt-16 md:mt-0">
            <div className="relative w-full aspect-[580/610]">
              <div className="qr-card absolute inset-0 rounded-[36px] md:rounded-[64px] overflow-hidden shadow-2xl origin-bottom">
                <Image
                  src="/assets/img/wedding/qr/1.png"
                  alt="QR Step 1"
                  className="w-full h-full object-cover"
                  width={580}
                  height={610}
                />
              </div>

              <div className="qr-card absolute inset-0 rounded-[36px] md:rounded-[64px] overflow-hidden shadow-2xl origin-bottom">
                <Image
                  src="/assets/img/wedding/qr/2.png"
                  alt="QR Step 2"
                  className="w-full h-full object-cover"
                  width={580}
                  height={610}
                />
              </div>

              <div className="qr-card absolute inset-0 rounded-[36px] md:rounded-[64px] overflow-hidden shadow-2xl origin-bottom">
                <Image
                  src="/assets/img/wedding/qr/3.png"
                  alt="QR Step 3"
                  className="w-full h-full object-cover"
                  width={580}
                  height={610}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
