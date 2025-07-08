import { Header } from "@/widgets/header";
import { Footer } from "@/widgets/footer";
import {
  Application,
  Design,
  Hero,
  HowToUse,
  Traveling,
  TryIt,
  WhyItPossible,
} from "./ui";

export default function Limitless() {
  return (
    <main className="leading-tight">
      <Header isWider />
      <Hero />
      <Traveling />
      <WhyItPossible />
      <Design />
      <HowToUse />
      <Application />
      <TryIt />
      <Footer />
    </main>
  );
}
