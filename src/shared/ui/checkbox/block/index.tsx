import { FC, ReactNode } from "react";
import cn from "classnames";
import { twMerge } from "tailwind-merge";

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
      <div className="w-8 h-8 rounded-lg border-2 border-white text-white flex items-center justify-center pointer-events-none">
        {isChecked ? "✔" : ""}
      </div>
      <div className="flex-1 min-w-0 pl-4 md:text-2xl text-lg pointer-events-none">
        {children}
      </div>
    </div>
  );
};
