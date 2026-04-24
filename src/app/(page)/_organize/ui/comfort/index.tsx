import Image from "next/image";
import { FC } from "react";

export const Comfort: FC = () => {
  return (
    <section id="comfort" className="pt-[100px] md:pt-[130px]">
      <div className="container">
        <div className="flex flex-wrap mb-2 md:mb-5">
          <div className="basis-full md:basis-5/12">
            <h2 className="text-h2-clamp text-yellow-darker uppercase font-black font-apple mb-4 max-w-[408px]">
              Когда клиенту действительно удобно - Вам это в плюс
            </h2>
          </div>
          <div className="basis-full md:basis-7/12">
            <Image
              src="/assets/img/organize/comfort.png"
              alt="Monclips"
              width={680}
              height={454}
              className="md:rounded-[36px] rounded-3xl"
            />
          </div>
        </div>
        <div className="flex flex-wrap -mb-2 md:-mb-5 -mx-2 md:-mx-2.5">
          <div className="basis-full md:basis-1/3 px-2 md:px-2.5 mb-2 md:mb-5">
            <ComfortItem src="/assets/img/organize/comfort/1.svg">
              Все фото и видео <br className="hidden md:block" />в одном месте
            </ComfortItem>
          </div>
          <div className="basis-full md:basis-1/3 px-2 md:px-2.5 mb-2 md:mb-5">
            <ComfortItem src="/assets/img/organize/comfort/2.svg">
              Одна ссылка вместо хаоса в чатах
            </ComfortItem>
          </div>
          <div className="basis-full md:basis-1/3 px-2 md:px-2.5 mb-2 md:mb-5">
            <ComfortItem src="/assets/img/organize/comfort/3.svg">
              Удобно открывать <br className="hidden md:block" />и смотреть
            </ComfortItem>
          </div>
          <div className="basis-full md:basis-1/2 px-2 md:px-2.5 mb-2 md:mb-5">
            <ComfortItem src="/assets/img/organize/comfort/4.svg">
              Приятное ощущение, что о нём подумали и после мероприятия
            </ComfortItem>
          </div>
          <div className="basis-full md:basis-1/2 px-2 md:px-2.5 mb-2 md:mb-5">
            <ComfortItem src="/assets/img/organize/comfort/5.svg">
              Возможность быстро пересмотреть и сохранить лучшие моменты
            </ComfortItem>
          </div>
        </div>
      </div>
    </section>
  );
};

const ComfortItem: FC<{
  children: React.ReactNode;
  src: string;
}> = ({ children, src }) => {
  return (
    <div className="bg-[#101010] rounded-3xl md:rounded-[32px] overflow-hidden p-10 h-full">
      <Image src={src} alt="Monclips" width={42} height={42} className="mb-6" />
      <p className="text-base md:text-xl !leading-tight text-balance">
        {children}
      </p>
    </div>
  );
};
