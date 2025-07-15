import { FC } from "react";
import { TabContent } from "./tab-content";

export const Albums: FC = () => {
  const galleryList = [
    {
      title: "Made by Гаухар",
      img: "/assets/img/limitless/album/maldives.png",
      link: "https://share.monclips.com/c/13fgc77nvow8sl",
    },
    {
      title: "Made by Aru",
      img: "/assets/img/limitless/album/maldives-1.png",
      link: "https://share.monclips.com/c/1797vek78fxwdgj",
    },
    {
      title: "Made by Hoc",
      img: "/assets/img/limitless/album/viet.png",
      link: "https://share.monclips.com/c/105786vvjdwxqkxw45",
    },
  ];

  return (
    <section className="md:pt-[120px] pt-[180px]">
      <div className="max-w-[970px] mx-auto px-4">
        <h2 className="text-2xl md:text-4xl lg:text-5xl mb-8 font-apple font-black uppercase text-balance md:text-center text-yellow-darker">
          Real Albums from Real People
        </h2>
        <p className="text-lg md:text-2xl leading-tight mb-14 text-balance text-[#B9B9B9] md:text-center">
          People all over the world are already using MonClips to create and
          keep what matters. Here’s what their albums look like:
        </p>
        <div className="overflow-hidden">
          <TabContent list={galleryList} />
        </div>
      </div>
    </section>
  );
};
