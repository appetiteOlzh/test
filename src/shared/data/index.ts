export const REDIRECT_CONFIG = {
  "/join": {
    Android: {
      url: "https://play.google.com/store/apps/details?id=com.monclips&hl=ru&pli=1&utm_source=join&utm_medium=invite",
      event: "autogoogleplay",
    },
    iOS: {
      url: "https://apps.apple.com/app/apple-store/id6502268873?pt=127217049&ct=monclipsjoin&mt=8",
      event: "autoappstore",
    },
  },
  "/download": {
    Android: {
      url: "https://play.google.com/store/apps/details?id=com.monclips&utm_source=ugcmatch&utm_medium=social&utm_campaign=ugc",
      event: "download_googleplay",
    },
    iOS: {
      url: "https://apps.apple.com/app/apple-store/id6502268873?pt=127217049&ct=ugcmatch&mt=8",
      event: "download_appstore",
    },
  },
  "/trynow": {
    Android: {
      url: "https://play.google.com/store/apps/details?id=com.monclips&utm_source=smm&utm_medium=social&utm_campaign=biolink",
      event: "trynow_googleplay",
    },
    iOS: {
      url: "https://apps.apple.com/app/apple-store/id6502268873?pt=127217049&ct=biolink&mt=8",
      event: "trynow_appstore",
    },
  },
  "/shumskiy": {
    Android: {
      url: "https://play.google.com/store/apps/details?id=com.monclips&utm_source=shumskiy&utm_medium=cpa&utm_campaign=shumskiy",
      event: "shumskiy_googleplay",
    },
    iOS: {
      url: "https://apps.apple.com/app/apple-store/id6502268873?pt=127217049&ct=shumskiy&mt=8",
      event: "shumskiy_appstore",
    },
  },
} as const;

export const ruCountries = [
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

export const GA_URL = "https://www.google-analytics.com/mp/collect";
export const MEASUREMENT_ID = "G-ZMWY92F4Z8";
