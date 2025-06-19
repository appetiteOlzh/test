"use client";
import { FC, ReactNode } from "react";
import cn from "classnames";

type Props = {
  children: ReactNode;
  onClick: () => void;
  isActive: boolean;
};

export const TabNavItem: FC<Props> = ({ children, onClick, isActive }) => {
  return (
    <button
      type="button"
      onClick={onClick}
      className="bg-gradient-to-br from-[#018C6E] via-[#014F42] to-[#035846] p-px uppercase rounded-full overflow-hidden"
      disabled={isActive}
    >
      <div
        className={cn("px-14 py-5 rounded-full", {
          "bg-[#181818] text-white": !isActive,
          "bg-transparent text-yellow": isActive,
        })}
      >
        {children}
      </div>
    </button>
  );
};
