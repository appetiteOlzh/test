import { Header } from "@/widgets/header";
import { Footer } from "@/widgets/footer";
import { Benefits, Gift, Hero, Organizer, Question, Quote, TryIt } from "./ui";

export default function Limitless() {
  return (
    <main className="leading-tight">
      <Header isWider />
      <Hero />
      <Question />
      <Organizer />
      <Gift />
      <Quote />
      <Benefits />
      <TryIt />
      <Footer />
    </main>
  );
}
