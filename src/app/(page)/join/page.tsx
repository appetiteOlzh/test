import { Footer } from "@/widgets/footer";
import { Header } from "@/widgets/header";
import { Hero } from "@/widgets/hero";
import { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL("https://monclips.com"),
  title: "Scroll your camera roll like a TTok",
  description:
    "Every swipe is a surprise. Find favorite and forgotten moments.",
  openGraph: {
    type: "website",
    siteName: "Monclips",
    images: [
      {
        url: "/public/assets/img/og-bg.png", // Must be an absolute url
      },
    ],
    description:
      "Every swipe is a surprise. Find favorite and forgotten moments.",
  },
  twitter: {
    card: "summary_large_image",
    site: "@monclips",
    creator: "@monclips",
    images: "/public/assets/img/og-bg.png",
    description:
      "Every swipe is a surprise. Find favorite and forgotten moments.",
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
        description="Every swipe is a surprise. <br/>Find favorite and forgotten moments."
      />
      <Footer />
    </>
  );
}
