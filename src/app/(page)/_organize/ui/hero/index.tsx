import Image from "next/image";
import Link from "next/link";
import { FC } from "react";
import { AppOpener } from "@/features/app-opener";

export const Hero: FC = () => {
  return (
    <section className="relative pt-[180px]">
      <div className="w-full container">
        <div className="flex flex-wrap">
          <div className="basis-full md:basis-1/2 pb-16 flex flex-col flex-wrap">
            <h1 className="text-h1-clamp text-yellow-darker uppercase font-black font-apple mb-4">
              Новый инструмент для ведущих и организаторов
            </h1>
            <p className="text-lg md:text-2xl mb-8 font-bold">
              Альбом после мероприятия по одной ссылке - новый формат для тех,
              кто хочет больше зарабатывать на своих мероприятиях
            </p>
            <AppOpener
              buttonText="Скачать приложение"
              className="rounded-full w-full md:w-[300px] py-[22px]"
              eventName="organize_hero_popup"
              eventNameGoogleplay="organize_hero_googleplay"
              eventNameAppstore="organize_hero_appstore"
            />
            <Link href="#chaos" className="mt-auto md:block w-8 h-8 hidden">
              <ArrowDown />
            </Link>
          </div>
          <div className="flex-1 mt-[-88px] ml-[-8px] mr-[-45px]">
            <Image
              src="/assets/img/organize/shum.png"
              alt="Александра Шумский - амбассадор MonClips"
              width={656}
              height={819}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

const ArrowDown: FC = () => {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M16 5V27"
        stroke="white"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M7 18L16 27L25 18"
        stroke="white"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
