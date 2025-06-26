import { FC } from "react";
import { CheckboxUI } from "@/shared/ui";
import { SectionTitle } from "../atoms";

const list1 = [
  "Свидетельство о рождении",
  "Нотариально заверенная доверенность",
  "Любимые игрушки малыша",
  "Книги, раскраски и карандаши",
  "Нарукавники / круги для плавания",
];
const list2 = [
  "Подгузники для полета",
  "Влажные салфетки",
  "Скачать мультики",
  "Создайте отдельный детский альбом в MonClips Gallery",
];

export const WithChildren: FC = () => {
  return (
    <section className="pt-16 md:pt-[100px]">
      <div className="max-w-[1270px] mx-auto px-4">
        <div
          className="overlay"
          style={{
            backgroundImage: "url('/assets/tour/gala/with-children.png')",
          }}
        >
          <SectionTitle
            icon="/assets/tour/gala/icons/children.svg"
            title="Путешествуете с детьми"
          />
          <div className="flex flex-wrap item-center -mx-4">
            <div className="basis-full md:basis-1/2 px-4">
              <CheckboxUI.BlockList list={list1} name="withChildrenGaloTour1" />
            </div>
            <div className="basis-full md:basis-1/2 px-4">
              <CheckboxUI.BlockList list={list2} name="withChildrenGaloTour1" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
