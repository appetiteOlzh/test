import cn from "classnames";
// import arrow from "/public/assets/img/arrow-down.svg";
import { AppStoreButton } from "@/shared/ui/button-apps/apple-store";
import { GoogleplayButton } from "@/shared/ui/button-apps/googleplay";
import s from "./styles.module.css";

export const Hero = ({
  title,
  description,
}: {
  title: string;
  description?: string;
}) => {
  return (
    <section
      id={s.hero}
      className={cn("flex md:items-center items-end relative pb-20")}
    >
      <video
        src="/assets/video/video.mp4"
        playsInline
        loop
        muted
        autoPlay
        className="landscape:hidden portrait:block absolute top-0 left-0 object-cover object-center w-full h-full"
      ></video>
      <div className="container mx-auto px-4">
        <div className="relative z-20">
          <h1
            className={cn(
              "mb-3 gradient-text uppercase md:text-left text-center font-title",
              s["h1-alt-2"]
            )}
            dangerouslySetInnerHTML={{ __html: title }}
          ></h1>
          {description ? (
            <div className="mx-auto md:ml-0 md:relative max-w-[470px]">
              <p
                className="text-white md:text-standart text-[1.125rem] mb-6 text-center md:text-left"
                dangerouslySetInnerHTML={{ __html: description }}
              ></p>
            </div>
          ) : null}
          <div className="flex flex-wrap justify-center md:justify-start -mx-3">
            <div className="basis-auto mb-4 lg:mb-0 px-3">
              <GoogleplayButton />
            </div>
            <div className="basis-auto mb-4 lg:mb-0 px-3">
              <AppStoreButton />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
