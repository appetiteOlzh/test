import Image from "next/image";
import { FC } from "react";
import cn from "classnames";
import { Tag } from "../tag";
import s from "../style.module.css";

export const Goal: FC = () => {
  return (
    <section id="goal" className="pt-15">
      <div className="container">
        <div className="p-6 md:p-10 rounded-[36px] relative overflow-hidden">
          <Tag href="#goal" className="mb-6">
            Как работает MonClips
          </Tag>
          <h2 className="text-h2-mon uppercase text-yellow-darker font-black font-apple max-w-[805px] text-balance mb-4">
            Мы хотим, чтобы миллионы людей по всему миру вспоминали хорошее
          </h2>
          <p className="text-h4-clamp text-balance mb-9">
            MonClips — не соцсеть и не хранилище. <br />
            Это анти-депрессивное приложение без фильтров и лайков.
          </p>
          <div className="flex flex-wrap -mx-2.5 -mb-4">
            <div className="basis-1/3 mb-4 px-2.5">
              <Tag
                href="#goal"
                className="mb-0 h-full"
                style="silver-nocontent"
              >
                <Image
                  src="/assets/img/monclips/confetti.gif"
                  width={64}
                  height={64}
                  alt="confetti"
                  className="mb-6"
                />
                <h4 className="text-lg xl:text-xl font-black font-apple uppercase">
                  вернуть людям чувство радости от собственной жизни
                </h4>
              </Tag>
            </div>
            <div className="basis-1/3 mb-4 px-2.5">
              <Tag
                href="#goal"
                className="mb-0 h-full"
                style="silver-nocontent"
              >
                <Image
                  src="/assets/img/monclips/like.gif"
                  width={64}
                  height={64}
                  alt="confetti"
                  className="mb-6"
                />
                <h4 className="text-lg xl:text-xl font-black font-apple uppercase">
                  снизить тревогу сравнения
                </h4>
              </Tag>
            </div>
            <div className="basis-1/3 mb-4 px-2.5">
              <Tag
                href="#goal"
                className="mb-0 h-full"
                style="silver-nocontent"
              >
                <Image
                  src="/assets/img/monclips/baloon.gif"
                  width={64}
                  height={64}
                  alt="confetti"
                  className="mb-6"
                />
                <h4 className="text-lg xl:text-xl font-black font-apple uppercase">
                  создать новое ежедневное действие — “вспомнить хорошее”
                </h4>
              </Tag>
            </div>
          </div>
          <div className="mt-9">
            <div className="text-center">
              <p className="md:text-lg mb-4">
                Если каждый человек хотя бы раз в день посмотрит на свои фото и
                подумает:
              </p>
              <h4 className="text-h4-clamp font-apple font-black uppercase mb-4">
                “у меня ведь всё не так уж плохо”
              </h4>
              <p className="md:text-lg">мир станет чуть теплее.</p>
            </div>
          </div>
          <div
            className={cn(
              "absolute top-1/2 right-0 w-[506px] h-[870px] min-h-full translate-x-1/4 -translate-y-1/2",
              s.eclipse
            )}
          ></div>
        </div>
      </div>
    </section>
  );
};
