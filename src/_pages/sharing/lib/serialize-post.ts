import { formatDate } from "@/shared/lib/format-date";

function isPostWithAuthor(
  post: PostProps | PostPropsWithAuthor
): post is PostPropsWithAuthor {
  return (
    "author" in post && typeof post.author === "object" && post.author !== null
  );
}

function serializePost({
  post,
  locale,
}: {
  post: PostPropsWithAuthor;
  locale: string;
}): PostPropsWithAuthor;
function serializePost({
  post,
  locale,
}: {
  post: PostProps;
  locale: string;
}): PostProps;
function serializePost({
  post,
  locale,
}: {
  post: PostProps | PostPropsWithAuthor;
  locale: string;
}): PostProps | PostPropsWithAuthor {
  if (isPostWithAuthor(post)) {
    return {
      ...post,
      createdAt: formatDate({ date: post.createdAt, locale }),
    };
  } else {
    return {
      ...post,
      createdAt: formatDate({ date: post.createdAt, locale }),
    };
  }
}

export { serializePost };
