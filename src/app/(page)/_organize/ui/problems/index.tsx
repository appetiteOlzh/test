import Image from "next/image";
import { FC } from "react";

const painPoints = [
  {
    title: "Фото и видео приходят разными частями",
    description:
      "Кто-то скинул в WhatsApp, кто-то в Telegram, а кто-то вообще забыл",
    icon: "/assets/img/organize/p-1.svg",
  },
  {
    title: "Клиенту неудобно всё собирать",
    description:
      "После хорошего мероприятия финал выглядит скомканно: ссылки, архивы, пересылки, голосовые",
    icon: "/assets/img/organize/p-2.svg",
  },
  {
    title: "На этом можно зарабатывать, но пока это просто лишняя возня",
    description: "Вы и так тратите на это время, но не монетизируете",
    icon: "/assets/img/organize/p-3.svg",
  },
  {
    title: "Хочется отличаться от других ведущих?",
    description:
      "Не только провести хорошо, но и красиво напомнить о себе после события",
    icon: "/assets/img/organize/p-4.svg",
  },
];

export const Problems: FC = () => {
  return (
    <section className="pt-[100px] md:pt-[130px]" id="chaos">
      <div className="container">
        <h2 className="text-h2-clamp font-black font-apple text-yellow-darker uppercase mb-3 md:text-center text-balance">
          После мероприятия всё хорошее часто заканчивается хаосом
        </h2>
        <p className="text-xl mb-8 font-bold text-center max-w-[584px] mx-auto">
          Фото и видео разлетаются по чатам, клиенту неудобно, а Вы тратите
          время на то, что можно было превратить в услугу.
        </p>
        <div className="flex flex-wrap">
          <div className="basis-full md:basis-1/2 mb-12 md:mb-0">
            <div className="relative mx-auto md:mx-0">
              <Image
                src="/assets/img/organize/chaos-laptop.png" // Placeholder
                alt="Chaos after event"
                width={580}
                height={387}
                className="rounded-3xl md:rounded-[36px]"
              />
            </div>
          </div>
          <div className="basis-full md:basis-1/2">
            <div className="space-y-2">
              {painPoints.map((point, index) => (
                <ProblemItem key={index} {...point} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const ProblemItem: FC<{ title: string; description: string; icon: string }> = ({
  title,
  description,
  icon,
}) => {
  return (
    <div className="bg-[#101010] p-10 rounded-3xl md:rounded-[32px]">
      <div className="flex items-center">
        <Image
          src={icon}
          alt={title}
          width={32}
          height={32}
          className="md:hidden mb-4"
          unoptimized
        />
        <h3 className="text-lg md:text-xl font-black text-yellow-darker uppercase mb-2">
          {title}
        </h3>
      </div>
      <p className="text-sm md:text-base text-balance">{description}</p>
    </div>
  );
};
