import { CheckboxUI } from "@/shared/ui";
import Image from "next/image";
import { FC } from "react";

const list = [
  "Паспорт",
  "Билеты, ваучеры, страховка",
  "Справка с ПЦР-тестом (если требуется)",
  "Телефон",
  "Водительские права",
  "Зарядка и Power Bank",
  "Наушники",
  "Деньги / банковская карта",
  "Скачать MonClips Gallery",
];

export const MostImportant: FC = () => {
  return (
    <section className="pt-9 md:pt-[100px]">
      <div className="max-w-[1270px] mx-auto px-4">
        <h2 className="text-xl md:text-4xl font-bold font-apple md:mb-8 mb-4 uppercase text-yellow-darker">
          Самое важное
        </h2>
        <div className="flex flex-wrap -mx-4">
          <div className="basis-full lg:basis-1/2 md:basis-5/12 px-4 mb-9 md:mb-0">
            <CheckboxUI.BlockList list={list} name="mostImportant" />
          </div>
          <div className="basis-full lg:basis-1/2 md:basis-7/12 px-4">
            <Image
              src="/assets/img/checklist/important.png"
              width={605}
              height={480}
              alt="Самое важное"
              className="w-full rounded-4xl"
              quality={100}
            />
          </div>
        </div>
      </div>
    </section>
  );
};
