import { Header } from "@/widgets/header";
import { Wrapper } from "./ui";
import { VerticalScroll } from "./ui/swiper";
import { Footer } from "@/widgets/footer";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "MonClips: Creator Portfolio",
  description:
    "Create a professional portfolio in minutes - right from your phone",
  openGraph: {
    type: "website",
    siteName: "Monclips",
    images: [
      {
        url: "http://monclips.com/assets/img/og-bg.png", // Must be an absolute url
      },
    ],
    description:
      "Create a professional portfolio in minutes - right from your phone",
  },
  twitter: {
    card: "summary_large_image",
    site: "@monclips",
    creator: "@monclips",
    images: "http://monclips.com/assets/img/og-bg.png",
    description:
      "Create a professional portfolio in minutes - right from your phone",
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function ApplicationPage() {
  return (
    <div className="sm:min-h-screen flex flex-col h-[100dvh] sm:h-auto">
      <Header withDownload deskOnly />
      <div className="flex-1 flex items-center sm:pt-12 sm:pb-8 min-h-0">
        <Wrapper>
          <VerticalScroll />
        </Wrapper>
      </div>
      <Footer deskOnly />
    </div>
  );
}
