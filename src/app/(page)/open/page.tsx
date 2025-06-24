import { Footer } from "@/widgets/footer";
import { Header } from "@/widgets/header";
import { Hero } from "@/widgets/hero";

export default function Open() {
  return (
    <>
      <Header />
      <Hero title={"Upload <br/>your videos<br/>on MonClips"} />
      <Footer />
    </>
  );
}
