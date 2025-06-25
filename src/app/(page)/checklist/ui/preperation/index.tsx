import { CheckboxUI } from "@/shared/ui";
import { FC } from "react";

const list1 = [
  "Поменять валюту",
  "Определиться с тем, где оставить машину",
  "Оставить дубликат ключа соседям или родственникам - на непредвиденный случай",
  "Создать папку “Путешествие” в MonClips, чтобы сразу сохранять фото из путешествия",
  "Заплатить по счетам, чтобы избежать появления пеней за просрочку во время своего отсутствия",
];
const list2 = [
  "Проверить погоду",
  "Распечатать билеты, ваучер, страховку",
  "Зарегистрироваться на рейс",
  "Зарядить все гаджеты",
  "Скачать книги, или сериалы/фильмы",
  "Освободить память на телефоне/камере/ноутбуке, загрузить свои фото и видео в MonClips Gallery",
];

export const Preparation: FC = () => {
  return (
    <section className="pt-16 md:pt-[100px]">
      <div className="max-w-[1270px] mx-auto px-4">
        <div className="bg-[#202020] p-9 md:p-12 lg:p-16 rounded-[36px] md:rounded-4xl lg:rounded-[64px]">
          <h2 className="mb-[30px] text-yellow-darker md:text-4xl text-xl font-apple font-bold uppercase">
            Подготовка к отъезду
          </h2>
          <div className="flex flex-wrap -mx-4">
            <CheckboxUI.BlockList
              list={list1}
              name="prep1"
              className="basis-full md:basis-1/2 px-4"
            />
            <CheckboxUI.BlockList
              list={list2}
              name="prep2"
              className="basis-full md:basis-1/2 px-4"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
