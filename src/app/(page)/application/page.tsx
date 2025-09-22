import { Header } from "@/widgets/header";
import { Wrapper } from "./ui";
import { VerticalScroll } from "./ui/swiper";
import { Footer } from "@/widgets/footer";

export default function ApplicationPage() {
  return (
    <main className="min-h-full sm:flex sm:flex-col h-[100dvh] sm:h-auto">
      <Header withDownload deskOnly />
      <div className="flex-1 flex items-center sm:py-20 min-h-0">
        <Wrapper>
          <VerticalScroll />
        </Wrapper>
      </div>
      <Footer deskOnly />
    </main>
  );
}
