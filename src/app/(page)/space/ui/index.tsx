import { FC } from "react";
import main from "./main.gif";
import Image from "next/image";
import { AppOpener } from "@/features/app-opener";
import { useTranslations } from "next-intl";

export const Hero: FC = () => {
  const t = useTranslations();

  return (
    <section id="space" className="pt-36 pb-16">
      <div className="container">
        <div className="flex flex-wrap items-center flex-row-reverse text-center md:text-left">
          <div className="basis-full md:basis-5/12">
            <h1 className="text-h1-mon heading text-yellow-darker mb-6 text-balance md:hidden">
              {t("Space.title")}
            </h1>
            <div className="relative max-w-[320px] ml-auto mr-auto md:mr-10">
              <div
                className="absolute top-0 left-0 right-0 bottom-0 pointer-events-none  z-20 bg-[url('/assets/img/application/phone-wrapper.png')]"
                style={{ backgroundSize: "100% 100%" }}
              ></div>
              <div className="w-full px-2.5 overflow-hidden mb-12 md:mb-0">
                <Image src={main} alt="main" className="h-full rounded-4xl" />
              </div>
            </div>
          </div>
          <div className="basis-full md:basis-7/12">
            <h1 className="text-h1-mon heading text-yellow-darker mb-6 text-balance hidden md:block">
              {t("Space.title")}
            </h1>
            <div className="mb-9 !leading-normal font-bold text-lg md:text-2xl">
              <p>
                <Image
                  src={"/assets/icons/space/camera.png"}
                  width={24}
                  height={24}
                  alt="📸"
                  className="inline-flex bg-center pb-2"
                  unoptimized
                />{" "}
                {t("Space.list.camera")}
              </p>
              <p>
                <Image
                  src={"/assets/icons/space/smile.png"}
                  width={24}
                  height={24}
                  alt="😊"
                  className="inline-flex bg-center pb-2"
                  unoptimized
                />{" "}
                {t("Space.list.smile")}
              </p>
              <p>
                <Image
                  src={"/assets/icons/space/moments.png"}
                  width={24}
                  height={24}
                  alt="✨"
                  className="inline-flex bg-center pb-2"
                  unoptimized
                />{" "}
                {t("Space.list.moments")}
              </p>
            </div>
            <AppOpener
              buttonText={t("Space.button")}
              className="rounded-full md:w-60 w-full block text-center"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
