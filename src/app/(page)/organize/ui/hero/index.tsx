import Image from "next/image";
import Link from "next/link";
import { FC } from "react";
import { AppOpener } from "@/features/app-opener";

export const Hero: FC = () => {
  return (
    <section className="relative md:pt-[180px] pt-[130px] overflow-hidden">
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
              eventName="organize_hero_popup"
              eventNameGoogleplay="organize_hero_googleplay"
              eventNameAppstore="organize_hero_appstore"
            />
            <Link href="#chaos" className="mt-auto xl:block w-8 h-8 hidden">
              <ArrowDown />
            </Link>
          </div>
          <div className="lg:flex-1 lg:mt-[-88px] lg:ml-[-8px] lg:mr-[-45px] ml-auto">
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
