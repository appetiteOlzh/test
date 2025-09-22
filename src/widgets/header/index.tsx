import Image from "next/image";
import Link from "next/link";
import { FC } from "react";
import { twMerge } from "tailwind-merge";
import cn from "classnames";
import { Select } from "./select";
import { AppOpenerButton } from "@/features/app-opener/ui/button";

export const Header: FC<{
  isWider?: boolean;
  withLocale?: boolean;
  withDownload?: boolean;
  deskOnly?: boolean;
}> = ({ isWider, withLocale, withDownload, deskOnly }) => {
  return (
    <header
      className={cn("md:pt-12 pt-[30px] absolute w-full top-0 left-0 z-50", {
        "sm:block hidden": deskOnly,
      })}
    >
      <div
        className={twMerge(
          cn("mx-auto px-4", { container: !isWider, "max-w-[1270px]": isWider })
        )}
      >
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
          {withDownload && (
            <div className="basis-auto ml-auto">
              <AppOpenerButton
                buttonText="Download"
                className="rounded-full px-15 py-5"
              />
            </div>
          )}
          {withLocale ? (
            <div className="basis-auto ml-auto">
              <Select />
            </div>
          ) : null}
        </div>
      </div>
    </header>
  );
};
