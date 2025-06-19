"use client";

import { FC, useState } from "react";
import { Burger } from "./burger";
import { Nav } from "./mobile-nav-list";

export const MobileNav: FC<{
  navList: { href: string; title: string }[];
  noLocale?: boolean;
}> = ({ navList, noLocale }) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => {
    setIsOpen((prev) => !prev);
  };
  return (
    <>
      <Burger onClick={toggleMenu} isOpen={isOpen} />
      <Nav
        navList={navList}
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        noLocale={noLocale}
      />
    </>
  );
};
