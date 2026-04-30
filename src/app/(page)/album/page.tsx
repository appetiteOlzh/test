import { Footer } from "@/widgets/footer";
import { HeaderNew } from "@/widgets/header";
import {
  Hero,
  Problems,
  Advantages,
  HowItWorks,
  Thoughts,
  Download,
  Ambassador,
  Pain,
  Bastling,
  Start,
  Album,
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
        className="py-6 md:pt-6 fixed top-0 left-0 right-0 z-50 bg-[var(--background-color)]"
        eventName="album_header_popup"
        eventNameGoogleplay="album_header_googleplay"
        eventNameAppstore="album_header_appstore"
      />
      <Hero />
      <Ambassador />
      <Pain />
      <Problems />
      <Bastling />
      <Thoughts />
      <Start />
      <HowItWorks />
      <Album />
      <Advantages />
      <Download />
      <Footer />
    </main>
  );
}
