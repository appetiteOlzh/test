import { Metadata } from "next";

export const metadata: Metadata = {
  title: "MonClips — Начните зарабатывать больше на 500$ на мероприятиях",
  description: "Продавайте клиенту услугу живого альбома",
  authors: [{ name: "MonClips" }],
  creator: "MonClips",
  publisher: "MonClips",
  metadataBase: new URL("https://monclips.com"),
  alternates: {
    canonical: "/album",
  },
  openGraph: {
    title: "MonClips — Начните зарабатывать больше на 500$ на мероприятиях",
    description: "Продавайте клиенту услугу живого альбома",
    url: "https://monclips.com/album",
    siteName: "MonClips",
    images: [
      {
        url: "https://monclips.com/og_img_album.png",
        width: 1200,
        height: 630,
        alt: "MonClips — Начните зарабатывать больше на 500$ на мероприятиях",
      },
    ],
    locale: "ru_RU",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "MonClips — Начните зарабатывать больше на 500$ на мероприятиях",
    description: "Продавайте клиенту услугу живого альбома",
    images: ["https://monclips.com/og_img_album.png"],
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
