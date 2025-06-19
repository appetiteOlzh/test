"use client";
import { FC, useState } from "react";
import { MediaSlider } from "../media";
import { useTranslations } from "next-intl";
import { ShowMore } from "@re-dev/react-truncate";
import { CustomControls } from "@/shared/ui/video-player";

export const PostItem: FC<{
  post: Omit<PostProps, "id">;
}> = ({ post }) => {
  const t = useTranslations("common");
  const [lastVisibleVideo, setLastVisibleVideo] =
    useState<HTMLVideoElement | null>(null);

  const setVisibleVideo = (video: HTMLVideoElement | null) =>
    setLastVisibleVideo(video);

  return (
    <div className="bg-dark md:rounded-[32px] md:p-9 max-h-screen overflow-auto basis-full">
      <MediaSlider mediaList={post.medias} setVisibleVideo={setVisibleVideo} />
      <div className="md:static absolute inset-0 z-20 flex flex-wrap content-end pointer-events-none">
        <div
          className="basis-full min-w-0 pt-6 md:pb-5 md:px-0 md:mb-0 swiper-no-mousewheel px-4 pb-[124px] -mb-[124px] md:bg-none bg-gradient-to-t from-black md:due-black/80 to-transparent"
          onWheel={(e) => e.stopPropagation()}
        >
          <ShowMore
            className="text-white font-medium pointer-events-auto pb-4"
            lines={2}
            more={t("show_more")}
            less={t("show_less")}
            anchorClass="text-yellow pointer-events-auto"
          >
            {post.text}
          </ShowMore>
        </div>
        {lastVisibleVideo && (
          <div className="md:px-0 px-4 py-2 basis-full md:hidden">
            <CustomControls lastVideo={lastVisibleVideo} />
          </div>
        )}
        <div className="basis-full px-4 md:px-0 rounded-full">
          <div className="h-px border border-b-2 border-input-default/40"></div>
        </div>
        <div className="basis-full w-full min-w-0 pt-5 pb-6 px-4 md:px-0 md:pb-0">
          <p className="text-xs md:text-base">{post.createdAt}</p>
        </div>
      </div>
    </div>
  );
};
