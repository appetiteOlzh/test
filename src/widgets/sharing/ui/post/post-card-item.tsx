import Image from "next/image";
import { CSSProperties, FC } from "react";
import dayjs from "dayjs";
import { normalizeDuration } from "@/shared/lib/format-video-timer";

type PostCardProps = {
  postId: number;
  count: number;
  media: MediaProps;
  author: PostPropsWithAuthor["author"];
  createdAt: string;
};

const normalizeMetaDuration = (duration: string): string => {
  let remaining = Number(duration);
  const hours = Math.floor(remaining / 3600);
  remaining %= 3600;
  const minutes = Math.floor(remaining / 60);
  const seconds = remaining % 60;

  const durationParts = [
    hours > 0 ? `${hours}H` : "",
    minutes > 0 ? `${minutes}M` : "",
    seconds > 0 || duration === "0" ? `${seconds}S` : "",
  ].filter(Boolean);

  const normalizedDuration = `PT${durationParts.join("")}`;
  return normalizedDuration;
};

export const PostCardItem: FC<PostCardProps> = ({
  count,
  postId,
  media,
  author,
  createdAt,
}) => {
  if (!media) return null;

  const isoDate = dayjs(createdAt).format("YYYY-MM-DD");
  const asp = (media.height / media.width) * 100 + "%";

  return (
    <article
      className="rounded-2xl relative bg-cover bg-center after:pb-[var(--asp)] after:block bg-white bg-opacity-5 cursor-pointer"
      style={
        {
          backgroundImage: `url(${media.previewUrl})`,
          "--asp": asp,
        } as CSSProperties
      }
      data-post-id={postId}
      itemScope
      itemType={
        media.type === "image"
          ? "https://schema.org/ImageObject"
          : "https://schema.org/VideoObject"
      }
    >
      <meta itemProp="name" content={`№${media.id}`} />
      <meta itemProp="thumbnailUrl" content={media.previewUrl} />
      <meta itemProp="contentUrl" content={media.url} />
      <meta itemProp="width" content={String(media.width)} />
      <meta itemProp="height" content={String(media.height)} />
      <meta itemProp="author" content={author.name} />
      <meta itemProp="uploadDate" content={isoDate} />
      {media.type === "video" && (
        <>
          <meta itemProp="encodingFormat" content="video/mp4" />
          <meta
            itemProp="duration"
            content={normalizeMetaDuration(media.duration)}
          />
          <Image
            src="/assets/icons/play-button.svg"
            alt="play button"
            width={48}
            height={48}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none"
          />
          <div className="absolute bottom-1.5 right-1 text-[10px] font-bold px-1.5 rounded-2xl z-10">
            {normalizeDuration(media.duration)}
          </div>
          <div className="absolute bottom-0 left-0 w-full h-7 bg-gradient-to-b from-[#1A1A1A]/0 to-[#1A1A1A]/80 pointer-events-none"></div>
        </>
      )}
      {count > 1 && (
        <div className="absolute top-3 right-3 z-20 px-1.5 py-1 rounded-2xl bg-[#466765]/80 text-white text-[10px] font-semibold min-w-7 text-center pointer-events-none">
          {count}
        </div>
      )}
    </article>
  );
};
