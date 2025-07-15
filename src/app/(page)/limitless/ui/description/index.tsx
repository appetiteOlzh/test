import Image from "next/image";
import React from "react";

export const DescriptionSection: React.FC = () => {
  return (
    <section id="description" className="pt-[180px]">
      <div className="max-w-[50rem] px-4 mx-auto relative animatable fade-in">
        <div className="absolute -top-[100px] lg:-left-[171px] left-0">
          <Image
            src="/assets/icons/quote-down.svg"
            width="240"
            height="240"
            alt=""
            className="w-[200px] h-[200px] md:w-[240px] md:h-[240px]"
          />
        </div>
        <h2 className="text-2xl md:text-4xl lg:text-5xl mb-8 font-apple font-black uppercase text-balance text-center text-yellow-darker">
          Built in Dubai for the world
        </h2>
        <p className="text-center text-xl md:text-2xl">
          MonClips was born in Dubai — a place where ambition, beauty and
          innovation meet. We built it because we were tired of paying to
          remember. Now we give that freedom to you.
        </p>
      </div>
    </section>
  );
};
