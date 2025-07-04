import { createLocalizedPathnamesNavigation } from "next-intl/navigation";
import { defineRouting } from "next-intl/routing";

export const localeCookie = "NEXT_LOCALE";

export const routing = defineRouting({
  locales: ["en", "ru"],
  defaultLocale: "en",
  pathnames: {
    "/": "/",
  },
});

export type Pathnames = keyof typeof routing.pathnames;
export type Locale = (typeof routing.locales)[number];

export const { Link, getPathname, redirect, usePathname, useRouter } =
  createLocalizedPathnamesNavigation(routing);
