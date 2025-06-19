import { FC } from "react";
import { Slider } from "./slider";
import { SendApplicationButton } from "@/features/send-application";
// import CountdownTimer from "@/widgets/timer";

const firstArr = Array(22)
  .fill(0)
  .map((_, index) => `/assets/img/limitless/hero/img(${index + 1}).png`);
const secondArr = Array(22)
  .fill(0)
  .map(
    (_, index) => `/assets/img/limitless/hero/img(${(index % 11) + 11}).png`
  );
const thirdArr = Array(22)
  .fill(0)
  .map(
    (_, index) => `/assets/img/limitless/hero/img(${(index % 11) + 21}).png`
  );

export const Hero: FC = () => {
  // const targetDate = new Date("2025-07-01T00:00:00"); // до 1 июля 2025

  return (
    <section className="relative">
      <div className="mb-2">
        <Slider imageList={firstArr} />
      </div>
      <div className="mb-2">
        <Slider imageList={secondArr} isReversed />
      </div>
      <div>
        <Slider imageList={thirdArr} />
      </div>
      <div className="absolute w-full h-full top-0 left-0 bg-gradient-to-r from-[#181818]/80 to-[#181818]/0 pointer-events-none z-10"></div>
      <div className="absolute w-full h-full top-0 left-0 flex flex-wrap items-center z-20">
        <div className="max-w-[1270px] mx-auto px-4">
          {/* <div className="mb-5">
            <CountdownTimer targetDate={targetDate} />
          </div> */}
          <h1 className="max-w-[815px] lg:text-5xl md:text-4xl text-2xl text-yellow-darker uppercase font-black font-apple text-balance mb-9">
            Бесконечная память для твоих путешествий
          </h1>
          <SendApplicationButton />
        </div>
      </div>
    </section>
  );
};
