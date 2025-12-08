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

const GA_URL = "https://www.google-analytics.com/mp/collect";
const MEASUREMENT_ID = "G-ZMWY92F4Z8";
const apiSecret = process.env.GA_API_SECRET;

function sendGAEvent(clientId: string, redirectUrl: string) {
  if (!apiSecret) return; // важно: редирект не ломается

  fetch(`${GA_URL}?measurement_id=${MEASUREMENT_ID}&api_secret=${apiSecret}`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      client_id: clientId,
      events: [
        {
          name: "redirect",
          params: { path: redirectUrl },
        },
      ],
    }),
  }).catch(() => {});
  // Не await → не блокируем middleware
}

acceptLanguage.languages(locales as unknown as string[]);
const PUBLIC_FILE = /\.(.*)$/;
// This function can be marked `async` if using `await` inside
export const middleware: NextMiddleware = async (req) => {
  const pathname = req.nextUrl.pathname;
  const {
    os: { name: deviceOS },
  } = userAgent({ headers: req.headers });
  const requestHeaders = new Headers(req.headers);
  requestHeaders.set("next-url", req.url);
  // requestHeaders.c

  const response = NextResponse.next({
    request: {
      headers: requestHeaders,
    },
  });
  response.cookies.set("deviceOs", deviceOS ?? "Other");

  if (
    req.nextUrl.pathname.startsWith("/_next") ||
    req.nextUrl.pathname.includes("/api/") ||
    PUBLIC_FILE.test(req.nextUrl.pathname)
  ) {
    return;
  }
  if (pathname.startsWith("/join")) {
    if (deviceOS === "Android") {
      const url = "https://play.google.com/store/apps/details?id=com.monclips";
      sendGAEvent("autogoogleplay", url);

      return NextResponse.redirect(url);
    }
    if (deviceOS === "iOS") {
      const url = "https://apps.apple.com/app/monclips-moodboard/id6502268873";
      sendGAEvent("autoappstore", url);
      return NextResponse.redirect(url);
    }
    console.log("apiSecret", apiSecret);
    response.cookies.set("apiSecret", apiSecret || "undefined");
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
    response.cookies.set(localeCookie, lng);
    return response;
  }

  return response;
};

export const config = {
  matcher:
    "/((?!api|_next/static|_next/image|_vercel|assets|favicon.ico|sw.js).*)",
};
