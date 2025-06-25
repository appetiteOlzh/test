import { Header } from "@/widgets/header";
import { Footer } from "@/widgets/footer";
import {
  BeforeOut,
  Hero,
  Medicine,
  MostImportant,
  Preparation,
  TryIt,
  WhyUs,
  WithChildren,
} from "./ui";

export default function Limitless() {
  return (
    <>
      <Header isWider />
      <Hero />
      <section className="pt-40">
        <div className="max-w-[1270px] mx-auto px-4 md:text-center">
          <h2 className="text-h1-clamp text-yellow-darker mb-4 uppercase font-apple font-bold">
            Что внутри чек-листа
          </h2>
          <p className="md:text-2xl text-lg">
            Мы собрали все важные категории, чтобы ваша поездка прошла гладко.{" "}
            <br />
            Просто следуйте пунктам — и сосредоточьтесь на самом главном:
            впечатлениях.
          </p>
        </div>
      </section>
      <MostImportant />
      <Preparation />
      <WithChildren />
      <Medicine />
      <BeforeOut />
      <WhyUs />
      <TryIt />
      <Footer />
    </>
  );
}
