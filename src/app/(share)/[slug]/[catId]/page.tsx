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
const getCleanUsername = (slug: string): string | null => {
  const decodedSlug = decodeURIComponent(slug);
  if (!decodedSlug.startsWith("@")) return null;
  return decodedSlug.replace("@", "");
};

// ==========================================
// 1. ГЕНЕРАЦИЯ МЕТАДАННЫХ КАТЕГОРИИ
// ==========================================
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug, catId } = await params;
  const username = getCleanUsername(slug);

  // Если слаг не начинается с @, это не страница пользователя. Отдаем заглушку
  if (!username) {
    return { title: "Not Found", robots: { index: false, follow: false } };
  }

  const [t, category] = await Promise.all([
    getTranslations("category_meta"),
    getCategoryByNumberId(catId),
  ]);

  if (!category) {
    return {
      title: "Not Found 404 | MonClips",
      description: "This category no longer exists.",
      robots: { index: false, follow: false },
    };
  }

  const canonicalUrl = `https://monclips.com/@${username}/${catId}`;
  const fallbackOgImage = "https://monclips.com/assets/img/og-bg.png";

  return {
    title: t("title", { folder: category.title }),
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      type: "website",
      siteName: "Monclips",
      url: canonicalUrl,
      images: [
        {
          url: category.previewSquareUrl ?? fallbackOgImage,
        },
      ],
      title: t("title", { folder: category.title }),
    },
    twitter: {
      card: "summary_large_image",
      site: "@monclips",
      creator: "@monclips",
      images: category.previewSquareUrl ?? fallbackOgImage,
      title: t("title", { folder: category.title }),
    },
    robots: { index: category.isPublic, follow: category.isPublic },
  };
}

// ==========================================
// 2. КОМПОНЕНТ СТРАНИЦЫ ШЕРИНГА КАТЕГОРИИ
// ==========================================
export default async function Sharing({ params }: Props) {
  const locale = await getLocale();
  const { slug, catId } = await params; // Разворачиваем Promise параметров через React.use()

  const username = getCleanUsername(slug);
  if (!username) return notFound();

  const [author, category, rawPosts] = await Promise.all([
    getUser(username),
    getCategoryByNumberId(catId),
    getPostListByUsernameAndCategoryId({ username, categoryId: catId }),
  ]);

  if (isError(author) || !author) return notFound();
  if (isError(category) || !category) return notFound();
  if (isError(rawPosts)) return notFound();

  const posts = rawPosts.map((post) => serializePost({ post, locale }));

  return (
    <main className="pt-8 md:pt-20 pb-14 md:pb-28">
      <Category {...category}>
        <PostCardList initialList={posts} catId={catId} username={username} />
      </Category>
    </main>
  );
}
