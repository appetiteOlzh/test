import { FC } from "react";
import { CheckboxUI } from "@/shared/ui";
import { SectionTitle } from "../atoms";

const list1 = [
  "Паспорт",
  "Билеты, ваучеры, страховка",
  "Справка с ПЦР-тестом (если требуется)",
  "Телефон",
  "Водительские права",
];
const list2 = [
  "Зарядка и Power Bank",
  "Наушники",
  "Деньги / банковская карта",
  "Скачать MonClips Gallery",
];

export const MostImportant: FC = () => {
  return (
    <section className="pt-9 md:pt-[100px]">
      <div className="container">
        <div className="overlay">
          <SectionTitle
            icon="/assets/tour/gala/icons/imporant.svg"
            title="Самое важное"
          />
          <div className="flex flex-wrap -mx-4">
            <div className="basis-full md:basis-1/2 px-4">
              <CheckboxUI.BlockList
                list={list1}
                name="mostImportantGalaTour1"
              />
            </div>
            <div className="basis-full md:basis-1/2 px-4">
              <CheckboxUI.BlockList
                list={list2}
                name="mostImportantGalaTour2"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
