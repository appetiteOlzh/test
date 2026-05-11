import { HeaderNew } from "@/widgets/header";
import { Footer } from "@/widgets/footer";
import {
  Hero,
  Moment,
  Mess,
  Album,
  QrSection,
  StepsSection,
  CarouselSection,
  FinalSection,
} from "./ui";

export default function WeddingPage() {
  return (
    <main
      className="leading-tight bg-[var(--background-color)]"
      style={
        {
          "--background-color": "#0C0C0C",
        } as React.CSSProperties
      }
    >
      <HeaderNew
        noSocial
        className="py-6 md:pt-6 absolute top-0 left-0 right-0 z-50"
        eventName="wedding_header_popup"
        eventNameGoogleplay="wedding_header_googleplay"
        eventNameAppstore="wedding_header_appstore"
        buttonText="Create wedding album"
      />
      <Hero />
      <Moment />
      <Mess />
      <Album />
      <QrSection />
      <StepsSection />
      <CarouselSection />
      <FinalSection />
      <Footer />
    </main>
  );
}
