import { FC, ReactNode } from "react";
import cn from "classnames";
import { twMerge } from "tailwind-merge";
import { CheckIcon } from "../check-icon";

type Props = {
  className?: string;
  children: ReactNode;
  isChecked: boolean;
  index: number;
};
export const Block: FC<Props> = ({
  className = "",
  children,
  isChecked,
  index,
}) => {
  return (
    <div
      className={twMerge(cn(`flex flex-wrap cursor-pointer`, className))}
      data-index={index}
    >
      <div
        className={cn(
          "w-8 h-8 rounded-lg border-2 flex items-center justify-center pointer-events-none",
          {
            "border-current": !isChecked,
            "border-[var(--secondary)] bg-[var(--secondary)] text-[var(--check)]":
              isChecked,
          }
        )}
      >
        {isChecked ? <CheckIcon /> : ""}
      </div>
      <div className="flex-1 min-w-0 pl-4 md:text-2xl text-lg pointer-events-none text-balance">
        {children}
      </div>
    </div>
  );
};
