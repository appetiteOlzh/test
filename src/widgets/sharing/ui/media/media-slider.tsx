import { FC, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";
import cn from "classnames";
import { MediaItem } from "./media-item";

import "swiper/css/pagination";

import s from "./styles.module.css";
import { videoPool } from "@/shared/ui/video-player/video-controller";

export const MediaSlider: FC<{
  mediaList: MediaProps[];
  isActive: boolean;
  setCurrentTime: (time: number) => void;
  setDuration: (duration: number) => void;
}> = ({ mediaList, isActive, setCurrentTime, setDuration }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  if (!mediaList?.length) return null;

  return (
    <Swiper
      pagination={{
        dynamicBullets: true,
        dynamicMainBullets: 3,
      }}
      autoHeight={false}
      modules={[Pagination, Navigation]}
      navigation={true}
      className={cn(s.mediaSwiper, "w-full h-dvh md:w-auto md:h-auto")}
      updateOnWindowResize
      touchStartPreventDefault={false}
      onSlideChange={(swiper) => {
        const i = swiper.activeIndex;
        setActiveIndex(i);

        const next = i < mediaList.length - 1 ? mediaList[i + 1] : null;
        const prev = i > 0 ? mediaList[i - 1] : null;

        if (next && next.type === "video") {
          videoPool.setPreload(String(next.id), "warm");
        }

        if (prev && prev.type === "video") {
          videoPool.setPreload(String(prev.id), "light");
        }
      }}
    >
      {mediaList.map((media, idx) => (
        <SwiperSlide
          key={media.id}
          className="w-full h-full select-none"
          draggable={false}
        >
          <MediaItem
            {...media}
            isActive={isActive && activeIndex === idx}
            setCurrentTime={setCurrentTime}
            setDuration={setDuration}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};
