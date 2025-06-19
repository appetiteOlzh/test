"use client";
import { FC } from "react";
import { ShallowLink } from "./shallow-link";

type PostCardProps = {
  postId: number;
  cover: string;
  count: number;
};

export const PostCardItem: FC<PostCardProps> = ({ cover, count, postId }) => {
  return (
    <div
      className="rounded-lg md:rounded-xl relative bg-cover bg-center after:pb-[calc(164/124*100%)] after:block bg-white bg-opacity-5"
      style={{
        backgroundImage: `url(${cover})`,
      }}
    >
      <ShallowLink postId={postId} />
      {count > 1 && (
        <div className="min-w-5 bg-white absolute top-3 right-3 px-1 py-0.5 rounded text-center after:block after:absolute after:w-full after:h-full after:-top-1 after:left-1 after:rounded after:border-2 after:border-white">
          <p className="text-xs font-medium text-background">{count}</p>
        </div>
      )}
    </div>
  );
};
