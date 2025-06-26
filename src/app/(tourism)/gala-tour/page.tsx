import {
  AppList,
  BeforeOut,
  Hero,
  Medicine,
  MostImportant,
  Preparation,
  TryIt,
  WithChildren,
} from "./ui";
import { Header } from "@/widgets/tour";

export default function GalaTour() {
  return (
    <main>
      <Header
        logo={{
          src: "/assets/tour/gala/logo.png",
          width: 172,
          height: 152,
          alt: "GalaTour - Travel agency",
        }}
      />
      <Hero />
      <section id="checklist" className="pt-40">
        <div className="container md:text-center">
          <h2 className="text-h1-clamp mb-4">Что Вас ждёт в чек-листе</h2>
          <p className="description">
            Мы учли все ключевые категории, чтобы ваше путешествие прошло легко
            и без забот. <br />
            Следуйте пунктам — и полностью сосредоточьтесь на впечатлениях.
          </p>
        </div>
      </section>
      <MostImportant />
      <Preparation />
      <WithChildren />
      <Medicine />
      <AppList />
      <BeforeOut />
      <TryIt />
    </main>
  );
}
