import { AppOpener } from "@/features/app-opener";
import Image from "next/image";

export const FinalSection = () => {
  return (
    <section className="py-36">
      <div className="container">
        <div className="flex flex-wrap flex-row-reverse items-center">
          <div className="basis-full md:basis-1/2 md:pl-8 mb-14 md:mb-0 text-center md:text-left">
            <h2 className="text-h2-wed text-yellow-darker font-black font-apple mb-8 md:mb-4">
              Bring every moment together
            </h2>
            <p className="text-desc-mon font-bold mb-8">
              Create one real-time album for your wedding day.
            </p>
            <AppOpener
              buttonText="Create your wedding album"
              className="rounded-full w-full md:w-[300px] py-[22px] text-center"
              eventName="wedding_final_popup"
              eventNameGoogleplay="wedding_final_googleplay"
              eventNameAppstore="wedding_final_appstore"
            />
          </div>
          <div className="basis-full md:basis-1/2 md:pr-7">
            <div className="relative before:absolute before:bottom-0 before:left-0 before:w-full before:h-full before:bg-gradient-to-r before:from-[#0C0C0C] before:via-transparent before:to-transparent md:after:absolute md:after:top-0 md:after:right-0 md:after:w-full md:after:h-full md:after:bg-gradient-to-l md:after:from-[#0C0C0C] md:after:via-transparent md:after:to-transparent">
              <Image
                src="/assets/img/wedding/final.png"
                alt=""
                width={1097}
                height={808}
                className="w-full h-[404px] object-cover object-left"
              />
              <div className="absolute top-0 left-0 w-44 h-full flex flex-col justify-around">
                <div className="w-full text-center px-3.5 md:text-xl text-balance">
                  <Image
                    src="/assets/icons/wedding/qrCode.svg"
                    alt=""
                    width={32}
                    height={32}
                    className="mb-3 mx-auto"
                  />
                  One QR code
                </div>
                <div className="w-full text-center px-3.5 md:text-xl text-balance">
                  <Image
                    src="/assets/icons/wedding/linkSimple.svg"
                    alt=""
                    width={32}
                    height={32}
                    className="mb-3 mx-auto"
                  />
                  One link
                </div>
                <div className="w-full text-center px-3.5 md:text-xl text-balance">
                  <Image
                    src="/assets/icons/wedding/heart.svg"
                    alt=""
                    width={32}
                    height={32}
                    className="mb-3 mx-auto"
                  />
                  One place for every memory
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
