import { CheckboxUI } from "@/shared/ui";
import { FC } from "react";
import { SectionTitle } from "../atoms";

const list1 = [
  "Обменять валюту",
  <>
    Распечатать документы <br />
    (билеты, страховка и др.)
  </>,
  "Оставить запасной ключ доверенным лицам на случай форс-мажора",
  "Создать альбом «Путешествие» в MonClips — для фото прямо по ходу поездки",
  "Оплатить счета, чтобы избежать штрафов за просрочку",
];
const list2 = [
  "Уточнить прогноз погоды",
  "Решить, где оставить автомобиль",
  "Пройти онлайн-регистрацию",
  "Подзарядить устройства",
  "Скачать книги, или сериалы/фильмы",
  "Освободить память на гаджетах и сохранить медиа в MonClips Gallery",
];

export const Preparation: FC = () => {
  return (
    <section className="pt-16 md:pt-[100px]">
      <div className="container">
        <SectionTitle
          icon="/assets/tour/gala/icons/preparation.svg"
          title="Подготовка к отъезду"
        />
        <div className="flex flex-wrap -mx-4">
          <CheckboxUI.BlockList
            list={list1}
            name="prepGaloTour1"
            className="basis-full md:basis-1/2 px-4"
          />
          <CheckboxUI.BlockList
            list={list2}
            name="prepGaloTour2"
            className="basis-full md:basis-1/2 px-4"
          />
        </div>
      </div>
    </section>
  );
};
