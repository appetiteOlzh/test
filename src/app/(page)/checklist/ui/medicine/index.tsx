import { CheckboxUI } from "@/shared/ui";
import { FC } from "react";

const list1 = [
  "Парацетамол / аспирин - жаропонижающее",
  "Нимесил, кетонал - обезболивающее",
  "Терафлю - при простуде",
  "Мезим - вздутие, тяжесть в животе",
  "Бинт",
  "Доктор мом, септолете - леденцы от кашля и боли в горле",
  "Супрастин таблетки и ампулы - противоаллергическое",
];
const list2 = [
  "Смекта - отравление, диарея",
  "Валкордин - сердечная боль",
  "Пантенол мазь, спрей - от ожогов",
  "Драмина - при укачивании",
  "Йод",
  "Хлоргексидин, перекись водорода - для обработки ран",
];

export const Medicine: FC = () => {
  return (
    <section className="pt-16 md:pt-[100px]">
      <div className="max-w-[1270px] mx-auto px-4">
        <h2 className="mb-[30px] text-yellow-darker md:text-4xl text-xl font-apple font-bold uppercase">
          Аптечка
        </h2>
        <div className="flex flex-wrap -mx-4">
          <CheckboxUI.BlockList
            list={list1}
            name="medicine1"
            className="basis-full md:basis-1/2 px-4"
          />
          <CheckboxUI.BlockList
            list={list2}
            name="medicine2"
            className="basis-full md:basis-1/2 px-4"
          />
        </div>
      </div>
    </section>
  );
};
