import Image from "next/image";
import { FC } from "react";
import cn from "classnames";

import s from "./style.module.css";

const painPoints = [
  {
    description: (
      <>
        Мобилограф скидывает{" "}
        <span className="whitespace-nowrap">что-то в чат</span>
      </>
    ),
  },
  {
    description: "Что-то потерялось по пути",
  },
  {
    description: "Что-то не открылось",
  },
  {
    description: "Что-то не загрузилось",
  },
  {
    description: "Кому-то не отправилось",
  },
  {
    description: "И тебя снова дёргают",
  },
];

export const Bastling: FC = () => {
  return (
    <section className="pt-[60px] md:pt-[130px] overflow-hidden" id="bastling">
      <div className="container">
        <h2 className="text-h2-mon font-black font-apple text-yellow-darker uppercase md:mb-8 mb-5">
          вместо того, чтобы вести мероприятие и держать внимание на главном, ты
          начинаешь вязнуть{" "}
          <span className="whitespace-nowrap">в бесконечной</span> суете
        </h2>

        <div className="flex flex-wrap -mx-2.5 flex-row-reverse ">
          <div className="basis-full lg:basis-5/12 px-2.5 mb-3 lg:mb-0">
            <div className="space-y-8 lg:space-y-2">
              {painPoints.map(({ description }, index) => (
                <ProblemItem index={index} key={index}>
                  {description}
                </ProblemItem>
              ))}
            </div>
          </div>

          <div className="basis-full lg:basis-7/12 px-2.5">
            <div className="relative mx-auto xl:mx-0 ">
              <Image
                src="/assets/img/organize/bastling.png"
                alt="Chaos after event"
                width={680}
                height={520}
                className="rounded-3xl w-full h-auto max-h-[520px] min-h-[416px] object-cover object-top"
              />
              <div className="absolute bottom-5 left-1/2 -translate-x-1/2 flex justify-center space-x-5">
                <Tag />
                <Tag />
                <Tag />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Tag: FC = () => {
  return (
    <div className="md:rounded-3xl rounded-2xl text-yellow-darker bg-[#101010] font-black w-[140px] leading-[58px] md:w-[200px] md:leading-[66px] text-center">
      Скинь
    </div>
  );
};

const ProblemItem: FC<{ children: React.ReactNode; index: number }> = ({
  children,
  index,
}) => {
  return (
    <div className={cn("bg-[#101010] p-6 rounded-3xl h-full", s.bastlingItem)}>
      <div className="flex flex-wrap items-center">
        <span className="text-yellow-darker text-2xl font-bold w-8 leading-8 basis-12 pr-4">
          0{index + 1}
        </span>
        <p className="md:text-lg text-base font-bold flex-1 min-w-0">
          {children}
        </p>
      </div>
    </div>
  );
};
