import { Metadata } from "next";
import { notFound } from "next/navigation";

// Импорты для Invitation (бывший статический роут)
import { REDIRECT_CONFIG } from "@/shared/data";
import { Header } from "@/widgets/header";
import { Hero } from "@/widgets/hero";
import { Footer } from "@/widgets/footer";

// Импорты для Album (профиль пользователя)
import { Album } from "@/widgets/sharing/ui/album";
import { AlbumCardList } from "@/widgets/sharing/ui/album/album-card-list";
import { getAlbumList, getUser } from "@/shared/api/sharing";

type Props = {
  params: Promise<{ slug: string }>; // В Next.js 15+ params — это Promise
};

const isError = (err: unknown): err is Error => err instanceof Error;

// ==========================================
// 1. ОБЪЕДИНЕННАЯ ГЕНЕРАЦИЯ МЕТАДАННЫХ
// ==========================================
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const decodedSlug = decodeURIComponent(slug);

  // КЕЙС Б: Это инвитейшн (статический конфиг, без @)
  const configKey = `/${decodedSlug}` as keyof typeof REDIRECT_CONFIG;
  const configItem = REDIRECT_CONFIG[configKey];

  if (configItem) {
    const { title, description } = configItem.meta;

    return {
      metadataBase: new URL("https://monclips.com"),
      title,
      description,
      openGraph: {
        type: "website",
        siteName: "Monclips",
        images: [{ url: "https://monclips.com/assets/img/og-bg.png" }],
        description,
      },
      twitter: {
        card: "summary_large_image",
        site: "@monclips",
        creator: "@monclips",
        images: "https://monclips.com/assets/img/og-bg.png",
        description,
      },
      icons: { icon: "/favicon.ico" },
    };
  }

  // КЕЙС А: Это профиль пользователя (без @ в начале)
  const usernameItem = decodedSlug.startsWith("@")
    ? decodedSlug.slice(1)
    : decodedSlug;
  const userItem = await getUser(usernameItem);

  if (!userItem) {
    return {
      title: "Not Found 404 | MonClips",
      robots: { index: false, follow: false },
    };
  }

  return {
    title: userItem.name,
    description: userItem.about,
    alternates: { canonical: `https://monclips.com/${usernameItem}` },
    openGraph: {
      type: "profile",
      username: userItem.username,
      siteName: "Monclips",
      url: `https://monclips.com/${usernameItem}`,
      images: [
        { url: userItem.avatar || "https://monclips.com/assets/img/og-bg.png" },
      ],
      title: userItem.name,
    },
    twitter: {
      card: "summary_large_image",
      site: "@monclips",
      creator: "@monclips",
      images: userItem.avatar || "https://monclips.com/assets/img/og-bg.png",
      title: userItem.name,
    },
    robots: { index: false, follow: false },
    other: {
      // Соцсети (из предыдущего шага)
      ...(userItem.instagramLink && {
        "profile:instagram": userItem.instagramLink,
      }),
      ...(userItem.telegramAccount && {
        "profile:telegram": userItem.telegramAccount,
      }),
      ...(userItem.youtubeLink && { "profile:youtube": userItem.youtubeLink }),
      ...(userItem.tiktokLink && { "profile:tiktok": userItem.tiktokLink }),
      ...(userItem.whatsappPhone && {
        "profile:whatsapp": userItem.whatsappPhone,
      }),

      // Телефон и Email (проверяем на существование, чтобы не спамить пустыми тегами)
      ...(userItem.phone && { "og:phone_number": userItem.phone }),
      ...(userItem.email && { "og:email": userItem.email }),

      // Альтернативные стандартные теги (для некоторых парсеров)
      ...(userItem.phone && { "contact:phone": userItem.phone }),
      ...(userItem.email && { "contact:email": userItem.email }),
    },
  };
}

// ==========================================
// 2. СТАТИЧЕСКИЕ ПАРАМЕТРЫ ДЛЯ INVITATION
// ==========================================
export function generateStaticParams() {
  return Object.keys(REDIRECT_CONFIG).map((key) => ({
    slug: key.replace(/^\//, ""), // Генерируем статические пути без слэша
  }));
}

// ==========================================
// 3. ОБЪЕДИНЕННЫЙ КОМПОНЕНТ СТРАНИЦЫ
// ==========================================
export default async function DynamicSlugPage({ params }: Props) {
  const { slug } = await params; // Разворачиваем Promise через React.use()
  const decodedSlug = decodeURIComponent(slug);

  // КЕЙС Б: Рендерим инвитейшн (если есть в конфиге)
  const configKey = `/${decodedSlug}` as keyof typeof REDIRECT_CONFIG;
  const configItem = REDIRECT_CONFIG[configKey];

  if (configItem) {
    return (
      <>
        <Header />
        <Hero
          title={configItem.content.title}
          description={configItem.content.description}
        />
        <Footer />
      </>
    );
  }

  // КЕЙС А: Рендерим профиль с альбомами (если нет инвитейшна)
  const usernameItem = decodedSlug.startsWith("@")
    ? decodedSlug.slice(1)
    : decodedSlug;
  const authorItem = await getUser(usernameItem);

  if (isError(authorItem) || !authorItem) {
    return notFound();
  }

  const albumList = await getAlbumList({ username: usernameItem });

  if (isError(albumList)) {
    return notFound();
  }

  return (
    <main className="pt-8 md:pt-20 pb-14 md:pb-28">
      <Album author={authorItem}>
        <AlbumCardList initialList={albumList} username={authorItem.username} />
      </Album>
    </main>
  );
}
