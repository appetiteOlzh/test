import { FC } from "react";
import cn from "classnames";
import { Tag } from "../tag";

import s from "../style.module.css";

export const Mission: FC = () => {
  return (
    <section id="mission" className="pt-[100px]">
      <div className="container">
        <div className="p-6 lg:p-10 rounded-[36px] overflow-hidden relative">
          <Tag href="#mission">Миссия</Tag>
          <div className="flex flex-wrap mb-12">
            <div className="md:basis-7/12 basis-full">
              <h2 className="text-h2-mon font-apple font-black mb-4 uppercase">
                Вернуть человеку уважение <br />к собственной жизни
              </h2>
              <p className="text-desc-mon max-w-[527px]">
                В мире, где нас учат постоянно сравнивать, <br />
                <span className="text-yellow-darker">
                  MonClips напоминает: твоя жизнь — не хуже, не лучше, просто
                  твоя. И в этом её красота.
                </span>
              </p>
            </div>
            <div className="md:basis-5/12 basis-full pt-5">
              <p className="md:text-lg max-w-[484px] !leading-tight">
                Каждый день мы видим тысячи фото других людей, но почти не
                замечаем своих. Мы забываем, как выглядели моменты, ради которых
                всё стоило. MonClips создан, чтобы это исправить. Это не просто
                галерея. Это{" "}
                <span className="text-yellow-darker">
                  маленький ежедневный ритуал счастья — 10 свайпов по своим
                  воспоминаниям
                </span>
                , которые меняют настроение лучше любого кофе.
              </p>
            </div>
          </div>
          <div className="rounded-[36px] overflow-hidden h-[400px]">
            <div
              style={{
                backgroundImage: "url(/assets/img/monclips/mission.png)",
              }}
              className="h-[400px] w-full bg-cover xs:bg-center bg-[40%_50%]"
            ></div>
          </div>
          <div
            className={cn(
              "absolute top-1/2 left-0 -translate-x-1/2 -translate-y-1/2 w-[802px] h-[802px] -z-10",
              s.eclipse
            )}
          ></div>
          <div
            className={cn(
              "absolute top-0 right-0 translate-x-1/2 w-[252px] h-[252px] -z-10",
              s.eclipse
            )}
          ></div>
        </div>
      </div>
    </section>
  );
};
