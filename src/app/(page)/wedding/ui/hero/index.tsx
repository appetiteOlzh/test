import { FC } from "react";
import { AppOpener } from "@/features/app-opener";

export const Hero: FC = () => {
  return (
    <section
      className="relative overflow-hidden before:absolute before:bottom-0 before:left-0 before:w-full before:h-full before:bg-gradient-to-r before:from-[#0C0C0C] before:via-transparent before:to-transparent bg-[#0C0C0C] bg-right 2xl:bg-center"
      style={{
        backgroundImage: "url(/assets/img/wedding/hero.png)",
        backgroundSize: "cover",
      }}
    >
      <div className="w-full container">
        <div className="flex flex-wrap md:h-auto h-dvh min-h-[480px] md:items-center items-end md:pt-[300px] md:pb-[300px] pb-10">
          <div className="basis-full xl:basis-7/12 lg:basis-8/12 lg:pb-16 flex flex-col flex-wrap relative z-10">
            <p className="text-lg md:text-2xl mb-8 font-bold">
              Wedding = one day, so many guests, countless moments
            </p>
            <h1 className="text-h1-wed text-yellow-darker font-black font-apple mb-4 text-balance">
              MonClips = one real-time album that brings them all together
            </h1>
            <p className="text-lg md:text-2xl mb-10 font-bold">
              One QR code. One shared memory.
            </p>
            <AppOpener
              buttonText="Create your wedding album"
              className="rounded-full w-full md:w-[300px] py-[22px] text-center"
              eventName="wedding_hero_popup"
              eventNameGoogleplay="wedding_hero_googleplay"
              eventNameAppstore="wedding_hero_appstore"
            />
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 w-full h-[128px] bg-gradient-to-b from-transparent to-[#0C0C0C]/90"></div>
    </section>
  );
};
/* Rectangle 41218 */
