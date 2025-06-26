import type { Metadata } from "next";
import Script from "next/script";
import { Suspense } from "react";

import { NextIntlClientProvider } from "next-intl";
import { getTranslations } from "next-intl/server";
import { getLocale, getMessages } from "next-intl/server";

import cn from "classnames";

import YandexMetrika from "@/shared/lib/yandex-metrika";
import GoogleAnalytics from "@/shared/lib/google-analytics";
import { FacebookPixelEvents } from "@/shared/lib/pixel-events";

import { cormorant, cera, gilroy, sfpro } from "../fonts";

import "./globals.css";
import "./animate.css";

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations("meta");

  return {
    metadataBase: new URL("https://monclips.com"),
    title: t("title"),
    description: t("description"),
    openGraph: {
      type: "website",
      // url: "https://monclips.com",
      siteName: "Monclips",
      images: [
        {
          url: "/public/assets/img/og-bg.png", // Must be an absolute url
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      site: "@monclips",
      creator: "@olzh_zh",
      images: "/public/assets/img/og-bg.png",
    },
    icons: {
      icon: "/favicon.ico",
    },
  };
}
export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const locale = await getLocale();
  const messages = await getMessages();

  return (
    <html lang={locale} dir="ltr">
      <body
        className={cn(
          "antialiased",
          cormorant.variable,
          gilroy.variable,
          cera.variable,
          sfpro.variable
        )}
      >
        <Script id="metrika-counter" strategy="afterInteractive">
          {`(function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
            m[i].l=1*new Date();
            for (var j = 0; j < document.scripts.length; j++) {if (document.scripts[j].src === r) { return; }}
            k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)})
            (window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");

            ym(97423237, "init", {
              defer: true,
              clickmap: true,
              trackLinks: true,
              accurateTrackBounce: true,
              webvisor: true,
            })`}
        </Script>
        <Suspense fallback={<></>}>
          <YandexMetrika />
        </Suspense>
        <GoogleAnalytics />
        <Suspense fallback={<></>}>
          <FacebookPixelEvents />
        </Suspense>
        <NextIntlClientProvider messages={messages}>
          {children}
          <div id="modal-root"></div>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
