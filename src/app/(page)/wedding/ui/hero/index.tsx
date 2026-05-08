import { FC } from "react";
import { AppOpener } from "@/features/app-opener";

export const Hero: FC = () => {
  return (
    <section
      className="relative md:pt-[180px] pt-[130px] overflow-hidden"
      style={{
        backgroundImage: "url(/assets/img/wedding/hero-bg.png)",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="w-full container">
        <div className="flex flex-wrap">
          <div className="basis-full lg:basis-1/2 lg:pb-16 flex flex-col flex-wrap relative z-10">
            <h1 className="text-h1-clamp text-yellow-darker uppercase font-black font-apple mb-4">
              Новый инструмент <br />
              для ведущих и организаторов
            </h1>
            <p className="text-lg md:text-2xl mb-8 font-bold">
              Альбом после мероприятия по одной ссылке - новый формат для тех,
              кто хочет больше зарабатывать на своих мероприятиях
            </p>
            <AppOpener
              buttonText="Скачать приложение"
              className="rounded-full w-full md:w-[300px] py-[22px] text-center"
              eventName="wedding_hero_popup"
              eventNameGoogleplay="wedding_hero_googleplay"
              eventNameAppstore="wedding_hero_appstore"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
