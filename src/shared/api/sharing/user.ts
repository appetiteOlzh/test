import { notFound } from "next/navigation";

export async function getUser(username: string): Promise<UserProps> {
  const res = await fetch(`${process.env.baseUrl}/website/user/${username}`);
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    // throw new Error(`Failed to fetch Category ${categoryId}`);
    return notFound();
  }

  return res.json();
}
