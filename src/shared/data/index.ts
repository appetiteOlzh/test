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
    content: {
      title: "Scroll your camera roll like a TTok",
      description:
        "Every swipe is a surprise. <br/>Find favorite and forgotten moments.",
    },
    meta: {
      title: "Scroll your camera roll like a TTok",
      description:
        "Every swipe is a surprise. Find favorite and forgotten moments.",
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
    content: {
      title: "Scroll your camera roll like a TTok",
      description:
        "Delete what you don't need. <br/>Gallery cleanup - easy and simple",
    },
    meta: {
      title: "Scroll your camera roll like a TTok",
      description:
        "Delete what you don't need. Gallery cleanup - easy and simple",
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
    content: {
      title: "Create your portfolio in 5 minutes",
      description:
        "Right from your phone",
    },
    meta: {
      title: "Create your portfolio in 5 minutes",
      description:
        "Create your portfolio in 5 minutes right from your phone.",
    },
  },
  "/shumskiy": {
    Android: {
      url: "https://play.google.com/store/apps/details?id=com.monclips&utm_source=shumskiy&utm_medium=cpa&utm_campaign=shumskiy",
      event: "shumskiy_googleplay",
    },
    iOS{
      url: "https://apps.apple.com/app/apple-store/id6502268873?pt=127217049&ct=shumskiy&mt=8",
      event: "shumskiy_appstore",
    },
    content: {
      title: "Scroll your camera roll like a TTok",
      description:
        "Delete what you don't need. <br/>Gallery cleanup - easy and simple",
    },
    meta: {
      title: "Scroll your camera roll like a TTok",
      description:
        "Delete what you don't need. Gallery cleanup - easy and simple",
    },
  },
  "/download_app": {
    Android: {
      url: "https://play.google.com/store/apps/details?id=com.monclips&utm_source=app&utm_medium=social&utm_campaign=app",
      event: "download_app_googleplay",
    },
    iOS: {
      url: "https://apps.apple.com/app/apple-store/id6502268873?pt=127217049&ct=app&mt=8",
      event: "download_app_appstore",
    },
    content: {
      title: "Cloud storage for photos and videos",
      description:
        "Save from camera roll or any chat. Organize into albums. Find any moment in seconds.",
    },
    meta: {
      title: "Cloud storage for photos and videos",
      description:
        "Save from camera roll or any chat. Organize into albums. Find any moment in seconds.",
    },
  },
  "/download_memories": {
    Android: {
      url: "https://play.google.com/store/apps/details?id=com.monclips&utm_source=memories&utm_medium=social&utm_campaign=memories",
      event: "download_memories_googleplay",
    },
    iOS: {
      url: "https://apps.apple.com/app/apple-store/id6502268873?pt=127217049&ct=memories&mt=8",
      event: "download_memories_appstore",
    },
    content: {
      title: "Built for real memories",
      description:
        "Save photos and videos from anywhere. Organize them your way. Find any moment instantly.",
    },
    meta: {
      title: "Built for real memories",
      description:
        "Save photos and videos from anywhere. Organize them your way. Find any moment instantly.",
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
