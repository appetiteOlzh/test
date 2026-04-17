import type { Metadata } from "next";
import "@/app/(page)/iskander.css";

export const metadata: Metadata = {
  title: "MonClips — Save photos, organize albums, find any moment",
  description:
    "Cloud storage built for families and memory keepers. Save photos and videos from your camera roll or any chat, organize into albums, find any moment in seconds. Free: 500 photos, 50 videos. Premium from $0.99/mo.",
  keywords: [
    "photo storage",
    "video storage",
    "cloud storage",
    "photo organizer",
    "photo albums",
    "family photos",
    "memory keeper",
    "MonClips",
    "iCloud alternative",
    "Google Photos alternative",
    "organize photos",
    "save photos from chat",
    "photo app",
    "memories app",
  ],
  authors: [{ name: "MonClips" }],
  creator: "MonClips",
  publisher: "MonClips",
  metadataBase: new URL("https://monclips.com"),
  alternates: {
    canonical: "/easyapp",
  },
  openGraph: {
    title: "MonClips — Save photos, organize albums, find any moment",
    description:
      "Cloud storage built for families and memory keepers. Save photos and videos from camera roll or any chat. Organize into albums. Find any moment in seconds.",
    url: "https://monclips.com/easyapp",
    siteName: "MonClips",
    images: [
      {
        url: "/og_img_easyapp.png",
        width: 1200,
        height: 630,
        alt: "MonClips — Cloud storage for photos and videos",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "MonClips — Save photos, organize albums, find any moment",
    description:
      "Cloud storage built for families and memory keepers. Save, organize, find any moment in seconds.",
    images: ["/og_img_easyapp.png"],
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

export default function EasyAppLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
