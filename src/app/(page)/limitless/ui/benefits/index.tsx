import { useTranslations } from "next-intl";
import React, { FC } from "react";

export const Benefits: React.FC = () => {
  const t = useTranslations("Unlimited");

  return (
    <section id="benefits" className="md:pt-[120px] pt-[180px]">
      <div className="container mx-auto px-4">
        <h2
          className="text-h1-clamp font-apple font-black mb-9 uppercase text-center"
          dangerouslySetInnerHTML={{ __html: t.raw("benefits.title") }}
        ></h2>
        <div className="flex flex-wrap -mx-2.5 -mb-4">
          <div className="basis-full md:basis-1/2 xl:basis-1/3 px-2.5 mb-4">
            <Card title="Unlimited cloud storage for photos" />
          </div>
          <div className="basis-full md:basis-1/2 xl:basis-1/3 px-2.5 mb-4">
            <Card title="2,000 free video uploads" />
          </div>
          <div className="basis-full md:basis-1/2 xl:basis-1/3 px-2.5 mb-4">
            <Card title="+50 videos for every friend you invite" />
          </div>
          <div className="basis-full md:basis-1/2 xl:basis-1/3 px-2.5 mb-4">
            <Card title="Beautiful shareable albums" />
          </div>
          <div className="basis-full md:basis-1/2 xl:basis-1/3 px-2.5 mb-4">
            <Card title="Notes, filters, comments" />
          </div>
          <div className="basis-full md:basis-1/2 xl:basis-1/3 px-2.5 mb-4">
            <Card title="Full privacy control" />
          </div>
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
      {/* <div className="mt-auto basis-full">
        <p className="text-light text-lg md:text-xl text-balance">
          {description}
        </p>
      </div> */}
    </div>
  );
};
