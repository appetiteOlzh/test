import { FC, ReactNode } from "react";
import cn from "classnames";
import { twMerge } from "tailwind-merge";
import Image from "next/image";
import { CheckIcon } from "../check-icon";

type Props = {
  className?: string;
  children: ReactNode;
  isChecked: boolean;
  index: number;
  icon: string;
};
export const Card: FC<Props> = ({
  className = "",
  children,
  isChecked,
  index,
  icon,
}) => {
  return (
    <div
      className={twMerge(
        cn(
          `relative md:py-9 md:pl-20 md:pr-6 py-6 pl-4 pr-14 cursor-pointer bg-[#202020] rounded-3xl md:rounded-[2.25rem]`,
          className
        )
      )}
      data-index={index}
    >
      <div
        className={cn(
          "w-8 h-8 rounded-lg border-2 text-white flex items-center justify-center pointer-events-none absolute md:left-6 md:top-9 top-6 right-4",
          {
            "border-white": !isChecked,
            "border-yellow-darker bg-yellow-darker": isChecked,
          }
        )}
      >
        {isChecked ? <CheckIcon /> : ""}
      </div>

      <div className="flex-1 min-w-0 md:text-2xl text-lg pointer-events-none">
        <Image
          src={icon}
          width={64}
          height={64}
          alt=""
          className="block mb-4 user-select-none"
        />
        {children}
      </div>
    </div>
  );
};
