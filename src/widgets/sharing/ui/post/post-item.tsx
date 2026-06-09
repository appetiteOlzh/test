"use client";
import Image from "next/image";
import { FC, useState } from "react";
import { useTranslations } from "next-intl";
import { ShowMore } from "@re-dev/react-truncate";
import cn from "classnames";
import { normalizeDuration } from "@/shared/lib/format-video-timer";
import { MediaSlider } from "../media";

export const PostItem: FC<{
  post: PostProps;
  isActive: boolean;
}> = ({ post, isActive }) => {
  const t = useTranslations("common");
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);

  if (!post.medias?.length) return null;

  return (
    <div className="bg-dark md:rounded-[32px] md:p-9 max-h-dvh overflow-hidden md:overflow-auto basis-full relative">
      <div className="absolute top-0 left-0 w-full h-28 z-10 pointer-events-none md:hidden">
        <Image
          src="/assets/img/overlay.png"
          alt="overlay"
          width={375}
          height={110}
          unoptimized
          className="w-full h-full object-cover object-top"
        />
      </div>
      <MediaSlider
        mediaList={post.medias}
        isActive={isActive}
        setCurrentTime={setCurrentTime}
        setDuration={setDuration}
      />
      <div className="md:static absolute inset-0 z-20 flex flex-wrap content-end pointer-events-none">
        {post.text ? (
          <div
            className={cn(
              "flex items-end max-h-dvh",
              "basis-full min-w-0 swiper-no-mousewheel",
              "bg-gradient-to-t from-black md:due-black/80 to-transparent md:bg-none",
              "pt-6 px-4 pb-[164px] -mb-[124px]",
              "md:pb-5 md:px-0 md:mb-0",
            )}
            onWheel={(e) => e.stopPropagation()}
          >
            <div className="w-full min-h-12 max-h-full overflow-auto md:max-h-none md:overflow-visible swiper-no-swiping">
              <ShowMore
                className="text-white font-medium pointer-events-auto"
                lines={2}
                more={t("show_more")}
                less={t("show_less")}
                anchorClass="text-yellow pointer-events-auto"
              >
                {post.text}
              </ShowMore>
            </div>
          </div>
        ) : (
          <div
            className={cn(
              "flex items-end max-h-dvh",
              "basis-full min-w-0 swiper-no-mousewheel",
              "bg-gradient-to-t from-black md:due-black/80 to-transparent md:bg-none",
              "pt-6 px-4 pb-[124px] -mb-[124px]",
              "md:pb-5 md:px-0 md:mb-0",
            )}
            onWheel={(e) => e.stopPropagation()}
          />
        )}
        {/* <div className="basis-full px-4 md:px-0 rounded-full hidden md:block">
          <div className="h-px border border-b-2 border-input-default/40"></div>
        </div> */}
        <div className="basis-full w-full min-w-0 md:pt-5 pb-6 px-4 md:px-0 md:pb-0">
          <div className="flex flex-wrap">
            {post.medias[0].type === "video" && (
              <div className="ml-auto">
                <p className="text-xs md:text-base">
                  {normalizeDuration(String(currentTime))}/
                  {normalizeDuration(String(duration))}
                </p>
              </div>
            )}
          </div>
        </div>
        <DownloadButton url={post.medias[0].url} filename={post.createdAt} />
      </div>
    </div>
  );
};

type Props = {
  url: string;
  filename?: string;
};

export const DownloadButton = ({ url, filename = "file" }: Props) => {
  const handleDownload = async () => {
    try {
      const response = await fetch(url, {
        method: "GET",
        mode: "cors", // Явно указываем CORS
      });

      if (!response.ok) throw new Error("Network response was not ok");

      const blob = await response.blob();
      const blobUrl = window.URL.createObjectURL(blob);

      const link = document.createElement("a");
      link.href = blobUrl;
      link.download = filename;

      // Важно для Safari: добавляем в DOM
      document.body.appendChild(link);

      link.click();

      // Чистим память с небольшой задержкой
      setTimeout(() => {
        link.remove();
        window.URL.revokeObjectURL(blobUrl);
      }, 100);
    } catch {
      // Если CORS не настроен на CDN, fetch не сработает.
      // Единственный вариант — открыть в новой вкладке.
      window.open(url, "_blank");
    }
  };

  return (
    <button
      className="absolute top-0 right-0 p-4 md:top-9 md:right-6 w-14 h-14 pointer-events-auto md:m-0 md:p-4 md:bg-white/20 rounded-full z-20"
      onClick={handleDownload}
    >
      <Image
        className="w-full h-full relative z-10"
        src="/assets/icons/download.svg"
        alt="download"
        width={36}
        height={36}
        unoptimized
      />
    </button>
  );
};
