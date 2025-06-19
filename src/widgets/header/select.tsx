"use client";
import { useLocale } from "next-intl";
import { FC, useId } from "react";
import { changeLanguage } from "@/app/actions";
import { routing } from "@/shared/lib/i18n/routing";

export const Select: FC<{ onChange?: () => void }> = ({ onChange }) => {
  const locale = useLocale();
  const id = useId();
  return (
    <select
      name="lng"
      id={id}
      className="select foont-secondary text-standart text-white ml-auto bg-transparent border-none outline-none cursor-pointer"
      value={locale}
      onChange={(e) => {
        changeLanguage(e.target.value);
        if (onChange) onChange();
      }}
    >
      {routing.locales.map((v) => (
        <option
          key={v}
          value={v}
          label={v.toUpperCase()}
          className="text-accent"
        ></option>
      ))}
    </select>
  );
};
