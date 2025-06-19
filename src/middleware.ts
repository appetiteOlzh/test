import { NextResponse, userAgent, type NextMiddleware } from "next/server";
import acceptLanguage from "accept-language";
import { localeCookie, routing } from "@/shared/lib/i18n/routing";

const locales = routing.locales;

const ruCountries = [
  "ru",
  "kz",
  "am",
  "az",
  "kg",
  "md",
  "pl",
  "tj",
  "tm",
  "ua",
  "uz",
];

acceptLanguage.languages(locales as unknown as string[]);
const PUBLIC_FILE = /\.(.*)$/;
// This function can be marked `async` if using `await` inside
export const middleware: NextMiddleware = (req) => {
  const pathname = req.nextUrl.pathname;
  // device middleware - redirect depend on device
  const {
    os: { name: deviceOS },
  } = userAgent({ headers: req.headers });

  if (
    req.nextUrl.pathname.startsWith("/_next") ||
    req.nextUrl.pathname.includes("/api/") ||
    PUBLIC_FILE.test(req.nextUrl.pathname)
  ) {
    return;
  }

  if (pathname.startsWith("/join")) {
    if (deviceOS === "Android")
      return NextResponse.redirect(
        "https://play.google.com/store/apps/details?id=com.monclips"
      );
    if (deviceOS === "iOS")
      return NextResponse.redirect(
        "https://apps.apple.com/app/monclips-moodboard/id6502268873"
      );
  }

  let lng;
  if (req.cookies.has(localeCookie))
    lng = acceptLanguage.get(req.cookies.get(localeCookie)?.value);
  if (!lng) {
    const clientLang = req.headers.get("Accept-Language");
    if (clientLang && ruCountries.includes(clientLang))
      lng = acceptLanguage.get("ru");
    else lng = acceptLanguage.get(clientLang);
  }
  if (!lng) lng = routing.defaultLocale;
  if (lng && lng !== req.cookies.get(localeCookie)?.value) {
    const response = NextResponse.next();
    response.cookies.set(localeCookie, lng);
    return response;
  }

  return NextResponse.next();
};

export const config = {
  matcher:
    "/((?!api|_next/static|_next/image|_vercel|assets|favicon.ico|sw.js).*)",
};
