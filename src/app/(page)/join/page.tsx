import { Footer } from "@/widgets/footer";
import { Header } from "@/widgets/header";
import { Hero } from "@/widgets/hero";

export default function Open() {
  return (
    <>
      <Header />
      <Hero
        title="Your Video <br />Gallery"
        description="Your Cloud Video Gallery - Save your videos in the app, organize them your way, and share folders with friends"
      />
      <Footer />
    </>
  );
}
