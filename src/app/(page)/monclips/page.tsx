import { Header } from "@/widgets/header";
import { Footer } from "@/widgets/footer";
import { About, Hero, History, Idea, Mission } from "./ui";

export default function Limitless() {
  return (
    <main className="leading-tight">
      <Header isWider />
      <Hero />
      <About />
      <Mission />
      <History />
      <Idea />
      <Footer />
    </main>
  );
}
