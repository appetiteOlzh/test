"use client";

import Image from "next/image";
import { FC } from "react";

export const Start: FC = () => {
  return (
    <section className="pt-[60px] md:pt-[130px]" id="start">
      <div className="container">
        <h2 className="text-h2-clamp text-yellow-darker uppercase font-black font-apple mb-3 md:mb-6">
          И я начал думать…
        </h2>
        <div className="flex flex-wrap -mx-2.5">
          <div className="basis-full lg:basis-1/3 px-2.5 mb-4 lg:mb-0">
            <div className="text-lg font-bold">
              <p className="mb-2">
                как сделать так, чтобы всё сразу собиралось в одном месте
              </p>
              <p>так и родилась идея живого альбома</p>
            </div>
          </div>
          <div className="basis-full lg:basis-2/3 px-2.5">
            <div className="flex flex-wrap -mx-2.5">
              <div className="basis-full md:basis-1/2 px-2.5 space-y-2">
                <StartItem title="Максимально просто" />
                <StartItem title="Максимально доступно" />
                <StartItem title="Без скачиваний" />
              </div>
              <div className="basis-full md:basis-1/2 px-2.5 space-y-2">
                <StartItem title="Когда контент уже создаётся" />
                <StartItem title="Без регистраций" />
                <StartItem title="Без лишних действий" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const StartItem: FC<{
  title: React.ReactNode;
}> = ({ title }) => {
  return (
    <div className="bg-[#101010] rounded-3xl p-4 xl:p-6">
      <div className="flex items-center">
        <Image
          src="/assets/img/organize/lightning.svg"
          alt="Monclips"
          width={32}
          height={32}
          className="xl:mr-6 mr-4"
          unoptimized
        />
        <p className="text-base md:text-lg !leading-tight">{title}</p>
      </div>
    </div>
  );
};
