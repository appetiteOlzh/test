"use client";

import React from "react";
import Script from "next/script";
import { usePathname, useSearchParams } from "next/navigation";

// use only in Layout component
const GoogleAnalytics = ({
  strategy = "beforeInteractive",
}: {
  strategy?: "beforeInteractive";
}) => {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  return (
    <>
      <Script
        strategy={strategy}
        src={`https://www.googletagmanager.com/gtag/js?id=G-ZMWY92F4Z8`}
      />

      <Script id="" strategy={strategy}>
        {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-ZMWY92F4Z8', {
              page_path: '${`${pathname}?${searchParams}`}',
              });
          `}
      </Script>
    </>
  );
};

export default GoogleAnalytics;
