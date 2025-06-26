import { CheckboxUI } from "@/shared/ui";
import { FC } from "react";
import { SectionTitle } from "../atoms";

const list1 = [
  "Проверить пункт “самое важное”",
  "Вынести мусор",
  "Выключить все электроприборы, включая из розеток",
  "Выбросить скоропортящиеся продукты питания из холодильника",
];
const list2 = ["Перекрыть воду", "Закрыть все окна", "Полить цветы"];

export const BeforeOut: FC = () => {
  return (
    <section className="pt-16 md:pt-[100px]">
      <div className="max-w-[1270px] mx-auto px-4">
        <SectionTitle
          icon="/assets/tour/gala/icons/before-out.svg"
          title="Перед выходом"
        />
        <div className="flex flex-wrap -mx-4">
          <CheckboxUI.BlockList
            list={list1}
            name="beforeOutGaloTour1"
            className="basis-full md:basis-1/2 px-4"
          />
          <CheckboxUI.BlockList
            list={list2}
            name="beforeOutGaloTour2"
            className="basis-full md:basis-1/2 px-4"
          />
        </div>
      </div>
    </section>
  );
};
