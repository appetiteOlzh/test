import { getRequestConfig } from "next-intl/server";
import { cookies, headers } from "next/headers";
import { Locale } from "./routing";

const isRu = (pathname: string | null | undefined) => {
  return pathname?.endsWith("/") || pathname?.endsWith("/cooking");
};

export default getRequestConfig(async () => {
  // Provide a static locale, fetch a user setting,
  // read from `cookies()`, `headers()`, etc.
  const pathname = headers().get("next-url");
  const isMain = isRu(pathname);

  const cookieStore = cookies();
  const locale =
    (cookieStore.get("NEXT_LOCALE")?.value as Locale | undefined) || "en";

  const filePath = isMain
    ? await import(`./locale/ru.json`) // temporary only ru locale on main page
    : await import(`./locale/${locale}.json`);

  return {
    locale,
    messages: filePath.default,
  };
});
