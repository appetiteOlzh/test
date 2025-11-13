import { FC } from "react";
import { Tag } from "../tag";

export const Idea: FC = () => {
  return (
    <section id="idea" className="pt-15">
      <div className="container">
        <div className="p-6 md:p-10 rounded-[36px] overflow-hidden">
          <h2 className="text-h2-mon uppercase font-black font-apple text-balance mb-6">
            Так родилась идея{" "}
            <span className="text-yellow-darker">
              MonClips — приложения, которое не требует ничего
            </span>
          </h2>
          <p className="md:text-lg text-balance mb-8">
            Оно просто берёт твои фото и показывает их одно за другим. Без
            фильтров, без лайков, без алгоритмов. Просто ты и твои воспоминания.
            Сначала это была личная игрушка. Но вскоре люди начали писать:
          </p>
          <div className="flex flex-wrap -mx-3 mb-4">
            <div className="md:basis-[30%] basis-full mb-4 min-w-0 px-3">
              <Tag className="mb-0" style="gold" href="#idea">
                Я впервые за долгое время почувствовала благодарность
              </Tag>
            </div>
            <div className="md:basis-[30%] basis-full mb-4 min-w-0 px-3">
              <Tag className="mb-0" style="gold" href="#idea">
                Я вспомнил моменты, которые уже стёрлись из памяти
              </Tag>
            </div>
            <div className="md:basis-[40%] basis-full mb-4 min-w-0 px-3">
              <Tag className="mb-0" style="gold" href="#idea">
                Я понял, что у меня нормальная, счастливая жизнь — просто я её
                не замечал
              </Tag>
            </div>
          </div>
          <p className="md:text-lg text-balance">
            MonClips превратился в инструмент, который возвращает человеку его
            жизнь
          </p>
        </div>
      </div>
    </section>
  );
};
