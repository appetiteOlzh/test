import { Header } from "@/widgets/header";
import { Wrapper } from "./ui";
import { VerticalScroll } from "./ui/swiper";
import { Footer } from "@/widgets/footer";

export default function ApplicationPage() {
  return (
    <div className="sm:min-h-screen flex flex-col h-[100dvh] sm:h-auto">
      <Header withDownload deskOnly />
      <div className="flex-1 flex items-center sm:pt-12 sm:pb-8 min-h-0">
        <Wrapper>
          <VerticalScroll />
        </Wrapper>
      </div>
      <Footer deskOnly />
    </div>
  );
}
