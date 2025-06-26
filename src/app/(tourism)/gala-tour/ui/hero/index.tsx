import { FC } from "react";

export const Hero: FC = () => {
  return (
    <section
      className="relative min-h-screen py-[154px] bg-cover"
      style={{
        backgroundImage: "url('/assets/tour/gala/hero-background.png')",
      }}
      id="hero"
    >
      <div className="flex flex-wrap items-center z-20">
        <div className="container">
          <h1 className="text-h1-clamp mb-8">
            Чек-лист <br />
            путешественника
          </h1>
          <a href="#checklist">
            <svg
              width="32"
              height="32"
              viewBox="0 0 32 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M16 5V27"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M7 18L16 27L25 18"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};
