import { FC } from "react";
import { AppOpener } from "@/features/app-opener";
import { useTranslations } from "next-intl";

export const TryIt: FC = () => {
  const t_common = useTranslations("common");
  const t = useTranslations("Unlimited.tryIt");

  return (
    <section className="pt-[160px] pb-[148px]">
      <div className="max-w-[1080px] mx-auto px-4 text-center">
        <h2
          className="text-yellow-darker text-2xl md:text-4xl lg:text-5xl mb-6 font-apple font-black uppercase text-balance"
          dangerouslySetInnerHTML={{ __html: t.raw("title") }}
        ></h2>
        <p
          className="text-lg md:text-2xl leading-tight mb-14 text-balance text-[#B9B9B9]"
          dangerouslySetInnerHTML={{ __html: t.raw("description") }}
        ></p>
        <div className="flex justify-center">
          {/* <SendApplicationButton /> */}
          <AppOpener buttonText={t_common("free_download")} />
        </div>
      </div>
    </section>
  );
};
