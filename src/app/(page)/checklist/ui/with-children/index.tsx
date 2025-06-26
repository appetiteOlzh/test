import Image from "next/image";
import { FC } from "react";
import { CheckboxUI } from "@/shared/ui";

const list = [
  "Свидетельство о рождении",
  "Доверенность на ребенка",
  "Любимые игрушки",
  "Книжки, раскраски, карандаши",
  "Нарукавики для плавания",
  "Памперсы в самолет",
  "Влажные салфетки",
  "Скачать мультики",
  "Создайте отдельный детский альбом в MonClips",
];

export const WithChildren: FC = () => {
  return (
    <section className="pt-16 md:pt-[100px]">
      <div className="max-w-[1270px] mx-auto px-4">
        <h2 className="text-xl md:text-4xl font-bold font-apple md:mb-8 mb-4 uppercase text-yellow-darker">
          Если вы с детьми
        </h2>
        <div className="flex flex-wrap flex-row-reverse -mx-4">
          <div className="basis-full lg:basis-1/2 md:basis-5/12 px-4 mb-9 md:mb-0">
            <CheckboxUI.BlockList list={list} name="mostImportant" />
          </div>
          <div className="basis-full lg:basis-1/2 md:basis-7/12 px-4">
            <Image
              src="/assets/img/checklist/with-children.png"
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
