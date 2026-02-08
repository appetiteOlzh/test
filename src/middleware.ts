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
const API_SECRET = process.env.GA_API_SECRET;

function generateClientId(): string {
  // Генерация случайного client_id в формате "randomNumber.randomNumber"
  const part1 = Math.floor(Math.random() * 1e10);
  const part2 = Math.floor(Math.random() * 1e10);
  return `${part1}.${part2}`;
}

async function sendGAEvent(
  event: string,
  redirectUrl: string,
  clientId: string
) {
  if (!API_SECRET) return;

  try {
    await fetch(
      `${GA_URL}?measurement_id=${MEASUREMENT_ID}&api_secret=${API_SECRET}&debug_mode=1`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          client_id: clientId,
          events: [
            {
              name: event,
              params: { path: redirectUrl },
            },
          ],
        }),
      }
    );
  } catch (err) {
    console.error("GA event error:", err);
  }
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
  if (pathname.startsWith("/join") || pathname.startsWith("/download")) {
    const gaCookie = req.cookies.get("_ga")?.value ?? "";
    let clientId = "";

    if (gaCookie) {
      const parts = gaCookie.split(".");
      if (parts.length === 4) {
        clientId = `${parts[2]}.${parts[3]}`;
      } else {
        clientId = generateClientId();
      }
    } else {
      clientId = generateClientId();
    }

    let redirectUrl = "";
    let eventName = "";
    if (deviceOS === "Android") {
      redirectUrl =
        "https://play.google.com/store/apps/details?id=com.monclips&hl=ru&pli=1&utm_source=join&utm_medium=invite";
      eventName = "autogoogleplay";
    } else if (deviceOS === "iOS") {
      redirectUrl =
        "https://apps.apple.com/app/apple-store/id6502268873?pt=127217049&ct=monclipsjoin&mt=8";
      eventName = "autoappstore";
    }

    if (redirectUrl && eventName) {
      await sendGAEvent(eventName, redirectUrl, clientId);

      // Если куки _ga нет, можно установить временную куку на 1 день
      const response = NextResponse.redirect(redirectUrl);
      if (!gaCookie) {
        response.cookies.set("_ga", clientId, { maxAge: 60 * 60 * 24 });
      }
      return response;
    }
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
