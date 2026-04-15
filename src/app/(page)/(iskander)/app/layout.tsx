import type { Metadata } from "next";
import "@/app/(page)/iskander.css";

export const metadata: Metadata = {
  title: "MonClips — Cloud storage for photos and videos",
  description:
    "Save photos and videos from camera roll or any chat. Organize into albums. Find any moment in seconds. Free: 500 photos, 50 videos. Premium from $0.99/mo.",
  keywords: [
    "photo storage",
    "video storage",
    "cloud storage",
    "photo organizer",
    "photo albums",
    "photo app",
    "video app",
    "MonClips",
    "iCloud alternative",
    "Google Photos alternative",
    "organize photos",
    "save photos",
  ],
  authors: [{ name: "MonClips" }],
  creator: "MonClips",
  publisher: "MonClips",
  metadataBase: new URL("https://monclips.com"),
  alternates: {
    canonical: "/app",
  },
  openGraph: {
    title: "MonClips — Cloud storage for photos and videos",
    description:
      "Save photos and videos from camera roll or any chat. Organize into albums. Find any moment in seconds.",
    url: "https://monclips.com/app",
    siteName: "MonClips",
    images: [
      {
        url: "https://monclips.com/og_img_app.png",
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
    title: "MonClips — Cloud storage for photos and videos",
    description:
      "Save photos and videos from camera roll or any chat. Organize into albums. Find any moment in seconds.",
    images: ["https://monclips.com/og_img_app.png"],
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

export default function AppLayout({ children }: { children: React.ReactNode }) {
  return children;
}
