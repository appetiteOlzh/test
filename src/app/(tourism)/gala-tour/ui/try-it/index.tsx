import Link from "next/link";
import { FC } from "react";

export const TryIt: FC = () => {
  return (
    <section className="py-16 md:py-[100px]">
      <div className="container">
        <div className="overlay md:text-center">
          <h2 className="text-h1-clamp mb-6 text-balance">
            Этот список — ваш личный навигатор перед поездкой
          </h2>
          <p className="description max-w-[880px] mx-auto mb-14">
            Завершите подготовку, закройте все пункты — и отправляйтесь
            навстречу новым эмоциям. Всё под контролем. Всё уже предусмотрено.
          </p>
          <Link href="#hero" className="btn">
            <svg
              width="25"
              height="24"
              viewBox="0 0 25 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12.5 20.25V3.75"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M5.75 10.5L12.5 3.75L19.25 10.5"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            Вернуться к началу
          </Link>
        </div>
      </div>
    </section>
  );
};
