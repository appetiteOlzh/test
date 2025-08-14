import { useTranslations } from "next-intl";
import Image from "next/image";
import { FC } from "react";

export const Organizer: FC = () => {
  const t = useTranslations("Cooking.organizer");
  const list = t.raw("description") as string[];

  return (
    <section className="section">
      <div className="container">
        <div className="premium-overlay -mx-4 md:mx-0">
          <div className="flex flex-wrap">
            <div className="basis-full md:basis-7/12 mb-12 md:mb-0 lg:p-10 min-w-0">
              <p className="text-h4-clamp mb-3">{t("subtitle")}</p>
              <h2
                className="text-h2-clamp heading mb-4"
                dangerouslySetInnerHTML={{ __html: t.raw("title") }}
              ></h2>
              <ul className="list-disc pl-8 max-w-[486px]">
                {list.map((item, index) => (
                  <li
                    key={index}
                    className="text-h4-clamp"
                    dangerouslySetInnerHTML={{ __html: item }}
                  ></li>
                ))}
              </ul>
            </div>
            <div className="basis-full md:basis-5/12 min-w-0 text-center md:text-left">
              <div className="relative inline-flex phone-glow z-10">
                <Image
                  src={`/assets/img/cooking/organizer-phone.png`}
                  width={318}
                  height={654}
                  alt=""
                  className="md:mr-0 mx-auto -mt-[52%] translate-y-1/4 md:mt-0 md:translate-y-0"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
