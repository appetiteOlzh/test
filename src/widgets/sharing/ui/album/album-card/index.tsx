import Image from "next/image";
import Link from "next/link";
import { FC } from "react";

export const AlbumCard: FC<AlbumProps & { username: string }> = ({
  previewUrl,
  title,
  postCount,
  id,
  username,
}) => {
  return (
    <Link
      href={`/${username}/${id}`}
      className="block aspect-[3/4] rounded-2xl relative overflow-hidden"
      prefetch={false}
    >
      <div className="absolute bg-gradient-to-t from-[#1A1A1A] to-[#1A1A1A]/0 inset-0 pointer-events-none z-10"></div>
      {previewUrl ? (
        <Image
          src={previewUrl}
          alt=""
          fill
          className="object-cover object-center"
          unoptimized
        />
      ) : (
        <div className="absolute inset-0 bg-gray-500"></div>
      )}

      <h4 className="absolute bottom-3 left-3 right-3 z-20 text-sm text-white line-clamp-2 overflow-hidden text-ellipsis font-medium">
        {title}
      </h4>
      <span className="absolute top-3 right-3 z-20 px-1.5 py-1 rounded-full bg-[#466765]/20 text-white text-[10px] font-semibold">
        {postCount}
      </span>
    </Link>
  );
};
