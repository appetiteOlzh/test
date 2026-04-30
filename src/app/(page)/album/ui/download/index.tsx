import { FC } from "react";
import cn from "clsx";
import { AppStoreButton, GoogleplayButton } from "@/shared/ui";

import s from "./style.module.css";

export const Download: FC = () => {
  return (
    <section
      id="download"
      className="pt-2.5 md:pt-[130px] md:pb-[110px] pb-[60px]"
    >
      <div className="container">
        <div className="rounded-[36px] overflow-hidden py-[90px] relative">
          <div
            className={cn(s.bgRadial, "absolute inset-0 pointer-events-none")}
          />
          <div className="max-w-[580px] mx-auto text-center relative z-10">
            <h2 className="text-h2-clamp text-yellow-darker font-black font-apple mb-3 uppercase">
              Пора использовать это в своей работе
            </h2>
            <p className="mb-9 text-base md:text-lg">
              Скачайте MonClips и попробуйте
            </p>
            <div className="flex flex-wrap -mx-2.5 justify-center">
              <div className="basis-[168px] px-2.5">
                <GoogleplayButton eventName="album_googleplay_download" />
              </div>
              <div className="basis-[168px] px-2.5">
                <AppStoreButton eventName="album_appstore_download" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
