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
        То, что Вы сейчас делаете бесплатно, можно превратить в отдельную услугу{" "}
        <br />
        Альбом после мероприятия - это удобно для клиента и даёт Вам понятный
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
        Ищете, чем выделиться среди других ведущих? Добавьте в своё предложение
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
      <>
        Праздник закончился - впечатление <br />о Вас осталось. Отдайте клиенту{" "}
        <br />и гостям фото и видео красиво, <br />а не через хаос в чатах.
      </>
    ),
    src: "/assets/img/organize/adv-3.png",
  },
];

export const Advantages: FC = () => {
  return (
    <section id="advantages" className="pt-[100px] md:pt-[130px]">
      <div className="container">
        <h2 className="text-h2-clamp text-yellow-darker uppercase font-black font-apple md:text-center max-w-[964px] mx-auto mb-4">
          Ссылка на альбом с мероприятия - именно здесь начинается Ваша
          следующая продажа
        </h2>
        <p className="text-lg mb-8 font-bold text-center">
          Удобно для клиента. Выгодно для Вас.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-2 md:gap-5">
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
        <Image src={src} alt="Monclips" width={380} height={220} />

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
