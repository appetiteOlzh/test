"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import { FC, useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

// Fix for mobile jitter and jumping on address bar hide/show
ScrollTrigger.config({
  ignoreMobileResize: true,
});

export const QrSection: FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      // Ensure ScrollTrigger refreshes once layout is fully settled
      // This fix addresses the issue where mobile animations only work after resize
      const refreshTimeout = setTimeout(() => {
        ScrollTrigger.refresh();
      }, 100);

      const cards = gsap.utils.toArray<HTMLElement>(".qr-card");
      if (!cards.length) return;

      const mm = gsap.matchMedia();

      mm.add(
        {
          isDesktop: "(min-width: 768px)",
          isMobile: "(max-width: 767px)",
        },
        (context) => {
          const { isMobile } = context.conditions as { isMobile: boolean };

          // Initial state: cards are layered below and ready to slide in
          cards.forEach((card, index) => {
            if (index === 1) {
              gsap.set(card, {
                y: isMobile ? "105%" : "110%",
              });
            }
            if (index === 2) {
              gsap.set(card, {
                y: isMobile ? "210%" : "220%",
              });
            }
            gsap.set(card, {
              zIndex: index + 1,
              willChange: "transform",
            });
          });

          const tl = gsap.timeline({
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top top",
              end: isMobile ? "+=150%" : "+=50%",
              scrub: 1,
              pin: true,
              anticipatePin: 1,
              invalidateOnRefresh: true,
            },
          });

          // Animate card 2 and 3 into their stacked positions
          tl.to(
            cards[1],
            {
              y: isMobile ? 12 : 40,
              ease: "none",
              force3D: true,
            },
            0,
          );

          tl.to(
            cards[2],
            {
              y: isMobile ? 24 : 80,
              ease: "none",
              force3D: true,
            },
            isMobile ? 0.5 : 0, // Both cards start at 0 on desktop
          );
        },
      );

      return () => {
        clearTimeout(refreshTimeout);
        mm.revert();
      };
    },
    { scope: sectionRef },
  );

  return (
    <section ref={sectionRef}>
      <div className="container py-20 md:py-32">
        <div className="flex flex-wrap items-start md:-mx-5 min-h-[60vh]">
          <div className="basis-full md:basis-1/2 md:px-5">
            <div className="max-w-xl text-center md:text-left">
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

          <div className="basis-full md:basis-1/2 md:px-5 mt-8 md:mt-0">
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
