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

  // КЕЙС А: Это профиль пользователя (начинается с @)
  if (decodedSlug.startsWith("@")) {
    const username = decodedSlug.replace("@", "");
    const user = await getUser(username);

    if (!user) {
      return {
        title: "Not Found 404 | MonClips",
        robots: { index: false, follow: false },
      };
    }

    return {
      title: user.name,
      description: user.about,
      alternates: { canonical: `https://monclips.com/@${username}` },
      openGraph: {
        type: "profile",
        username: user.username,
        siteName: "Monclips",
        url: `https://monclips.com/@${username}`,
        images: [
          { url: user.avatar || "https://monclips.com/assets/img/og-bg.png" },
        ],
        title: user.name,
      },
      twitter: {
        card: "summary_large_image",
        site: "@monclips",
        creator: "@monclips",
        images: user.avatar || "https://monclips.com/assets/img/og-bg.png",
        title: user.name,
      },
      robots: { index: false, follow: false },
      other: {
        // Соцсети (из предыдущего шага)
        ...(user.instagramLink && { "profile:instagram": user.instagramLink }),
        ...(user.telegramAccount && {
          "profile:telegram": user.telegramAccount,
        }),
        ...(user.youtubeLink && { "profile:youtube": user.youtubeLink }),
        ...(user.tiktokLink && { "profile:tiktok": user.tiktokLink }),
        ...(user.whatsappPhone && { "profile:whatsapp": user.whatsappPhone }),

        // Телефон и Email (проверяем на существование, чтобы не спамить пустыми тегами)
        ...(user.phone && { "og:phone_number": user.phone }),
        ...(user.email && { "og:email": user.email }),

        // Альтернативные стандартные теги (для некоторых парсеров)
        ...(user.phone && { "contact:phone": user.phone }),
        ...(user.email && { "contact:email": user.email }),
      },
    };
  }

  // КЕЙС Б: Это инвитейшн (статический конфиг, без @)
  const configKey = `/${decodedSlug}` as keyof typeof REDIRECT_CONFIG;
  const config = REDIRECT_CONFIG[configKey];

  if (!config) {
    return { title: "Not Found" };
  }

  const { title, description } = config.meta;

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

  // КЕЙС А: Рендерим профиль с альбомами (если есть @)
  if (decodedSlug.startsWith("@")) {
    const username = decodedSlug.replace("@", "");
    const author = await getUser(username);

    if (isError(author) || !author) {
      return notFound();
    }

    const albumList = await getAlbumList({ username });

    if (isError(albumList)) {
      return notFound();
    }

    return (
      <main className="pt-8 md:pt-20 pb-14 md:pb-28">
        <Album author={author}>
          <AlbumCardList
            initialList={albumList}
            username={`@${author.username}`}
          />
        </Album>
      </main>
    );
  }

  // КЕЙС Б: Рендерим инвитейшн (если нет @)
  const configKey = `/${decodedSlug}` as keyof typeof REDIRECT_CONFIG;
  const config = REDIRECT_CONFIG[configKey];

  if (!config) {
    return notFound();
  }

  return (
    <>
      <Header />
      <Hero
        title={config.content.title}
        description={config.content.description}
      />
      <Footer />
    </>
  );
}
