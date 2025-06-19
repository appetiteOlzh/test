"use client";
import React, { useEffect } from "react";
import { usePathname, useSearchParams } from "next/navigation";
import Image from "next/image";

export const FacebookPixelEvents: React.FC = () => {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    import("react-facebook-pixel")
      .then((x) => x.default)
      .then((ReactPixel) => {
        ReactPixel.init("1002074714777370"); //don't forget to change this
        ReactPixel.pageView();
      });
  }, [pathname, searchParams]);

  return (
    <noscript>
      <Image
        alt="facebook pixel"
        height="1"
        width="1"
        style={{ display: "none" }}
        src="https://www.facebook.com/tr?id=1002074714777370&ev=PageView&noscript=1"
      />
    </noscript>
  );
};
