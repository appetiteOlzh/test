import { useTranslations } from "next-intl";
import { FC, ReactNode } from "react";

export const Category: FC<CategoryProps & { children: ReactNode }> = ({
  title,
  children,
}) => {
  const t = useTranslations("Sharing");

  return (
    <div className="container mx-auto px-4">
      <h1 className="font-secondary font-bold md:text-3xl text-base md:py-6 pb-4">
        <span className="gradient-text">
          {t("folder")}: {title}
        </span>
      </h1>
      {children}
    </div>
  );
};
