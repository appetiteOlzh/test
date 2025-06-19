import { FC } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Virtual } from "swiper/modules";
import cn from "classnames";
import { MediaItem } from "./media-item";

import "swiper/css/pagination";

import s from "./styles.module.css";

export const MediaSlider: FC<{
  mediaList: MediaProps[];
  setVisibleVideo: (video: HTMLVideoElement | null) => void;
}> = ({ mediaList, setVisibleVideo }) => {
  return (
    <Swiper
      pagination={{
        dynamicBullets: true,
        dynamicMainBullets: 3,
      }}
      autoHeight={false}
      modules={[Pagination, Navigation, Virtual]}
      navigation={true}
      virtual
      // absolute top-0 left-0 w-full
      className={cn(s.mediaSwiper, "w-screen h-screen md:w-auto md:h-auto")}
      updateOnWindowResize
      touchStartPreventDefault={false}
    >
      {mediaList.map((media) => (
        <SwiperSlide
          key={media.id}
          className="w-full h-full select-none"
          draggable={false}
        >
          <MediaItem {...media} setVisibleVideo={setVisibleVideo} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};
