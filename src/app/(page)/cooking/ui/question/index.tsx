import { FC } from "react";
import { useTranslations } from "next-intl";

export const Question: FC = () => {
  const t = useTranslations("Cooking.question");
  const forUseInTw = ["lg:block"];

  return (
    <section className="section">
      <div className="container">
        <h2
          className="text-h1-clamp md:text-center heading max-w-[842px] mx-auto mb-6"
          dangerouslySetInnerHTML={{ __html: t.raw("title") }}
        ></h2>
        <p
          className="md:text-center text-h4-clamp max-w-3xl mx-auto "
          dangerouslySetInnerHTML={{ __html: t.raw("description") }}
        ></p>
      </div>
    </section>
  );
};
