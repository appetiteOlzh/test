import { AppOpenerButton } from "@/features/app-opener/ui/button";
import { FC } from "react";

export const TryIt: FC = () => {
  return (
    <section className="pt-[160px] pb-[148px]">
      <div className="max-w-[1080px] mx-auto px-4 text-center">
        <h2 className="text-yellow-darker text-2xl md:text-4xl lg:text-5xl mb-6 font-apple font-black uppercase text-balance">
          Готовы попробовать?
        </h2>
        <p className="text-lg md:text-2xl leading-tight mb-14 text-balance text-[#B9B9B9]">
          MonClips Gallery — бесконечная память для твоих путешествий.{" "}
          <br className="md:block hidden" />
          Ты не обязана выбирать, что оставить. Сохрани всё. Просто. Красиво.
          Навсегда.
        </p>
        <div className="flex justify-center">
          <AppOpenerButton />
        </div>
      </div>
    </section>
  );
};
