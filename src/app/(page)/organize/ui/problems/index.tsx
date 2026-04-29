import Image from "next/image";
import { FC } from "react";

const painPoints = [
  {
    description: (
      <>
        Кто-то из гостей подходит: “
        <span className="text-yellow-darker">Скиньте фото</span>”
      </>
    ),
  },
  {
    description: (
      <>
        Кто-то пишет: <br />“
        <span className="text-yellow-darker">А можно видео?</span>”
      </>
    ),
  },
  {
    description: (
      <>
        Кто-то просит в <span className="text-yellow-darker">WhatsApp</span>,{" "}
        <br />
        кто-то хочет в <span className="text-yellow-darker">Telegram</span>
      </>
    ),
  },
  {
    description: (
      <>
        Кому-то надо{" "}
        <span className="text-yellow-darker">
          прямо <br />
          сейчас
        </span>
        , кому-то <span className="text-yellow-darker">не дошло</span>
      </>
    ),
  },
];

export const Problems: FC = () => {
  return (
    <section className="pt-[100px] md:pt-[130px]" id="problems">
      <div className="container">
        <h2 className="text-h2-clamp font-black font-apple text-yellow-darker uppercase text-balance md:mb-8 mb-5">
          И в какой-то момент начинается то, что меня всегда раздражало…
        </h2>

        <div className="flex flex-wrap -mx-2.5">
          <div className="basis-full lg:basis-1/2 lg:block hidden px-2.5">
            <div className="relative mx-auto xl:mx-0 ">
              <Image
                src="/assets/img/organize/problem.png"
                alt="Chaos after event"
                width={580}
                height={312}
                className="rounded-3xl w-full h-[312px] object-cover object-top"
              />
            </div>
          </div>
          <div className="basis-full lg:basis-1/2 px-2.5">
            <div className="grid md:grid-cols-2 gap-5 h-full">
              {painPoints.map(({ description }, index) => (
                <div key={index}>
                  <ProblemItem>{description}</ProblemItem>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const ProblemItem: FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="bg-[#101010] p-6 rounded-3xl h-full">
      <div className="mb-4">
        <Image
          src="/assets/img/organize/quote.svg"
          alt=""
          width={32}
          height={32}
          unoptimized
        />
      </div>

      <p className="md:text-lg text-base font-bold">{children}</p>
    </div>
  );
};
