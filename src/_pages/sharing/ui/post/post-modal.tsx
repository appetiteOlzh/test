"use client";
import { FC, Fragment, MutableRefObject, useEffect, useState } from "react";
import { usePathname, useSearchParams } from "next/navigation";
import { Swiper, SwiperRef, SwiperSlide } from "swiper/react";
import { Navigation, Mousewheel } from "swiper/modules";
import cn from "classnames";
import { Modal } from "@/shared/ui/modal";

import s from "./styles.module.css";
import { PostItem } from "./post-item";

type PostModalProps = {
  postList: PostProps[];
  swiperRef: MutableRefObject<SwiperRef | null>;
  onEndReached: () => void;
};

export const PostModal: FC<PostModalProps> = ({
  postList,
  swiperRef,
  onEndReached,
}) => {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const query = searchParams.get("post");

  const onQueryOnSlide = (postId: number) => {
    const params = new URLSearchParams(searchParams.toString());
    params.set("post", String(postId));
    window.history.replaceState(null, "", `?${params.toString()}`);
  };

  useEffect(() => {
    if (query && postList.length)
      setPostIndex(() => {
        return postList.findIndex(({ id }) => id === Number(query));
      });
    else {
      setPostIndex(-1);
    }
  }, [postList, query]);

  const onClose = () => {
    window.history.replaceState(null, "", pathname);
  };

  const [postIndex, setPostIndex] = useState(
    postList.findIndex(({ id }) => id === Number(query))
  );

  return (
    <Modal
      isOpen={postIndex !== -1}
      onClose={onClose}
      size="lg"
      isTransparent
      isMedia
    >
      <Swiper
        direction="vertical"
        slidesPerView={1}
        initialSlide={postIndex}
        modules={[Navigation, Mousewheel]}
        className={cn(s.postSwiper)}
        mousewheel={{
          enabled: true,
          thresholdTime: 300,
          thresholdDelta: 100,
          releaseOnEdges: true,
          forceToAxis: true,
        }}
        onSlideChange={(swiper) => {
          const index = swiper.activeIndex;
          const { id } = postList[index];
          onQueryOnSlide(id);
        }}
        onReachEnd={onEndReached}
        ref={swiperRef}
        navigation
        breakpoints={{
          768: {
            spaceBetween: 50,
          },
        }}
        autoHeight
        updateOnWindowResize
        touchStartPreventDefault={false}
      >
        {postList.map(({ id, ...post }) => {
          return (
            <Fragment key={id}>
              <SwiperSlide
                key={id}
                className="max-h-screen !flex items-center w-full touch-pan-y select-none"
                draggable={false}
              >
                <PostItem post={post} />
              </SwiperSlide>
            </Fragment>
          );
        })}
      </Swiper>
    </Modal>
  );
};
