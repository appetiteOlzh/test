import { Header } from "@/widgets/header";
import { Wrapper } from "./ui";
import { VerticalScroll } from "./ui/swiper";
import { Footer } from "@/widgets/footer";
import { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL("https://monclips.com"),
  title: "MonClips — your gallery, but vertical",
  description:
    "Every time you scroll, MonClips shows you a random photo or video from your gallery. It’s your life — surprising, emotional, unforgettable.",
  openGraph: {
    type: "website",
    siteName: "Monclips",
    images: [
      {
        url: "/public/assets/img/og-bg.png", // Must be an absolute url
      },
    ],
    description:
      "Every time you scroll, MonClips shows you a random photo or video from your gallery. It’s your life — surprising, emotional, unforgettable.",
  },
  twitter: {
    card: "summary_large_image",
    site: "@monclips",
    creator: "@olzh_zh",
    images: "/public/assets/img/og-bg.png",
    description:
      "Every time you scroll, MonClips shows you a random photo or video from your gallery. It’s your life — surprising, emotional, unforgettable.",
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
