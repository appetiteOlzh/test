import { useTranslations } from "next-intl";
import React, { FC } from "react";

export const Benefits: React.FC = () => {
  const t = useTranslations("Unlimited.benefits");
  const listArr = Array.from({ length: 6 });

  return (
    <section id="benefits" className="md:pt-[120px] pt-[180px]">
      <div className="container mx-auto px-4">
        <h2
          className="text-h1-clamp font-apple font-black mb-9 uppercase text-center"
          dangerouslySetInnerHTML={{ __html: t.raw("title") }}
        ></h2>
        <div className="flex flex-wrap -mx-2.5 -mb-4">
          {listArr.map((_, index) => (
            <div
              className="basis-full md:basis-1/2 xl:basis-1/3 px-2.5 mb-4"
              key={index}
            >
              <Card title={t(`list.${index}`)} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Card: FC<{ title: string }> = (props) => {
  const { title } = props;

  return (
    <div className="p-[30px] rounded-2xl lg:rounded-[2.25rem] border border-[#434343] bg-[#333] h-full flex flex-wrap content-between">
      <div className="mb-6 basis-full">
        <h4 className="font-apple font-black text-xl md:text-2xl uppercase text-balance text-yellow-darker">
          {title}
        </h4>
      </div>
    </div>
  );
};
