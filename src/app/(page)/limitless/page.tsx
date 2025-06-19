"use client";
import {
  Application,
  Design,
  Header,
  Hero,
  HowToUse,
  Traveling,
  TryIt,
  WhyItPossible,
} from "./ui";
import { Footer } from "@/widgets/footer";

export default function Limitless() {
  return (
    <>
      <Header />
      <Hero />
      <Traveling />
      <WhyItPossible />
      <Design />
      <HowToUse />
      <Application />
      <TryIt />
      <Footer />
    </>
  );
}
