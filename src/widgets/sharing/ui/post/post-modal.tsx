"use client";
import { FC, Fragment, MutableRefObject, useEffect, useState } from "react";
import { Swiper, SwiperRef, SwiperSlide } from "swiper/react";
import { Navigation, Mousewheel, Virtual } from "swiper/modules";
import cn from "classnames";
import { Modal } from "@/shared/ui/modal";

import s from "./styles.module.css";
import { PostItem } from "./post-item";
import { videoPool } from "@/shared/ui/video-player/video-controller";

type PostModalProps = {
  postList: PostProps[];
  swiperRef: MutableRefObject<SwiperRef | null>;
  onEndReached: () => void;
  modalIndex: number;
  onClose: () => void;
};

export const PostModal: FC<PostModalProps> = ({
  postList,
  swiperRef,
  onEndReached,
  modalIndex,
  onClose,
}) => {
  const [activeIndex, setActiveIndex] = useState(modalIndex);

  useEffect(() => {
    if (activeIndex === -1 && modalIndex !== -1) {
      setActiveIndex(modalIndex);
    }
  }, [modalIndex]);

  return (
    <Modal
      isOpen={modalIndex !== -1}
      onClose={onClose}
      size="lg"
      isTransparent
      isMedia
    >
      <Swiper
        direction="vertical"
        slidesPerView={1}
        initialSlide={modalIndex}
        modules={[Navigation, Mousewheel, Virtual]}
        className={cn(s.postSwiper, "h-dvh")}
        mousewheel={{
          enabled: true,
          thresholdTime: 300,
          thresholdDelta: 100,
          releaseOnEdges: true,
          forceToAxis: true,
        }}
        onReachEnd={onEndReached}
        ref={swiperRef}
        navigation
        breakpoints={{
          768: {
            spaceBetween: 50,
          },
        }}
        updateOnWindowResize
        onTransitionEnd={(swiper) => {
          swiper.allowTouchMove = true;
        }}
        virtual
        onSlideChange={(swiper) => {
          const i = swiper.activeIndex;
          setActiveIndex(i);

          const current = postList[i];
          if (!current) return;

          const next = i < postList.length - 1 ? postList[i + 1] : null;
          const prev = i > 0 ? postList[i - 1] : null;

          // 🎯 Optimization: Preload next/prev post's first media if it's a video
          // We don't call setActive here because VideoPlayer handles it via isActive prop

          if (next && next.medias && next.medias.length > 0) {
            const firstMedia = next.medias[0];
            if (firstMedia.type === "video") {
              videoPool.setPreload(String(firstMedia.id), "warm");
            }
          }

          if (prev && prev.medias && prev.medias.length > 0) {
            const firstMedia = prev.medias[0];
            if (firstMedia.type === "video") {
              videoPool.setPreload(String(firstMedia.id), "light");
            }
          }
        }}
      >
        {postList.map((post, idx) => {
          return (
            <Fragment key={post.id}>
              <SwiperSlide
                virtualIndex={idx}
                key={post.id}
                className="!flex items-center w-full touch-pan-y select-none"
                draggable={false}
              >
                <PostItem post={post} isActive={activeIndex === idx} />
              </SwiperSlide>
            </Fragment>
          );
        })}
      </Swiper>
    </Modal>
  );
};
