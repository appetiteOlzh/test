import { Footer } from "@/widgets/footer";
import { HeaderNew } from "@/widgets/header";
import {
  Hero,
  Problems,
  Advantages,
  HowItWorks,
  Benefits,
  Comfort,
  Blockquote,
  Download,
} from "./ui";

export default function Page() {
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
        className="pb-8 md:py-6 fixed top-0 left-0 right-0 z-50 w-full bg-[var(--background-color)]"
        eventName="organize_header_popup"
        eventNameGoogleplay="organize_header_googleplay"
        eventNameAppstore="organize_header_appstore"
      />
      <Hero />
      <Problems />
      <Advantages />
      <HowItWorks />
      <Benefits />
      <Comfort />
      <Blockquote />
      <Download />
      <Footer />
    </main>
  );
}
