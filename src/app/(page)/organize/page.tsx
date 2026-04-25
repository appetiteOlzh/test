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
        className="pt-8 pb-6 md:pt-6"
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
