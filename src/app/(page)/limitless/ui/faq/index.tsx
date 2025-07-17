import { AccordionItem } from "@/shared/ui";
import { useTranslations } from "next-intl";
import React from "react";

export const Faq: React.FC = () => {
  const t = useTranslations("Unlimited.faq");

  const faqList = t.raw("questions") as {
    question: string;
    answer: string;
  }[];

  return (
    <section id="faq" className="md:pt-[180px] pt-20">
      <div className="max-w-[74.5rem] px-4 mx-auto">
        <h2
          className="text-h1-clamp font-apple font-black md:mb-14 mb-6 md:text-center uppercase text-balance"
          dangerouslySetInnerHTML={{ __html: t.raw("title") }}
        ></h2>
      </div>
      <div className="w-full max-w-3xl mx-auto px-4">
        {Array.isArray(faqList) &&
          faqList.map((item, index) => (
            <div key={index}>
              <AccordionItem title={item.question}>{item.answer}</AccordionItem>
            </div>
          ))}
      </div>
    </section>
  );
};
