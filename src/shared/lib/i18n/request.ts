import { getRequestConfig } from "next-intl/server";
import { cookies } from "next/headers";
import { Locale } from "./routing";

export default getRequestConfig(async () => {
  // Provide a static locale, fetch a user setting,
  // read from `cookies()`, `headers()`, etc.
  const cookieStore = cookies();
  const locale =
    (cookieStore.get("NEXT_LOCALE")?.value as Locale | undefined) || "en";

  const filePath = await import(`./locale/${locale}.json`);

  return {
    locale,
    messages: filePath.default,
  };
});
