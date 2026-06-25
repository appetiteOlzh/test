"use client";
import { useLocale, useTranslations } from "next-intl";
import { FC, useRef, useState } from "react";
import { SwiperRef } from "swiper/react";
import Masonry from "react-masonry-css";

import { debounce } from "@/shared/lib/debounce";
import { getPostList } from "@/shared/api/sharing";
import InfiniteScroller from "@/shared/ui/infinite-scroller";
import { PostModal } from "./post-modal";
import { PostCardItem } from "./post-card-item";
import { serializePost } from "../../lib/serialize-post";
import { getPostListByUsernameAndCategoryId } from "@/shared/api/sharing/post";

const POST_PER_PAGE = 18;

export const PostCardList: FC<{
  initialList: PostPropsWithAuthor[];
  catId: string;
  username?: string;
}> = ({ initialList, catId, username }) => {
  const locale = useLocale();
  const t = useTranslations("Sharing");
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(initialList.length >= POST_PER_PAGE);
  const [postList, setPostList] = useState(initialList);
  const [modalIndex, setModalIndex] = useState(-1);
  const [isLoading, setIsLoading] = useState(false);

  const postModalSliderRef = useRef<SwiperRef | null>(null);

  const loadMorePosts = async () => {
    if (isLoading || !hasMore) return;

    setIsLoading(true);
    try {
      let newPostList;

      if (username) {
        newPostList = await getPostListByUsernameAndCategoryId({
          username,
          categoryId: catId,
          page,
        }).then((postList) =>
          postList.map((post) => serializePost({ post, locale })),
        );
      } else {
        newPostList = await getPostList({
          categoryId: catId,
          page,
        }).then((postList) =>
          postList.map((post) => serializePost({ post, locale })),
        );
      }

      if (newPostList.length < POST_PER_PAGE) {
        setHasMore(false);
      }
      setPostList((prevPostList) => [...prevPostList, ...newPostList]);
      setPage((prevPage) => prevPage + 1);
    } catch (error) {
      console.error("Failed to load posts:", error);
    } finally {
      setIsLoading(false);
    }
  };

  if (initialList.length < 1)
    return (
      <div className="pt-[10vh]">
        <p className="text-sm text-center text-[#466765] font-medium">
          {t("empty_album")}
        </p>
      </div>
    );

  const onEndReached = () => {
    loadMorePosts();
  };

  return (
    <>
      <InfiniteScroller
        hasMore={hasMore}
        loadMore={loadMorePosts}
        onClick={(e) => {
          const postId = (e.target as HTMLDivElement).dataset.postId;
          const idx = postList.findIndex((post) => post.id === Number(postId));
          setModalIndex(idx);
        }}
      >
        <Masonry
          breakpointCols={{
            default: 5,
            1024: 4,
            768: 3,
            576: 2,
          }}
          className="my-masonry-grid"
          columnClassName="my-masonry-grid_column"
        >
          {postList.map((post) => (
            <div key={post.id}>
              <PostCardItem
                postId={post.id}
                media={post.medias[0]}
                count={post.medias.length}
                author={post.author}
                createdAt={post.createdAt}
              />
            </div>
          ))}
        </Masonry>
      </InfiniteScroller>
      <PostModal
        postList={postList}
        onEndReached={debounce(onEndReached, 300)}
        swiperRef={postModalSliderRef}
        modalIndex={modalIndex}
        onClose={() => setModalIndex(-1)}
      />
    </>
  );
};
