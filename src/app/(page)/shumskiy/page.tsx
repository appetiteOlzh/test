import { Footer } from "@/widgets/footer";
import { Header } from "@/widgets/header";
import { Hero } from "@/widgets/hero";
import { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL("https://monclips.com"),
  title: "Scroll your camera roll like a TTok",
  description: "Delete what you don't need. Gallery cleanup - easy and simple",
  openGraph: {
    type: "website",
    siteName: "Monclips",
    images: [
      {
        url: "/public/assets/img/og-bg.png", // Must be an absolute url
      },
    ],
    description: "MonClips Gallery — your vertical gallery",
  },
  twitter: {
    card: "summary_large_image",
    site: "@monclips",
    creator: "@monclips",
    images: "/public/assets/img/og-bg.png",
    description:
      "Delete what you don't need. Gallery cleanup - easy and simple",
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function Open() {
  return (
    <>
      <Header />
      <Hero
        title="Scroll your camera roll like a TTok"
        description="Delete what you don't need. <br/>Gallery cleanup - easy and simple"
      />
      <Footer />
    </>
  );
}
