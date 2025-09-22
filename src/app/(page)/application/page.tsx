import { Header } from "@/widgets/header";
import { Wrapper } from "./ui";
import { VerticalScroll } from "./ui/swiper";
import { Footer } from "@/widgets/footer";

export default function ApplicationPage() {
  return (
    <main className="min-h-screen flex flex-col">
      <Header withDownload />
      <div className="flex-1 flex items-center sm:py-20">
        <Wrapper>
          <VerticalScroll />
        </Wrapper>
      </div>
      <Footer />
    </main>
  );
}
