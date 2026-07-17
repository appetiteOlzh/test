import { Category, PostCardList, serializePost } from "@/widgets/sharing";
import { getUser } from "@/shared/api/sharing";
import { notFound } from "next/navigation";
import { getPostListByUsernameAndCategoryId } from "@/shared/api/sharing/post";
import { getCategoryByNumberId } from "@/shared/api/sharing/category";
import { Metadata } from "next";
import { getTranslations, getLocale } from "next-intl/server";

const isError = (err: unknown): err is Error => err instanceof Error;

type Props = {
  params: Promise<{ slug: string; catId: string }>; // В Next.js 15+ params — это Promise
};

// Вспомогательная функция для безопасного извлечения юзернейма
const getCleanUsernameItem = (slug: string): string => {
  const decodedSlug = decodeURIComponent(slug);
  return decodedSlug.startsWith("@") ? decodedSlug.slice(1) : decodedSlug;
};

// ==========================================
// 1. ГЕНЕРАЦИЯ МЕТАДАННЫХ КАТЕГОРИИ
// ==========================================
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug, catId } = await params;
  const usernameItem = getCleanUsernameItem(slug);

  // Если слаг пустой, это не страница пользователя. Отдаем заглушку
  if (!usernameItem) {
    return { title: "Not Found", robots: { index: false, follow: false } };
  }

  const [t, categoryItem] = await Promise.all([
    getTranslations("category_meta"),
    getCategoryByNumberId(catId),
  ]);

  if (!categoryItem) {
    return {
      title: "Not Found 404 | MonClips",
      description: "This category no longer exists.",
      robots: { index: false, follow: false },
    };
  }

  const canonicalUrl = `https://monclips.com/${usernameItem}/${catId}`;
  const fallbackOgImage = "https://monclips.com/assets/img/og-bg.png";

  return {
    title: t("title", { folder: categoryItem.title }),
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      type: "website",
      siteName: "Monclips",
      url: canonicalUrl,
      images: [
        {
          url: categoryItem.previewSquareUrl ?? fallbackOgImage,
        },
      ],
      title: t("title", { folder: categoryItem.title }),
    },
    twitter: {
      card: "summary_large_image",
      site: "@monclips",
      creator: "@monclips",
      images: categoryItem.previewSquareUrl ?? fallbackOgImage,
      title: t("title", { folder: categoryItem.title }),
    },
    robots: { index: categoryItem.isPublic, follow: categoryItem.isPublic },
  };
}

// ==========================================
// 2. КОМПОНЕНТ СТРАНИЦЫ ШЕРИНГА КАТЕГОРИИ
// ==========================================
export default async function Sharing({ params }: Props) {
  const locale = await getLocale();
  const { slug, catId } = await params; // Разворачиваем Promise параметров через React.use()

  const usernameItem = getCleanUsernameItem(slug);
  if (!usernameItem) return notFound();

  const [authorItem, categoryItem, rawPostList] = await Promise.all([
    getUser(usernameItem),
    getCategoryByNumberId(catId),
    getPostListByUsernameAndCategoryId({
      username: usernameItem,
      categoryId: catId,
    }),
  ]);

  if (isError(authorItem) || !authorItem) return notFound();
  if (isError(categoryItem) || !categoryItem) return notFound();
  if (isError(rawPostList)) return notFound();

  const postList = rawPostList.map((postItem) =>
    serializePost({ post: postItem, locale }),
  );

  return (
    <main>
      <Category {...categoryItem}>
        <PostCardList
          initialList={postList}
          catId={catId}
          username={usernameItem}
          title={categoryItem.title}
        />
      </Category>
    </main>
  );
}
