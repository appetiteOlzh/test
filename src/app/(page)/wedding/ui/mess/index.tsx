"use client";

import { useMobile } from "@/shared/lib/use-mobile";
import { MessMobile } from "./mess-mobile";
import { MessDesktop } from "./mess-desktop";

export const Mess = () => {
  const isMobile = useMobile();

  if (isMobile) {
    return <MessMobile />;
  }

  return <MessDesktop />;
};
