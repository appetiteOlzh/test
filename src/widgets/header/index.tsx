import Image from "next/image";
import Link from "next/link";
import cn from "classnames";
import { Select } from "./select";
import { MobileNav } from "./mobile-nav";

export const Header = ({
  noLocale,
  altLogo,
  navList,
}: {
  noLocale?: boolean;
  altLogo?: boolean;
  navList?: {
    href: string;
    title: string;
  }[];
}) => {
  return (
    <header
      className={cn("md:pt-11 pt-[30px] z-50 w-full", {
        absolute: !navList?.length,
        "fixed bg-background pb-[30px]": navList?.length,
      })}
    >
      <div className="container mx-auto px-4">
        <div
          className={cn("flex flex-wrap items-center relative", {
            "justify-center md:justify-between": !navList?.length,
            "justify-between": navList?.length,
          })}
        >
          <div className="basis-auto text-center">
            <a href="/">
              {altLogo ? (
                <Image
                  src="/assets/img/monclips-icon.svg"
                  alt="MonClips"
                  width={153}
                  height={144}
                  className="w-[140px] md:w-[144px]"
                />
              ) : (
                <Image
                  src="/assets/img/logo-gold.svg"
                  alt="MonClips"
                  width={150}
                  height={117}
                  className="w-[120px] h-auto md:w-[150px]"
                />
              )}
            </a>
          </div>
          {navList && navList.length ? (
            <>
              <ul className="basis-auto px-4 mr-1 ml-auto hidden md:flex">
                {navList.map(({ href, title }) => {
                  return (
                    <li key={href} className="px-4 mx-0.5 text-base">
                      <Link href={href}>{title}</Link>
                    </li>
                  );
                })}
              </ul>
              <MobileNav navList={navList} noLocale />
            </>
          ) : null}
          {!noLocale ? (
            <div
              className={cn(
                "basis-auto text-center absolute md:static top-auto right-0",
                {
                  "hidden md:block": navList?.length,
                }
              )}
            >
              <Select />
            </div>
          ) : null}
        </div>
      </div>
    </header>
  );
};

export { HeaderInner } from "./inner";
