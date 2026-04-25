import { getRequestConfig } from "next-intl/server";
import { cookies, headers } from "next/headers";
import { Locale } from "./routing";

const isRu = (pathname: string | null | undefined) => {
  return (
    pathname?.endsWith("/cooking") ||
    pathname?.endsWith("/monclips") ||
    pathname?.endsWith("/organize")
  );
};
const isEn = (pathname: string | null | undefined) => {
  return pathname?.endsWith("/applicaion") || pathname?.endsWith("/");
};

export default getRequestConfig(async () => {
  // Provide a static locale, fetch a user setting,
  // read from `cookies()`, `headers()`, etc.
  const pathname = headers().get("next-url");
  const isRuOnly = isRu(pathname);
  const isEnOnly = isEn(pathname);

  const cookieStore = cookies();
  const locale = isRuOnly
    ? "ru" // Default to Russian for the main page
    : isEnOnly
      ? "en"
      : (cookieStore.get("NEXT_LOCALE")?.value as Locale | undefined) || "en";

  const filePath = await import(`./locale/${locale}.json`);

  return {
    locale,
    messages: filePath.default,
  };
});
