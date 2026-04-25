import { Footer } from "@/widgets/footer";
import { HeaderNew } from "@/widgets/header";
import {
  Hero,
  Problems,
  Advantages,
  HowItWorks,
  Benefits,
  Comfort,
  Blockquote,
  Download,
} from "./ui";
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
        url: "/og_img_organize.png",
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
    title: "MonClips — Новый инструмент для ведущих и организаторов",
    description:
      "Альбом после мероприятия по одной ссылке - новый формат для тех, кто хочет больше зарабатывать на своих мероприятиях",
    images: ["/og_img_organize.png"],
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

export default function Page() {
  return (
    <main
      className="leading-tight bg-[var(--background-color)]"
      style={
        {
          "--background-color": "#0C0C0C",
        } as React.CSSProperties
      }
    >
      <HeaderNew
        noSocial
        className="pt-8 pb-6 md:pt-6"
        eventName="organize_header_popup"
        eventNameGoogleplay="organize_header_googleplay"
        eventNameAppstore="organize_header_appstore"
      />
      <Hero />
      <Problems />
      <Advantages />
      <HowItWorks />
      <Benefits />
      <Comfort />
      <Blockquote />
      <Download />
      <Footer />
    </main>
  );
}
