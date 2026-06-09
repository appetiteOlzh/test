export async function getAlbumList({
  username,
  page = 0,
  signal,
}: {
  username: string;
  page?: number;
  signal?: AbortSignal;
}): Promise<AlbumProps[]> {
  const res = await fetch(
    `${process.env.baseUrl}/website/user/${username}/categories?page=${page}`,
    { signal },
  );
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch Album List");
  }

  return res.json();
}
