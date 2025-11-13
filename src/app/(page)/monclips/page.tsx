import { Header } from "@/widgets/header";
import { Footer } from "@/widgets/footer";
import {
  About,
  Goal,
  Hero,
  History,
  HowItWorks,
  Idea,
  Mission,
  Review,
  Summary,
  WhyItWorks,
} from "./ui";
import { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL("https://monclips.com"),
  title: "MonClips — твоя жизнь, как она есть",
  description:
    "Ты пролистываешь ленты чужих людей каждый день. А свою — почти никогда.",
  openGraph: {
    type: "website",
    siteName: "Monclips",
    images: [
      {
        url: "/public/assets/img/og-bg.png", // Must be an absolute url
      },
    ],
    description:
      "Ты пролистываешь ленты чужих людей каждый день. А свою — почти никогда.",
  },
  twitter: {
    card: "summary_large_image",
    site: "@monclips",
    creator: "@monclips",
    images: "/public/assets/img/og-bg.png",
    description:
      "Ты пролистываешь ленты чужих людей каждый день. А свою — почти никогда.",
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function Limitless() {
  return (
    <main className="leading-tight">
      <Header isWider />
      <Hero />
      <About />
      <Mission />
      <History />
      <Idea />
      <HowItWorks />
      <Goal />
      <Review />
      <WhyItWorks />
      <Summary />
      <Footer />
    </main>
  );
}
