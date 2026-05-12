"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import { FC, useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

export const StepsSection: FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement[]>([]);

  useGSAP(
    () => {
      gsap.from(cardsRef.current, {
        opacity: 0,
        y: 40,
        duration: 0.8,
        stagger: 0.2,
        ease: "power2.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
        },
      });
    },
    { scope: sectionRef },
  );

  const steps = [
    {
      title: "Create",
      desc: "Your wedding album",
      img: "/assets/img/wedding/steps/1.png",
    },
    {
      title: "Share",
      desc: "One QR code",
      img: "/assets/img/wedding/steps/2.png",
    },
    {
      title: "Remember",
      desc: "Every moment together",
      img: "/assets/img/wedding/steps/3.png",
    },
  ];

  return (
    <section ref={sectionRef} className="bg-[#0C0C0C] py-20 md:py-40">
      <div className="container">
        <h2 className="text-h2-wed text-yellow-darker font-black font-apple text-center mb-16 md:mb-24">
          Create. Share. Remember.
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-2.5 md:gap-5">
          {steps.map((step, i) => (
            <div
              key={i}
              ref={(el) => {
                if (el) cardsRef.current[i] = el;
              }}
            >
              <div className="rounded-[48px] bg-[#101010] px-10 pb-11 text-center h-full">
                <Image
                  src={step.img}
                  alt={step.title}
                  className="mx-auto mb-8"
                  width={272}
                  height={268}
                />
                <h3 className="text-2xl md:text-3xl font-bold text-yellow-darker mb-1 tracking-wide">
                  {step.title}
                </h3>
                <p className="text-lg">{step.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
