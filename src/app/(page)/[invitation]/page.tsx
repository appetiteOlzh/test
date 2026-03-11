import { REDIRECT_CONFIG } from "@/shared/data";
import { Metadata } from "next";

import { Footer } from "@/widgets/footer";
import { Header } from "@/widgets/header";
import { Hero } from "@/widgets/hero";

type Props = {
  params: { invitation: string };
};

export const dynamicParams = false;

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const configKey = `/${params.invitation}` as keyof typeof REDIRECT_CONFIG;
  const config = REDIRECT_CONFIG[configKey];

  if (!config) {
    return {
      title: "Not Found",
    };
  }

  const { title, description } = config.meta;

  return {
    metadataBase: new URL("https://monclips.com"),
    title,
    description,
    openGraph: {
      type: "website",
      siteName: "Monclips",
      images: [
        {
          url: "/public/assets/img/og-bg.png",
        },
      ],
      description,
    },
    twitter: {
      card: "summary_large_image",
      site: "@monclips",
      creator: "@monclips",
      images: "/public/assets/img/og-bg.png",
      description,
    },
    icons: {
      icon: "/favicon.ico",
    },
  };
}

export function generateStaticParams() {
  return Object.keys(REDIRECT_CONFIG).map((key) => ({
    invitation: key.replace(/^\//, ""),
  }));
}

export default function InvitationPage({ params }: Props) {
  const configKey = `/${params.invitation}` as keyof typeof REDIRECT_CONFIG;
  const config = REDIRECT_CONFIG[configKey];

  return (
    <>
      <Header />
      <Hero
        title={config.content.title}
        description={config.content.description}
      />
      <Footer />
    </>
  );
}
