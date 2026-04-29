import Image from "next/image";
import { FC } from "react";
import { twMerge } from "tailwind-merge";

const advantages = [
  {
    title: (
      <>
        Дополнительная <br />
        услуга в прайсе
      </>
    ),
    description: (
      <>
        То, что Вы и так сейчас делаете бесплатно, можно превратить в отдельную
        услугу. Альбом после мероприятия - это удобно для клиента и даёт Вам
        дополнительный повод брать деньги.
      </>
    ),
    src: "/assets/img/organize/adv-1.png",
  },
  {
    title: (
      <>
        Способ выделиться <br />
        среди конкурентов
      </>
    ),
    description: (
      <>
        Ищите, чем выделиться среди других ведущих? Добавьте в своё предложение
        альбом после мероприятия по одной ссылке.
      </>
    ),
    src: "/assets/img/organize/adv-2.png",
  },
  {
    title: (
      <>
        Впечатление <br />о Вас остается
      </>
    ),
    description: (
      <>То, как Вы отдаёте материалы после мероприятия, тоже продаёт Вас.</>
    ),
    src: "/assets/img/organize/adv-3.png",
  },
];

export const Advantages: FC = () => {
  return (
    <section id="advantages" className="pt-[100px] md:pt-[130px]">
      <div className="container">
        <h2 className="text-h2-clamp text-yellow-darker uppercase font-black font-apple xl:text-center max-w-[706px] xl:mx-auto mb-8">
          Удобно для клиента. Выгодно для Вас.
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 md:gap-5">
          {advantages.map((advantage, index) => (
            <AdvantageItem key={index} {...advantage} />
          ))}
        </div>
      </div>
    </section>
  );
};

const AdvantageItem: FC<{
  title: React.ReactNode;
  description: React.ReactNode;
  src: string;
}> = ({ title, description, src }) => {
  return (
    <div className="bg-[#101010] rounded-3xl md:rounded-[32px] overflow-hidden">
      <figure>
        <Image
          src={src}
          alt="Monclips"
          width={380}
          height={220}
          className="w-full"
        />

        <figcaption className={twMerge("p-6 pt-5 md:p-10 md:pt-[30px]")}>
          <h3 className="text-lg md:text-xl font-black text-yellow-darker mb-2 !leading-tight">
            {title}
          </h3>
          <p className="text-base">{description}</p>
        </figcaption>
      </figure>
    </div>
  );
};
