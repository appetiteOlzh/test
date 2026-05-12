import Image from "next/image";
import Link from "next/link";
import { FC } from "react";
import { useTranslations } from "next-intl";
import { twMerge } from "tailwind-merge";
import cn from "classnames";
import { AppOpener } from "@/features/app-opener";

import tiktok from "/public/assets/img/social/tiktok-white.svg";
import instagram from "/public/assets/img/social/instagram-white.svg";

export const HeaderNew: FC<{
  noSocial?: boolean;
  className?: string;
  eventName?: string;
  eventNameGoogleplay?: string;
  eventNameAppstore?: string;
  buttonText?: string;
}> = ({
  noSocial = false,
  className,
  eventName,
  eventNameGoogleplay,
  eventNameAppstore,
  buttonText,
}) => {
  const t = useTranslations("Space");

  return (
    <header
      className={twMerge(
        cn("md:pt-12 pt-[30px] absolute w-full top-0 left-0 z-50", className),
      )}
    >
      <div className={twMerge(cn("mx-auto px-4 container"))}>
        <div className="flex flex-wrap items-center ">
          <div className="basis-auto">
            <Link href="#">
              <Image
                src="/assets/img/monclips-icon.svg"
                alt="MonClips"
                width={150}
                height={117}
                className="w-[120px] h-auto md:w-[150px]"
              />
            </Link>
          </div>
          {!noSocial && (
            <div className="basis-auto ml-auto hidden md:block">
              <div className="flex flex-wrap items-center md:justify-end justify-center -mx-2">
                <div className="flex-none px-2">
                  <a
                    href="https://www.tiktok.com/@monclipsapp"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Image src={tiktok} alt="Tiktok" />
                  </a>
                </div>
                <div className="flex-none px-2">
                  <a
                    href="https://www.instagram.com/monclipsapp"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Image src={instagram} alt="Instagram" />
                  </a>
                </div>
              </div>
            </div>
          )}
          <div className={cn("basis-auto ml-auto", { "md:ml-12": !noSocial })}>
            <AppOpener
              buttonText={buttonText || t("button")}
              className="rounded-full md:px-8 md:py-3 md:text-lg px-4 py-3 text-sm bg-white text-[#333]"
              eventName={eventName}
              eventNameGoogleplay={eventNameGoogleplay}
              eventNameAppstore={eventNameAppstore}
            />
          </div>
        </div>
      </div>
    </header>
  );
};
