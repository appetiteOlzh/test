import { Metadata } from "next";

export const metadata: Metadata = {
  title: "MonClips — Новый инструмент для ведущих и организаторов",
  description:
    "Альбом после мероприятия по одной ссылке - новый формат для тех, кто хочет больше зарабатывать на своих мероприятиях",
  authors: [{ name: "MonClips" }],
  creator: "MonClips",
  publisher: "MonClips",
  metadataBase: new URL("https://monclips.com"),
  alternates: {
    canonical: "/organize",
  },
  openGraph: {
    title: "MonClips — Новый инструмент для ведущих и организаторов",
    description:
      "Альбом после мероприятия по одной ссылке - новый формат для тех, кто хочет больше зарабатывать на своих мероприятиях",
    url: "https://monclips.com/organize",
    siteName: "MonClips",
    images: [
      {
        url: "https://monclips.com/og_img_organize.png",
        width: 1200,
        height: 630,
        alt: "MonClips — Новый инструмент для ведущих и организаторов",
      },
    ],
    locale: "ru_RU",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "MonClips — Новый инструмент для ведущих и организаторов",
    description:
      "Альбом после мероприятия по одной ссылке - новый формат для тех, кто хочет больше зарабатывать на своих мероприятиях",
    images: ["https://monclips.com/og_img_organize.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  category: "technology",
};

export default function OrganizeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
