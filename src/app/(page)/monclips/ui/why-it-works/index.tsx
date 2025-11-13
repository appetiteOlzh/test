import { FC } from "react";
import cn from "classnames";
import { Tag } from "../tag";
import s from "../style.module.css";

export const WhyItWorks: FC = () => {
  return (
    <section id="why-it-works" className="pt-15">
      <div className="container">
        <div className="flex flex-wrap items-end">
          <div className="basis-full xl:basis-7/12 md:basis-8/12">
            <div className="p-6 md:p-10 rounded-[36px] relative overflow-hidden">
              <Tag href="#why-it-works" className="mb-6">
                Почему это работает
              </Tag>
              <h2 className="text-h2-mon uppercase font-black font-apple max-w-[805px] text-balance mb-4">
                Психологи и нейробиологи доказали:
              </h2>
              <p className="md:text-lg !leading-tight">
                Воспоминания активируют зоны мозга, отвечающие за дофамин и
                чувство благодарности.{" "}
                <span className="text-yellow-darker">
                  Когда мы пересматриваем свои счастливые моменты, мозг
                  буквально повторно проживает их.
                </span>{" "}
                Это снижает тревожность, повышает настроение и укрепляет
                самооценку.
              </p>

              <div
                className={cn(
                  "absolute top-1/2 left-0 w-[420px] h-[420px] -translate-x-1/2 -translate-y-1/2",
                  s.eclipse
                )}
              ></div>
            </div>
          </div>
          <div className="basis-full xl:basis-5/12 md:basis-4/12">
            <div className="md:py-10">
              <p className="text-lg !leading-tight mb-4">
                MonClips превращает это знание в привычку.
                <br />
                Не медитация, не мотивация, не коучинг. <br />
                Просто — свайпы по фото, и тебе становится лучше.
              </p>
              <h4 className="text-yellow-darker uppercase font-apple font-black text-xl !leading-tight">
                10 свайпов в день = <br />
                стабильный заряд радости.
              </h4>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
