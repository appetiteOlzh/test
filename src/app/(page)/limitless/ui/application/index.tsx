import Image from "next/image";
import { FC } from "react";

export const Application: FC = () => {
  return (
    <section className="pt-[140px]">
      <div className="max-w-[1062px] mx-auto px-4">
        <div className="flex flex-wrap items-center flex-row-reverse">
          <div className="lg:basis-3/5 md:basis-7/12 basis-full md:pl-8 text-[#B9B9B9]">
            <div className="mb-14 md:mb-12 max-w-[424px]">
              <h4 className="font-apple md:text-2xl text-xl mb-3 uppercase text-white">
                Больше, чем галерея
              </h4>
              <p className="text-lg md:text-2xl mb-3 !leading-tight">
                В MonClips ты можешь обсудить фото с подругой: включи{" "}
                <span className="text-yellow-darker">приватный чат</span>
              </p>
              <p className="text-lg md:text-2xl mb-3 !leading-tight">
                Добавь фильтры, обложки, подписи
              </p>
              <p className="text-lg md:text-2xl !leading-tight">
                Всё для того, чтобы память была не просто сохранена —{" "}
                <span className="text-yellow-darker">а оформлена</span>
              </p>
            </div>
            <div className="mb-12 md:mb-0">
              <h4 className="font-apple md:text-2xl text-xl mb-3 uppercase text-white">
                И только для тебя
              </h4>
              <p className="text-lg md:text-2xl mb-3 !leading-tight">
                Мы не смотрим твои фото
              </p>
              <p className="text-lg md:text-2xl mb-3 !leading-tight">
                Не показываем рекламу
              </p>
              <p className="text-lg md:text-2xl mb-3 !leading-tight">
                Не передаём данные
              </p>
              <p className="text-lg md:text-2xl mb-3 !leading-tight">
                <span className="text-yellow-darker">
                  Всё, что ты сохраняешь — остаётся только твоим
                </span>
              </p>
              <p className="text-lg md:text-2xl !leading-tight">
                Спокойно. Уверенно. Надёжно
              </p>
            </div>
          </div>
          <div className="lg:basis-2/5 md:basis-5/12 basis-full">
            <Image
              src="/assets/img/limitless/iphone-app.png"
              width={321}
              height={661}
              alt=""
              className="block mx-auto sm:max-w-full max-w-[60%]"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
