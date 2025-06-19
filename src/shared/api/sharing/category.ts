import { notFound } from "next/navigation";

export async function getCategory(categoryId: string): Promise<CategoryProps> {
  const res = await fetch(
    `${process.env.baseUrl}/website/category/${categoryId}`
  );
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    // throw new Error(`Failed to fetch Category ${categoryId}`);

    return notFound();
  }

  return res.json();
}
