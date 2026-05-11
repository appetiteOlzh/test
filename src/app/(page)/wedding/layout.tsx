import { Metadata } from "next";

export const metadata: Metadata = {
  title: "MonClips = one real-time album that brings them all together",
  description:
    "Wedding = one day, so many guests, countless moments. One QR code. One shared memory.",
  authors: [{ name: "MonClips" }],
  creator: "MonClips",
  publisher: "MonClips",
  metadataBase: new URL("https://monclips.com"),
  alternates: {
    canonical: "/wedding",
  },
  openGraph: {
    title: "MonClips = one real-time album that brings them all together",
    description:
      "Wedding = one day, so many guests, countless moments. One QR code. One shared memory.",
    url: "https://monclips.com/wedding",
    siteName: "MonClips",
    images: [
      {
        url: "https://monclips.com/og_img_wedding.png",
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
    title: "MonClips = one real-time album that brings them all together",
    description:
      "Wedding = one day, so many guests, countless moments. One QR code. One shared memory.",
    images: ["https://monclips.com/og_img_wedding.png"],
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
