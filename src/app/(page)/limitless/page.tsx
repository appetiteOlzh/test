import { Header } from "@/widgets/header";
import { Footer } from "@/widgets/footer";
import {
  Albums,
  Benefits,
  DescriptionSection,
  Design,
  Faq,
  Hero,
  Traveling,
  TryIt,
} from "./ui";

export default function Limitless() {
  return (
    <main className="leading-tight">
      <Header isWider withLocale />
      <Hero />
      <Design />
      <Traveling />
      <Albums />
      <DescriptionSection />
      <Benefits />
      <Faq />
      <TryIt />
      <Footer />
    </main>
  );
}
