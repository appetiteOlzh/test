import type { Metadata } from "next";
import "@/app/(page)/iskander.css";

export const metadata: Metadata = {
  title: "MonClips — Built for real memories, Trusted by thousands",
  description:
    "Save photos and videos from anywhere. Organize them into albums your way. Find any moment instantly. Free: 500 photos, 50 videos. Premium from $0.99/mo.",
  keywords: [
    "photo organizer",
    "video organizer",
    "photo albums",
    "cloud photo storage",
    "organize photos",
    "photo app",
    "video storage",
    "memory app",
    "MonClips",
    "iCloud alternative",
    "Google Photos alternative",
  ],
  authors: [{ name: "MonClips" }],
  creator: "MonClips",
  publisher: "MonClips",
  metadataBase: new URL("https://monclips.com"),
  alternates: {
    canonical: "/memories",
  },
  openGraph: {
    title: "MonClips — Built for real memories, Trusted by thousands",
    description:
      "Save photos and videos from anywhere. Organize them your way. Find any moment instantly.",
    url: "https://monclips.com/memories",
    siteName: "MonClips",
    images: [
      {
        url: "https://monclips.com/og-image.png",
        width: 1200,
        height: 630,
        alt: "MonClips — Your memories, organized",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "MonClips — Built for real memories",
    description:
      "Save photos and videos from anywhere. Organize them your way. Find any moment instantly.",
    images: ["https://monclips.com/og-image.png"],
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

export default function NewLayout({ children }: { children: React.ReactNode }) {
  return children;
}
