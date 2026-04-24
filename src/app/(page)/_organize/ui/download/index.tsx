import { FC } from "react";
import { AppStoreButton, GoogleplayButton } from "@/shared/ui";

export const Download: FC = () => {
  return (
    <section
      id="download"
      className="pt-10 md:pt-[60px] pb-20 overflow-hidden relative"
    >
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[200%] h-[200%] bg-gradient-to-br from-[#101010] via-[#0C0C0C] to-[#0C0C0C]" />
      <div className="container  py-[90px]">
        <div className="max-w-[580px] mx-auto text-center relative z-10">
          <h2 className="text-h2-clamp text-yellow-darker font-black font-apple mb-3 uppercase">
            Пора использовать это в своей работе
          </h2>
          <p className="mb-9 text-base md:text-lg">
            Скачайте MonClips и попробуйте на ближайшем мероприятии. <br />
            Ссылки на AppStore и Google Play Market
          </p>
          <div className="flex flex-wrap -mx-2.5 justify-center">
            <div className="basis-[168px] px-2.5">
              <GoogleplayButton />
            </div>
            <div className="basis-[168px] px-2.5">
              <AppStoreButton />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
