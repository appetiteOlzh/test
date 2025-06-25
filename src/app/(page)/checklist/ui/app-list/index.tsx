import { CheckboxUI } from "@/shared/ui";
import { FC } from "react";

const list = [
  {
    icon: "/assets/img/checklist/apps/uber.png",
    content: "Uber - международное такси",
  },
  {
    icon: "/assets/img/checklist/apps/grab.png",
    content: "GRAB - Такси в странах Азии",
  },
  {
    icon: "/assets/img/checklist/apps/toilet.png",
    content: "Toilet Finder - Поиск общественных туалетов",
  },
  {
    icon: "/assets/img/checklist/apps/tripadviser.png",
    content: "Tripadvisor - Поиск еды и достопримечательностей",
  },
  {
    icon: "/assets/img/checklist/apps/google.png",
    content: "Google Translate - переводчик",
  },
  {
    icon: "/assets/img/checklist/apps/maps.png",
    content: "MAPS.ME - Офлайн-карты",
  },
  {
    icon: "/assets/img/checklist/apps/xe.png",
    content: "XE Currency - Конвертация валюты",
  },
  {
    icon: "/assets/img/checklist/apps/monclips.png",
    content: "MonClips Gallery - сохраняйте фото и делитесь ими с близкими",
  },
];

export const AppList: FC = () => {
  return (
    <section className="pt-16 md:pt-[100px]">
      <div className="max-w-[1270px] mx-auto px-4">
        <h2 className="mb-[30px] text-yellow-darker md:text-4xl text-xl font-apple font-bold uppercase">
          Нужные приложения
        </h2>
        <CheckboxUI.CardList
          list={list}
          name="beforeOut1"
          className="basis-full md:basis-1/2 px-4"
        />
      </div>
    </section>
  );
};
