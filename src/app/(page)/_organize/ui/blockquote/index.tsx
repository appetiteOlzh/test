import Image from "next/image";
import { FC } from "react";

export const Blockquote: FC = () => {
  return (
    <section className="pt-[100px] md:pt-[130px]" id="blockquote">
      <div className="container">
        <div className="flex flex-wrap">
          <div className="basis-full md:basis-7/12">
            <div className="relative">
              <h2 className="text-h2-clamp text-yellow-darker font-light italic font-apple pl-10 md:pl-16 xl:pl-[100px] pt-10 md:pt-16 xl:pt-[100px]">
                То, как Вы отдаёте материалы после мероприятия, тоже продаёт Вас
              </h2>
              <Image
                src="assets/img/organize/quote.svg"
                alt="blockquote"
                width={225}
                height={225}
                unoptimized
                className="absolute top-0 left-0"
              />
            </div>
          </div>
          <div className="basis-full md:basis-5/12">
            <Image
              src="/assets/img/organize/shum-quote.png"
              alt="Александр Шумский - амбассадор Monclips"
              width={552}
              height={738}
              className="mt-[-64px] ml-[-64px]"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
