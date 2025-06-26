import { CheckboxUI } from "@/shared/ui";
import { FC } from "react";
import { SectionTitle } from "../atoms";

const list = [
  {
    icon: "/assets/img/checklist/apps/tripadviser.png",
    content: "Tripadvisor — рестораны, еда и достопримечательности",
  },
  {
    icon: "/assets/img/checklist/apps/monclips.png",
    content: "MonClips Gallery — бесплатное облачное хранилище для ваших фото",
  },
  {
    icon: "/assets/img/checklist/apps/uber.png",
    content: "Uber — международное такси",
  },
  {
    icon: "/assets/img/checklist/apps/google.png",
    content: "Google Translate — переводчик",
  },
  {
    icon: "/assets/img/checklist/apps/grab.png",
    content: "GRAB — Такси по странам Азии",
  },
  {
    icon: "/assets/img/checklist/apps/maps.png",
    content: "MAPS.ME — Офлайн-карты",
  },
  {
    icon: "/assets/img/checklist/apps/toilet.png",
    content: "Toilet Finder — поиск туалетов поблизости",
  },
  {
    icon: "/assets/img/checklist/apps/xe.png",
    content: "XE Currency — обмен валют",
  },
];

export const AppList: FC = () => {
  return (
    <section className="pt-16 md:pt-[100px]">
      <div className="max-w-[1270px] mx-auto px-4">
        <SectionTitle
          icon="/assets/tour/gala/icons/apps.svg"
          title="Нужные приложения"
        />
        <CheckboxUI.CardList list={list} name="appListGaloTour" />
      </div>
    </section>
  );
};
