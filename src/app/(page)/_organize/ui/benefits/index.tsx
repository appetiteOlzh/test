import Image from "next/image";
import { FC } from "react";

const benefits = [
  {
    title: "Ещё одна услуга в Вашем предложении",
    icon: "/assets/img/organize/benefits/1.svg",
  },
  {
    title: "Понятный повод поднять чек",
    icon: "/assets/img/organize/benefits/2.svg",
  },
  {
    title: "Более сильное впечатление о Вас после мероприятия",
    icon: "/assets/img/organize/benefits/3.svg",
  },
  {
    title: "Повод первым напомнить о себе клиенту",
    icon: "/assets/img/organize/benefits/4.svg",
  },
  {
    title:
      "Материалы по событиям хранятся по альбомам, а не теряются в ленте и чатах",
    icon: "/assets/img/organize/benefits/5.svg",
  },
];

export const Benefits: FC = () => {
  return (
    <section id="benefits" className="pt-[100px] md:pt-[130px]">
      <div className="container">
        <div className="flex flex-wrap">
          <div className="basis-full md:basis-5/12">
            <h2 className="text-h2-clamp text-yellow-darker uppercase font-black font-apple mb-4">
              Ваш следующий заказ начинается <br />с Monclips
            </h2>
          </div>
          <div className="basis-full md:basis-1/12"></div>
          <div className="basis-full md:basis-6/12 space-y-2 md:space-y-2.5">
            {benefits.map((benefit, index) => (
              <BenefitItem key={index} {...benefit} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const BenefitItem: FC<{
  title: React.ReactNode;
  icon: string;
}> = ({ title, icon }) => {
  return (
    <div className="bg-[#101010] rounded-3xl md:rounded-[32px] p-10">
      <div className="flex items-center">
        <Image
          src={icon}
          alt="Monclips"
          width={42}
          height={42}
          className="mr-[30px]"
        />
        <p className="text-base md:text-xl !leading-tight">{title}</p>
      </div>
    </div>
  );
};
