import Image from "next/image";
import { FC } from "react";

const benefits = [
  {
    title: "Почему всё это происходит так неудобно",
    icon: "/assets/img/organize/benefits/1.svg",
  },
  {
    title: "Почему в момент, когда мероприятие ещё идёт",
    icon: "/assets/img/organize/benefits/2.svg",
  },
  {
    title: "Когда эмоции живые",
    icon: "/assets/img/organize/benefits/3.svg",
  },
  {
    title: "Когда контент уже создаётся",
    icon: "/assets/img/organize/benefits/4.svg",
  },
  {
    title: "Я вынужден гонять его по чатам, мессенджерам и ручным пересылкам",
    icon: "/assets/img/organize/benefits/5.svg",
  },
];

export const Thoughts: FC = () => {
  return (
    <section id="thoughts" className="pt-[100px] md:pt-[130px]">
      <div className="container">
        <h2 className="text-h2-clamp text-yellow-darker uppercase font-black font-apple mb-6 md:mb-8">
          И внезапно я поймал себя на мысли…
        </h2>
        <div className="flex flex-wrap -mx-2.5">
          <div className="basis-full xl:basis-8/12 lg:basis-7/12 md:basis-6/12 space-y-2 px-2.5 mb-6 md:mb-0">
            {benefits.map((benefit, index) => (
              <ThoughtItem key={index} {...benefit} />
            ))}
          </div>
          <div className="basis-full xl:basis-4/12 lg:basis-5/12 md:basis-6/12 px-2.5">
            <Image
              src="/assets/img/organize/thoughts.png"
              alt="Monclips"
              width={576}
              height={432}
              className="w-full h-[432px] object-cover object-center rounded-3xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

const ThoughtItem: FC<{
  title: React.ReactNode;
  icon: string;
}> = ({ title, icon }) => {
  return (
    <div className="bg-[#101010] rounded-3xl p-4 xl:p-6">
      <div className="flex items-center">
        <Image
          src={icon}
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
