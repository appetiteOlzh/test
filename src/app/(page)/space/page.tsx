import { HeaderNew } from "@/widgets/header";
import { FooterNew } from "@/widgets/footer";

import { Metadata } from "next";
import { Hero } from "./ui";
import { getTranslations } from "next-intl/server";

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations("Space");

  return {
    metadataBase: new URL("https://monclips.com"),
    title: t("meta_title"),
    description: t("meta_description"),
    openGraph: {
      type: "website",
      siteName: "Monclips",
      images: [
        {
          url: "/assets/img/og-bg.png", // Must be an absolute url
        },
      ],
      description: t("meta_description"),
    },
    twitter: {
      card: "summary_large_image",
      site: "@monclips",
      creator: "@monclips",
      images: "/assets/img/og-bg.png",
      description: t("meta_description"),
    },
    icons: {
      icon: "/favicon.ico",
    },
  };
}

export default function Page() {
  return (
    <main className="leading-tight min-h-screen flex flex-col">
      <HeaderNew />
      <div className="flex-1 content-center">
        <Hero />
      </div>
      <FooterNew />
    </main>
  );
}
