import { useTranslations } from "next-intl";
import { FC, ReactNode } from "react";
import { formatDate } from "@/shared/lib/format-date";
import { useLocale } from "next-intl";
import { Author } from "../author";

export const Category: FC<CategoryProps & { children: ReactNode }> = ({
  title,
  children,
  createdAt,
  author,
}) => {
  const t = useTranslations("Sharing");
  const locale = useLocale();
  const date = formatDate({ date: createdAt, locale });

  return (
    <div className="container mx-auto px-4">
      <div className="flex flex-col -mx-2.5">
        <Author author={author} />
        <div className="basis-full min-w-0 px-2.5 mb-8">
          <h1 className="font-secondary font-bold md:text-3xl text-base">
            {t("folder")}: {title}
          </h1>
          <p className="font-secondary md:text-xl text-sm">
            {t("date")}: {date}
          </p>
        </div>
        <div className="px-2.5 basis-full">{children}</div>
      </div>
    </div>
  );
};
