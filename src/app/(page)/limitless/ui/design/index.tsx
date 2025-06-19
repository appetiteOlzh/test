import Image from "next/image";
import { FC } from "react";

export const Design: FC = () => {
  return (
    <section id="unordinary" className="md:pt-[120px] pt-[180px]">
      <div className="max-w-[1270px] mx-auto px-4">
        <div className="premium-overlay lg:!p-20 !py-16 !px-2">
          <div className="flex flex-wrap text-center md:text-left">
            <div className="basis-full md:basis-1/2 min-h-full flex flex-wrap content-justify mb-9 md:mb-0">
              <div className="w-full">
                <h2 className="text-2xl md:text-4xl lg:text-5xl font-black uppercase font-apple mb-6 !leading-tight">
                  Дизайн, которому <br />
                  <span className="text-yellow-darker">хочется доверять</span>
                </h2>
                <p className="text-xl md:text-2xl leading-tight">
                  MonClips создан с любовью к деталям.{" "}
                  <br className="hidden sm:block" />
                  Каждая папка — как ювелирная шкатулка.{" "}
                  <br className="hidden sm:block" />
                  Только твоя.
                </p>
              </div>
            </div>
            <div className="basis-full md:basis-1/2">
              <div className="xl:-my-[60px] xl:-mr-[60px] text-center">
                <div className="relative inline-flex phone-glow z-10">
                  <Image
                    src="/assets/img/limitless/iphone-design.png"
                    width={318}
                    height={654}
                    alt="iPhone 15 Pro max"
                    title="Your video"
                    className="block"
                  />
                  <div className="absolute top-1/2 left-full scale-75 md:scale-100 md:translate-x-6 -translate-x-20 -translate-y-1/2 -z-10">
                    <Image
                      src="/assets/img/limitless/iphone-design-2.png"
                      width={286}
                      height={589}
                      alt="iPhone 15 Pro max"
                      title="Your video list"
                      className="block max-w-none"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
