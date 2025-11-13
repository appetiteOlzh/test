import { FC, ReactNode } from "react";
import cn from "classnames";
import s from "./style.module.css";
import { twMerge } from "tailwind-merge";

export const Tag: FC<{
  children: ReactNode;
  href: string;
  style?: "silver" | "gold" | "silver-nocontent" | "gold-nocontent";
  className?: string;
}> = ({ children, href, style = "silver", className }) => {
  return (
    <a
      href={href}
      className={twMerge(
        cn(
          "rounded-2xl overflow-hidden mb-9 inline-flex",
          style.startsWith("gold") ? s.tagGold : s.tag,
          className
        )
      )}
    >
      <div
        className={twMerge(
          cn(
            "px-5 py-3 w-full h-full flex flex-col content-between",
            style === "gold"
              ? s.contentGold
              : style.endsWith("nocontent")
              ? "bg-background relative z-10 rounded-2xl"
              : s.content
          )
        )}
      >
        {children}
      </div>
    </a>
  );
};
