import { FC } from "react";
import { AppOpener } from "@/features/app-opener";
import { useTranslations } from "next-intl";

export const TryIt: FC = () => {
  const t_common = useTranslations("common");
  const t = useTranslations("Cooking.tryIt");

  return (
    <section className="section mb-[110px]">
      <div className="container text-center">
        <h2
          className="text-yellow-darker text-h1-clamp mb-6 heading text-balance"
          dangerouslySetInnerHTML={{ __html: t.raw("title") }}
        ></h2>
        <p
          className="text-h4-clamp mb-14 text-balance text-[#B9B9B9]"
          dangerouslySetInnerHTML={{ __html: t.raw("description") }}
        ></p>
        <div className="flex justify-center">
          <AppOpener
            buttonText={t_common("start_now")}
            className="w-full sm:w-80 mx-auto rounded-full"
          />
        </div>
      </div>
    </section>
  );
};
