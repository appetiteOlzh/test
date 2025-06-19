"use client";
import { FC, ReactNode } from "react";
import cn from "classnames";
import { useInViewAnimate } from "./hook";

export const AnimateOnScroll: FC<{
  children: ReactNode;
  className?: string;
  threshold?: number;
}> = ({ children, className, threshold }) => {
  const { ref, isVisible } = useInViewAnimate(threshold);

  return (
    <div ref={ref} className={cn({ animate: isVisible }, className)}>
      {children}
    </div>
  );
};
