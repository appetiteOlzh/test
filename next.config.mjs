// @ts-check
import createNextIntlPlugin from "next-intl/plugin";
const withNextIntl = createNextIntlPlugin("./src/shared/lib/i18n/request.ts");

/** @type {import('next').NextConfig} */
const nextConfig = {
  rewrites: async () => {
    return [
      {
        source: "/", // Отображается как /
        destination: "/limitless", // при переходе открывается /home
      },
    ];
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "www.facebook.com",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "mc.yandex.ru",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "monclips-space.fra1.cdn.digitaloceanspaces.com",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "c7m10qsb-3000.euw.devtunnels.ms",
        port: "",
        pathname: "/**",
      },
    ],
  },
  env: {
    baseUrl: "https://api-v2.monclips.com",
    iosAppUrl: "https://apps.apple.com/app/monclips-moodboard/id6502268873",
    androidAppUrl: "https://play.google.com/store/apps/details?id=com.monclips",
  },
};

export default withNextIntl(nextConfig);
