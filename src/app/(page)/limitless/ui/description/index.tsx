import React from "react";
import { useTranslations } from "next-intl";

export const DescriptionSection: React.FC = () => {
  const t = useTranslations("Unlimited.dubai");

  return (
    <section id="description" className="md:pt-[180px] pt-20">
      <div className="max-w-[1080px] px-4 mx-auto">
        <h2
          className="text-2xl md:text-4xl lg:text-5xl mb-8 font-apple font-black uppercase text-center text-yellow-darker"
          dangerouslySetInnerHTML={{ __html: t.raw("title") }}
        ></h2>
        <p
          className="text-center text-xl md:text-2xl"
          dangerouslySetInnerHTML={{ __html: t.raw("description") }}
        ></p>
      </div>
    </section>
  );
};
