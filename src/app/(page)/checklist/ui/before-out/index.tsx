import { CheckboxUI } from "@/shared/ui";
import { FC } from "react";

const list1 = [
  <>
    Проверить пункт “<span className="text-yellow-darker">самое важное</span>”
  </>,
  "Вынести мусор",
  "Выключить все приборы, в том числе из розетки",
  "Выбросить скоропортящиеся продукты питания из холодильника",
];
const list2 = ["Перекрыть воду", "Закрыть окна", "Полить цветы"];

export const BeforeOut: FC = () => {
  return (
    <section className="pt-16 md:pt-[100px]">
      <div className="max-w-[1270px] mx-auto px-4">
        <h2 className="mb-[30px] text-yellow-darker md:text-4xl text-xl font-apple font-bold uppercase">
          Перед выходом
        </h2>
        <div className="flex flex-wrap -mx-4">
          <CheckboxUI.BlockList
            list={list1}
            name="beforeOut1"
            className="basis-full md:basis-1/2 px-4"
          />
          <CheckboxUI.BlockList
            list={list2}
            name="beforeOut2"
            className="basis-full md:basis-1/2 px-4"
          />
        </div>
      </div>
    </section>
  );
};
