import Image from "next/image";
import { FC } from "react";

export const Traveling: FC = () => {
  return (
    <section className="md:pt-[180px] pt-40">
      <div className="max-w-[920px] mx-auto px-4">
        <div className="flex flex-wrap items-center">
          <div className="basis-full md:basis-7/12 mb-9 md:mb-0">
            <h2 className="text-yellow-darker text-2xl md:text-4xl lg:text-5xl mb-4 font-apple font-black uppercase md:text-balance">
              Сохраняй каждую поездку
            </h2>
            <p className="text-lg md:text-2xl text-balance max-w-[462px]">
              Мальдивы, Париж, Стамбул, Бали... Ты можешь хранить сколько угодно
              снимков —{" "}
              <span className="text-yellow-darker">
                бесплатно и без подписки
              </span>
              . Создавай отдельные папки по странам и городам. Добавляй обложки,
              фильтры, заметки, — как в личный travel-журнал.
            </p>
          </div>
          <div className="basis-full md:basis-5/12">
            <div className="text-center">
              <Image
                src="/assets/img/limitless/iphone-save.png"
                width={286}
                height={588}
                alt=""
                className="md:mr-0 mx-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
