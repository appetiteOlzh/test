"use client";
import Image from "next/image";
import { FC, ReactNode, useRef, useState } from "react";
import { gsap } from "gsap";
import cn from "classnames";

type Props = {
  title: string;
  children: ReactNode;
};

export const AccordionItem: FC<Props> = ({ title, children }) => {
  const contentRef = useRef<HTMLDivElement>(null);
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    const content = contentRef.current;

    if (isOpen) {
      setIsOpen(false);
      gsap.to(content, {
        height: 0,
        duration: 0.4,
        ease: "power2.inOut",
      });
    } else {
      setIsOpen(true);
      gsap.fromTo(
        content,
        { height: 0 },
        {
          height: content?.scrollHeight,
          duration: 0.4,
          ease: "power2.inOut",
        }
      );
    }
  };

  return (
    <div className="border-b border-[#313131]">
      <button
        onClick={toggleAccordion}
        className="w-full flex justify-between items-center py-5 text-left text-lg md:text-2xl font-black uppercase"
      >
        {title}
        <div
          className={cn("transition-transform delay-0 duration-300", {
            "rotate-180": !isOpen,
          })}
        >
          <Image
            src={"/assets/icons/arrow.svg"}
            alt=""
            width={24}
            height={24}
          />
        </div>
      </button>
      <div ref={contentRef} style={{ height: 0, overflow: "hidden" }}>
        <div className="pb-5 text-[#B9B9B9]">{children}</div>
      </div>
    </div>
  );
};
