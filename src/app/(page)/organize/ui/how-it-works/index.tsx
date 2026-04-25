import Image from "next/image";
import { FC } from "react";
import { twMerge } from "tailwind-merge";

const howItWorks = [
  {
    title: "Создаёте альбом",
    description:
      "Под конкретную свадьбу, юбилей, корпоратив или другое мероприятие",
    src: "/assets/img/organize/hiw-1.png",
  },
  {
    title: "Загружаете фото и видео",
    description: "Лучшие кадры, закулисье, эмоции, ключевые моменты",
    src: "/assets/img/organize/hiw-2.png",
  },
  {
    title: "Отправляете одну ссылку",
    description: "Клиенту, гостям, команде - без архива, без пересылки кусками",
    src: "/assets/img/organize/hiw-3.png",
  },
];

export const HowItWorks: FC = () => {
  return (
    <section id="how-it-works" className="pt-[100px] md:pt-[130px]">
      <div className="container">
        <h2 className="text-h2-clamp text-yellow-darker uppercase font-black font-apple xl:text-center max-w-[964px] xl:mx-auto mb-6 md:mb-8">
          Максимально просто. <br />
          Всего 3 шага:
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-2 md:gap-5">
          {howItWorks.map((item, index) => (
            <HowItWorksItem key={index} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
};

const HowItWorksItem: FC<{
  title: React.ReactNode;
  description: React.ReactNode;
  src: string;
}> = ({ title, description, src }) => {
  return (
    <div className="bg-[#1A1A1A] rounded-3xl md:rounded-[32px] overflow-hidden">
      <figure>
        <Image
          src={src}
          alt="Monclips"
          width={272}
          height={258}
          className="mx-auto"
        />

        <figcaption className={twMerge("p-6 xl:p-10 xl:pt-8 text-center")}>
          <h3 className="text-lg md:text-xl font-black text-yellow-darker mb-2 !leading-tight">
            {title}
          </h3>
          <p className="text-base">{description}</p>
        </figcaption>
      </figure>
    </div>
  );
};
