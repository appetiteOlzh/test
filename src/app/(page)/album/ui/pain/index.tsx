"use client";

import Image from "next/image";
import { FC } from "react";

export const Pain: FC = () => {
  return (
    <section className="pt-[60px] md:pt-[130px]" id="pain">
      <div className="container">
        <div className="flex flex-wrap">
          <div className="basis-full xl:basis-1/2 md:basis-7/12 mb-6 md:mb-0">
            <div className="md:pr-4">
              <h2 className="text-h2-clamp text-yellow-darker uppercase font-black font-apple mb-3 md:mb-4 max-w-[500px]">
                И меня реально бесила одна вещь…
              </h2>
              <ul className="text-lg !leading-snug space-y-2 md:space-y-3">
                <li>Представьте, идёт мероприятие</li>
                <li>Вы в работе.</li>
                <li>
                  Держите зал <br />
                  Держите динамику <br />
                  Ловите настроение людей
                </li>
                <li>Мобилограф снимает живые моменты.</li>
                <li>Тосты, смех, танцы, эмоции...</li>
                <li>Всё самое вкусное, что происходит прямо сейчас.</li>
              </ul>
            </div>
          </div>
          <div className="basis-full xl:basis-1/2 md:basis-5/12 min-w-0">
            <div className="md:-ml-4">
              <Image
                src="/assets/img/organize/pain.png"
                alt="Александр Шумский - амбассадор MonClips"
                className="w-full h-[400px] object-cover object-top rounded-3xl"
                width={620}
                height={400}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
