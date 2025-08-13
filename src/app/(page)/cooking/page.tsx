import { Header } from "@/widgets/header";
import { Footer } from "@/widgets/footer";
import { Gift, Hero, Organizer, Question } from "./ui";

export default function Limitless() {
  return (
    <main className="leading-tight">
      <Header isWider />
      <Hero />
      <Question />
      <Organizer />
      <Gift />
      <Footer />
    </main>
  );
}
