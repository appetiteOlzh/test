"use client";

import { useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

// images
import mess1 from "./img/1.png";
import mess2 from "./img/2.png";
import mess4 from "./img/4.png";
import mess5 from "./img/5.png";
import mess6 from "./img/6.png";
import mess7 from "./img/7.png";
import mess9 from "./img/9.png";
import mess10 from "./img/10.png";

gsap.registerPlugin(ScrollTrigger);

export const MessMobile = () => {
  const container = useRef(null);

  useGSAP(
    () => {
      const images = gsap.utils.toArray<HTMLElement>(".img-animate");

      images.forEach((img, i) => {
        gsap.from(img, {
          opacity: 0,
          x: i % 2 === 0 ? -50 : 50,
          y: 30,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: img,
            start: "top 95%",
            toggleActions: "play none none reverse",
          },
        });
      });

      gsap.from(".text-animate", {
        opacity: 0,
        y: 40,
        duration: 1,
        stagger: 0.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".text-animate",
          start: "top 90%",
        },
      });

      gsap.from(".phone-animate", {
        opacity: 0,
        y: 60,
        scale: 0.9,
        duration: 1.2,
        ease: "back.out(1.7)",
        scrollTrigger: {
          trigger: ".phone-animate",
          start: "top 85%",
        },
      });
    },
    { scope: container },
  );

  return (
    <div ref={container}>
      <section className="overflow-hidden pt-16">
        <div className="container">
          <div className="flex flex-wrap justify-between">
            <div className="basis-full relative mt-[280px]">
              <Image
                src={mess1}
                alt="mess1"
                className="rotate-[-8.62deg] absolute top-0 left-1/2 translate-y-[-268px] -translate-x-[208px] img-animate"
                width={mess1.width / 2}
                height={mess1.height / 2}
              />
              <Image
                src={mess2}
                alt="mess2"
                className="rotate-[9.3deg] absolute top-0 left-1/2 translate-y-[-268px] -translate-x-3 img-animate"
                width={mess2.width / 2}
                height={mess2.height / 2}
              />

              <h2 className="text-h2-wed text-yellow-darker font-black font-apple mb-4 text-center uppercase relative z-10 text-animate">
                Photos stay <br />
                in phones
              </h2>
            </div>
            <div className="basis-full relative mt-[352px]">
              <Image
                src={mess4}
                alt="mess4"
                className="rotate-[8.44deg] absolute top-0 left-1/2 translate-y-[-288px] -translate-x-[212px] img-animate"
                width={mess4.width / 2}
                height={mess4.height / 2}
              />
              <Image
                src={mess5}
                alt="mess5"
                className="rotate-[-11.46deg] absolute top-0 left-1/2 translate-y-[-236px] translate-x-5 img-animate"
                width={mess5.width / 2}
                height={mess5.height / 2}
              />

              <h2 className="text-h2-wed text-yellow-darker font-black font-apple mb-4 text-center uppercase relative z-10">
                Chats get messy
              </h2>
            </div>
            <div className="basis-full relative mt-[306px]">
              <Image
                src={mess6}
                alt="mess6"
                className="rotate-[8.44deg] absolute top-0 left-1/2 translate-y-[-266px] -translate-x-[212px] img-animate"
                width={mess6.width / 2}
                height={mess6.height / 2}
              />
              <Image
                src={mess7}
                alt="mess7"
                className="rotate-[-11.46deg] absolute top-0 left-1/2 translate-y-[-210px] translate-x-5 img-animate"
                width={mess7.width / 2}
                height={mess7.height / 2}
              />

              <h2 className="text-h2-wed text-yellow-darker font-black font-apple mb-4 text-center uppercase relative z-10">
                Stories disappear
              </h2>
            </div>
            <div className="basis-full relative mt-[262px]">
              <Image
                src={mess9}
                alt="mess9"
                className="rotate-[8.44deg] absolute top-0 left-1/2 translate-y-[-120px] -translate-x-[184px] z-10 img-animate"
                width={mess9.width / 3}
                height={mess9.height / 3}
              />
              <Image
                src={mess10}
                alt="mess10"
                className="rotate-[-11.46deg] absolute top-0 left-1/2 translate-y-[-214px] translate-x-[-76px] img-animate"
                width={mess10.width / 2}
                height={mess10.height / 2}
              />

              <h2 className="text-h2-wed text-yellow-darker font-black font-apple mb-4 text-center uppercase relative z-20 text-animate">
                Moments get <br />
                scattered
              </h2>
            </div>
          </div>
        </div>
      </section>
      <section className="pt-36">
        <div className="container">
          <h2 className="text-h2-wed text-yellow-darker font-black font-apple leading-[1.2] mb-4 text-center text-animate">
            What if it all stayed together?
          </h2>
          <p className="text-desc-mon font-bold mb-10 text-center text-animate">
            One wedding. One album.
            <br />
            One place for every moment.
          </p>
          <Image
            src="/assets/img/wedding/together.png"
            alt="MonClips wedding album on iPhone"
            width={366}
            height={884}
            className="w-[276px] max-w-full mx-auto phone-animate"
            quality={100}
            priority
          />
        </div>
      </section>
    </div>
  );
};
