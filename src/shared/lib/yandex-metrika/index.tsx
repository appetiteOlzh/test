"use client";

import { useEffect } from "react";
import { usePathname, useSearchParams } from "next/navigation";
import Image from "next/image";

export default function YandexMetrika() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    const url = `${pathname}?${searchParams}`;
    // @ts-expect-error global ym
    globalThis.ym(97423237, "hit", url);
  }, [pathname, searchParams]);

  return (
    <noscript>
      <div>
        <Image
          src="https://mc.yandex.ru/watch/97423237"
          style={{ position: "absolute", left: "-9999px" }}
          alt=""
          width={1}
          height={1}
        />
      </div>
    </noscript>
  );
}
