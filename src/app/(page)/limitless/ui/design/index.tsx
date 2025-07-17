import { useLocale, useTranslations } from "next-intl";
import Image from "next/image";
import { FC } from "react";

export const Design: FC = () => {
  const t = useTranslations("Unlimited.design");
  const locale = useLocale();

  return (
    <section id="unordinary" className="md:pt-[180px] pt-20">
      <div className="max-w-[1270px] mx-auto px-4">
        <div className="flex flex-wrap flex-row-reverse">
          <div className="basis-full md:basis-1/2 min-h-full flex flex-wrap content-justify mb-9 md:mb-0">
            <div className="w-full">
              <h2
                className="text-2xl md:text-4xl lg:text-5xl font-black uppercase font-apple mb-6 !leading-tight"
                dangerouslySetInnerHTML={{ __html: t.raw("title") }}
              ></h2>
              <p
                className="text-xl md:text-2xl leading-tight"
                dangerouslySetInnerHTML={{ __html: t.raw("description") }}
              ></p>
            </div>
          </div>
          <div className="basis-full md:basis-1/2">
            <div className="xl:-my-[60px] xl:-mr-[60px] text-center">
              <div className="relative inline-flex phone-glow z-10">
                <Image
                  src={`/assets/img/limitless/iphone-design-2-${locale}.png`}
                  width={286}
                  height={589}
                  alt="iPhone 15 Pro max"
                  title="Your video"
                  className="block"
                  quality={100}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
