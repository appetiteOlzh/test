import { Header } from "@/widgets/header";
import { Footer } from "@/widgets/footer";
import {
  Albums,
  Benefits,
  DescriptionSection,
  // Application,
  Design,
  Faq,
  Hero,
  // HowToUse,
  // Review,
  Traveling,
  TryIt,
  // WhyItPossible,
} from "./ui";

export default function Limitless() {
  return (
    <main className="leading-tight">
      <Header isWider withLocale />
      <Hero />
      <Traveling />
      {/* <WhyItPossible /> */}
      <Design />
      <Albums />
      <DescriptionSection />
      {/* <HowToUse /> */}
      {/* <Application /> */}
      {/* <Review /> */}
      <Benefits />
      <Faq />
      <TryIt />
      <Footer />
    </main>
  );
}
