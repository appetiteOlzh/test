import { Header } from "@/widgets/header";
import { Footer } from "@/widgets/footer";
import {
  // Application,
  Design,
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
      {/* <HowToUse /> */}
      {/* <Application /> */}
      {/* <Review /> */}
      <TryIt />
      <Footer />
    </main>
  );
}
