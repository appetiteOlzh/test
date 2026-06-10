"use client";
import { FC, useState } from "react";
import { getAlbumList } from "@/shared/api/sharing";
import InfiniteScroller from "../../infinite-scroller";
import { AlbumCard } from "../album-card";
import { useTranslations } from "next-intl";

const POST_PER_PAGE = 20;

export const AlbumCardList: FC<{
  initialList: AlbumProps[];
  username: string;
}> = ({ initialList, username }) => {
  const t = useTranslations("Sharing");
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(initialList.length >= POST_PER_PAGE);
  const [albumList, setAlbumList] = useState(initialList);
  const [isLoading, setIsLoading] = useState(false);

  const loadMorePosts = async () => {
    if (isLoading || !hasMore) return;

    setIsLoading(true);
    try {
      const newAlbumList = await getAlbumList({
        username,
        page,
      });
      if (newAlbumList.length < POST_PER_PAGE) {
        setHasMore(false);
      }
      setAlbumList((albumList) => [...albumList, ...newAlbumList]);
      setPage((prevPage) => prevPage + 1);
    } catch (error) {
      console.error("Failed to load posts:", error);
    } finally {
      setIsLoading(false);
    }
  };

  if (initialList.length !== 0)
    return (
      <div className="pt-[10vh]">
        <p className="text-sm text-center text-[#466765] font-medium">
          {t("no_albums")}
        </p>
      </div>
    );
  return (
    <>
      <InfiniteScroller hasMore={hasMore} loadMore={loadMorePosts}>
        <div className="px-2.5 basis-full grid grid-cols-[repeat(auto-fill,minmax(160px,1fr))] sm:grid-cols-[repeat(auto-fill,minmax(220px,1fr))] xl:gap-10 lg:gap-6 md:gap-4 gap-2">
          {albumList.map((album) => (
            <div key={album.id}>
              <AlbumCard {...album} username={username} />
            </div>
          ))}
        </div>
      </InfiniteScroller>
    </>
  );
};
