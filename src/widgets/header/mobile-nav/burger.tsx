"use client";
import { FC } from "react";
import cn from "classnames";

export const Burger: FC<{ onClick: () => void; isOpen: boolean }> = ({
  onClick,
  isOpen,
}) => {
  return (
    <button
      onClick={onClick}
      type="button"
      className="w-[30px] h-[30px] p-[5px] border-none md:hidden"
    >
      <span
        className={cn(
          "block w-5 h-0.5 bg-white rounded-full mb-1 transition-transform",
          {
            "translate-y-1.5 rotate-45": isOpen,
          }
        )}
      ></span>
      <span
        className={cn(
          "block w-5 h-0.5 bg-white rounded-full mb-1 transition-transform",
          {
            "opacity-0": isOpen,
          }
        )}
      ></span>
      <span
        className={cn(
          "block h-0.5 bg-white rounded-full ml-auto transition-transform",
          {
            "-translate-y-1.5 -rotate-45 w-5": isOpen,
            "w-3": !isOpen,
          }
        )}
      ></span>
    </button>
  );
};
