import { NextResponse, userAgent, type NextMiddleware } from "next/server";
import acceptLanguage from "accept-language";
import { localeCookie, routing } from "@/shared/lib/i18n/routing";
import { generateClientId } from "./shared/lib/generate-client-id";
import {
  GA_URL,
  MEASUREMENT_ID,
  REDIRECT_CONFIG,
  ruCountries,
} from "./shared/data";

const locales = routing.locales;
const API_SECRET = process.env.GA_API_SECRET;

async function sendGAEvent(
  event: string,
  redirectUrl: string,
  clientId: string,
) {
  if (!API_SECRET) return;

  try {
    await fetch(
      `${GA_URL}?measurement_id=${MEASUREMENT_ID}&api_secret=${API_SECRET}`,
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
      },
    );
  } catch (err) {
    console.error("GA event error:", err);
  }
}

acceptLanguage.languages(locales as unknown as string[]);
export const middleware: NextMiddleware = async (req) => {
  const pathname = req.nextUrl.pathname;
  const {
    os: { name: deviceOS },
  } = userAgent({ headers: req.headers });
  const requestHeaders = new Headers(req.headers);
  requestHeaders.set("next-url", req.url);
  const response = NextResponse.next({
    request: {
      headers: requestHeaders,
    },
  });
  response.cookies.set("deviceOs", deviceOS ?? "Other");

  const pathKey = `/${pathname.split("/")[1]}` as keyof typeof REDIRECT_CONFIG;
  const config = REDIRECT_CONFIG[pathKey];

  const gaCookie = req.cookies.get("_ga")?.value;
  const clientId = (() => {
    if (!gaCookie) return generateClientId();

    const parts = gaCookie.split(".");
    return parts.length === 4 ? `${parts[2]}.${parts[3]}` : generateClientId();
  })();

  if (config && deviceOS) {
    const osConfig = config[deviceOS as "Android" | "iOS"];

    if (osConfig) {
      sendGAEvent(osConfig.event, osConfig.url, clientId);
      const response = NextResponse.redirect(osConfig.url);

      if (!gaCookie) {
        response.cookies.set("_ga", `GA1.1.${clientId}`, {
          maxAge: 60 * 60 * 24 * 365,
        });
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
