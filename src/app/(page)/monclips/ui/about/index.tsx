import { FC } from "react";
import cn from "classnames";
import s from "./style.module.css";
import { Tag } from "../tag";

export const About: FC = () => {
  return (
    <section
      id="about"
      className={cn(
        "md:pt-[180px] pt-[100px] pb-[228px] md:pb-[190px]",
        s.about
      )}
    >
      <div className="max-w-[1080px] px-4 mx-auto relative md:text-center">
        <div className="flex flex-wrap md:justify-center">
          <Tag href="#about">О приложении</Tag>
        </div>
        <h2 className="text-h2-mon mb-8 uppercase font-black font-apple">
          <span className="text-yellow-darker">MonClips</span> — это новый
          способ вспомнить, как много хорошего уже есть в твоей жизни
        </h2>
        <p className="text-desc-clamp">
          Просто открываешь, свайпаешь — и улыбаешься своим воспоминаниям
        </p>
      </div>
    </section>
  );
};
