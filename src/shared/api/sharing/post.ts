export async function getPostList({
  categoryId,
  page = 0,
  signal,
}: {
  categoryId: string;
  page?: number;
  signal?: AbortSignal;
}): Promise<PostProps[]> {
  const res = await fetch(
    `${process.env.baseUrl}/website/category/${categoryId}/posts?page=${page}`,
    { signal }
  );
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch Post List");
  }

  return res.json();
}

export async function getPostItem({
  postId,
  signal,
}: {
  postId: string;
  signal?: AbortSignal;
}): Promise<PostPropsWithAuthor> {
  const res = await fetch(`${process.env.baseUrl}/website/post/${postId}`, {
    signal,
  });
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch Post Item");
  }

  return res.json();
}
