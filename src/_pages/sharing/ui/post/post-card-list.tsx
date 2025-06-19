"use client";
import { FC, useRef, useState } from "react";
import { SwiperRef } from "swiper/react";
import { debounce } from "@/shared/lib/debounce";
import { getPostList } from "@/shared/api/sharing";
import InfiniteScroller from "@/shared/ui/infinite-scroller";
import { PostModal } from "./post-modal";
import { PostCardItem } from "./post-card-item";
import { useLocale } from "next-intl";
import { serializePost } from "../../lib/serialize-post";

const POST_PER_PAGE = 18;

export const PostCardList: FC<{ initialList: PostProps[]; catId: string }> = ({
  initialList,
  catId,
}) => {
  const locale = useLocale();
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(initialList.length >= POST_PER_PAGE);
  const [postList, setPostList] = useState(initialList);

  const postModalSliderRef = useRef<SwiperRef | null>(null);
  const loadMorePosts = async () => {
    const newPostList = await getPostList({
      categoryId: catId,
      page,
    }).then((postList) =>
      postList.map((post) => serializePost({ post, locale }))
    );
    if (newPostList.length < POST_PER_PAGE) {
      setHasMore(false);
    }
    setPostList((prevPostList) => [...prevPostList, ...newPostList]);
    setPage((prevPage) => prevPage + 1);
  };

  if (initialList.length < 1) return null;

  const onEndReached = () => {
    if (hasMore) loadMorePosts();
  };

  return (
    <>
      <InfiniteScroller
        className="grid md:grid-cols-6 grid-cols-3 md:gap-5 gap-px -mx-4 md:mx-0"
        hasMore={hasMore}
        loadMore={loadMorePosts}
      >
        {postList.map((post) => (
          <PostCardItem
            key={post.id}
            cover={post.medias[0].previewUrl}
            count={post.medias.length}
            postId={post.id}
          />
        ))}
      </InfiniteScroller>
      <PostModal
        postList={postList}
        onEndReached={debounce(onEndReached, 300)}
        swiperRef={postModalSliderRef}
      />
    </>
  );
};
