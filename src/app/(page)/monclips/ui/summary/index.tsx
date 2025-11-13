import { AppOpener } from "@/features/app-opener";
import { FC } from "react";

export const Summary: FC = () => {
  return (
    <section id="summary" className="md:py-[160px] pt-20 pb-[100px]">
      <div className="max-w-[988px] mx-auto px-4 md:text-center">
        <h2 className="text-h2-mon uppercase font-apple font-black text-balance mb-4">
          MonClips — маленькая миссия{" "}
          <span className="whitespace-nowrap">с большим</span> смыслом. Мы не
          делаем хайп.
        </h2>
        <p className="max-w-[620px] mb-9 mx-auto">
          Мы просто хотим, чтобы люди снова замечали свою жизнь. MonClips — это
          напоминание, что всё, что ты ищешь, у тебя уже есть.
        </p>
        <AppOpener
          buttonText="Скачать MonClips и вспомнить хорошее"
          className="rounded-full text-center inline-flex"
        />
      </div>
    </section>
  );
};
