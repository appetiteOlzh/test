import { FC } from "react";
import cn from "classnames";
import { Tag } from "../tag";

import s from "./style.module.css";
import Image from "next/image";

export const History: FC = () => {
  return (
    <section id="history" className="pt-15">
      <div className="container">
        <div className="flex flex-wrap -mx-3">
          <div className="basis-full md:basis-8/12 lg:basis-8/12 xl:basis-9/12 px-3 mb-6">
            <div className="p-6 lg:p-10 rounded-[36px] overflow-hidden relative">
              <Tag href="#mission">История</Tag>
              <h2 className="text-h2-mon font-black font-apple mb-4 uppercase">
                MonClips появился не из бизнес-плана, а из личной боли
              </h2>
              <p className="md:text-lg !leading-tight mb-8">
                Телефон был переполнен фотографиями — семья, друзья, поездки,
                работа, скрины, рецепты. Но радости от них не было. Фотографии
                лежали как архив — мёртвые, забытые, спрятанные в бесконечный
                поток.
              </p>
              <p className="md:text-lg !leading-tight mb-4">
                Однажды пришла простая мысль:
              </p>
              <h3 className="text-lg md:text-xl font-black font-apple max-w-[600px] uppercase">
                “Почему я лучше помню лица из чужих сторис, чем собственную
                жизнь?”
              </h3>
              <div
                className={cn(
                  "absolute top-[154px] left-0 w-[820px] h-[820px] -z-10",
                  s.eclipse
                )}
              ></div>
            </div>
          </div>
          <div className="basis-full md:basis-4/12 lg:basis-4/12 xl:basis-3/12 px-3 mb-6 ">
            <Image
              src={"/assets/img/monclips/history.png"}
              alt=""
              width={397}
              height={445}
              className="h-full w-full object-cover rounded-[36px] overflow-hidden"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
