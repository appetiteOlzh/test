import { CheckboxUI } from "@/shared/ui";
import { FC } from "react";
import { SectionTitle } from "../atoms";

const list1 = [
  "Парацетамол / аспирин — жаропонижающее",
  "Нимесил, кетонал — обезболивающее",
  "Терафлю — при простуде",
  "Мезим — вздутие, тяжесть в животе",
  "Бинт",
  "Доктор мом, септолете — средства от боли в горле и кашля",
  "Супрастин — таблетки/ампулы от аллергии",
];
const list2 = [
  "Смекта — отравление, диарея",
  "Валкордин — сердечная боль",
  "Пантенол — спрей/мазь при ожогах",
  "Драмина — при укачивании",
  "Йод",
  "Хлоргексидин / перекись — для дезинфекции ран",
];

export const Medicine: FC = () => {
  return (
    <section className="pt-16 md:pt-[100px]">
      <div className="container">
        <div className="overlay">
          <SectionTitle
            icon="/assets/tour/gala/icons/medicine.svg"
            title="Аптечка"
          />
          <div className="flex flex-wrap -mx-4">
            <CheckboxUI.BlockList
              list={list1}
              name="medicineGaloTour1"
              className="basis-full md:basis-1/2 px-4"
            />
            <CheckboxUI.BlockList
              list={list2}
              name="medicineGaloTour2"
              className="basis-full md:basis-1/2 px-4"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
