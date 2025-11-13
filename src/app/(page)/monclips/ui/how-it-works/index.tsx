import { FC } from "react";
import { Tag } from "../tag";
import cn from "classnames";
import s from "../style.module.css";

export const HowItWorks: FC = () => {
  return (
    <section id="how-it-works" className="pt-15">
      <div className="container">
        <div className="p-6 md:p-10 rounded-[36px] relative overflow-hidden">
          <div className="flex flex-wrap -mx-2 flex-row-reverse">
            <div className="basis-full md:basis-8/12 px-2 pb-2 md:pb-0">
              <div className="md:hidden block">
                <Tag href="#how-it-works">Как работает MonClips</Tag>
              </div>
              <Tag href="#how-it-works" className="block mb-4">
                <h3 className="text-lg md:text-xl font-black font-apple mb-2.5 uppercase">
                  1. Подключить галерею
                </h3>
                <p className="text-[#E3E3E3] tracking-wide">
                  Как Instagram или камера — всё просто
                </p>
              </Tag>
              <Tag href="#how-it-works" className="block mb-4">
                <h3 className="text-lg md:text-xl font-black font-apple mb-2.5 uppercase">
                  2. Свайпаешь фото
                </h3>
                <p className="text-[#E3E3E3] tracking-wide">
                  MonClips сам показывает случайные кадры, которые ты давно не
                  видел(а)
                </p>
              </Tag>
              <Tag href="#how-it-works" className="block mb-4">
                <h3 className="text-lg md:text-xl font-black font-apple mb-2.5 uppercase">
                  3. Без интернета, без регистрации
                </h3>
                <p className="text-[#E3E3E3] tracking-wide">
                  MonClips работает офлайн — даже в самолёте или где нет сети
                </p>
              </Tag>
              <Tag href="#how-it-works" className="block mb-4">
                <h3 className="text-lg md:text-xl font-black font-apple mb-2.5 uppercase">
                  4. 100% приватность
                </h3>
                <p className="text-[#E3E3E3] tracking-wide">
                  Все фото остаются только на твоём телефоне. Никто, кроме тебя,
                  их не видит.
                </p>
              </Tag>
              <Tag href="#how-it-works" className="block mb-4" style="gold">
                <h3 className="text-lg md:text-xl font-black font-apple mb-2.5 uppercase">
                  6. Вспоминаешь и улыбаешься
                </h3>
                <p className="text-[#E3E3E3] tracking-wide">
                  Иногда до слёз, иногда со смехом. Каждый свайп — маленький
                  укол ностальгии и радости
                </p>
              </Tag>
            </div>
            <div className="basis-full md:basis-4/12 px-2">
              <div className="md:pr-10">
                <div className="hidden md:block">
                  <Tag href="#how-it-works" className="mb-6">
                    Как работает MonClips
                  </Tag>
                </div>
                <div className="w-full xs:w-[260xp] max-w-full after:pb-[176.46%] after:block relative rounded-3xl overflow-hidden">
                  <video
                    src="/assets/img/monclips/how-it-works.mp4"
                    muted
                    autoPlay
                    loop
                    className="absolute left-0 top-1/2 -translate-y-1/2"
                  ></video>
                </div>
              </div>
            </div>
          </div>
          <div
            className={cn(
              "w-[606px] h-[378px] absolute top-0 left-0 -translate-x-1/2 -translate-y-1/2",
              s.eclipse
            )}
          ></div>
          <div
            className={cn(
              "w-[210px] h-[210px] absolute bottom-0 right-0 translate-x-1/2 translate-y-1/2",
              s.eclipse
            )}
          ></div>
        </div>
      </div>
    </section>
  );
};
