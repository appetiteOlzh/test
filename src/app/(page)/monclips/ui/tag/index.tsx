import { FC, ReactNode } from "react";
import cn from "classnames";
import s from "./style.module.css";
import { twMerge } from "tailwind-merge";

export const Tag: FC<{
  children: ReactNode;
  href: string;
  style?: "silver" | "gold";
  className?: string;
}> = ({ children, href, style = "silver", className }) => {
  return (
    <a
      href={href}
      className={twMerge(
        cn(
          "rounded-2xl overflow-hidden mb-9 inline-block",
          style === "gold" ? s.tagGold : s.tag,
          className
        )
      )}
    >
      <div
        className={cn(
          "px-5 py-3",
          style === "gold" ? s.contentGold : s.content
        )}
      >
        {children}
      </div>
    </a>
  );
};
