// Тарифы MonClips — лимиты по фото/видео, не по гигабайтам
export const plans = [
  {
    name: "Free",
    price: "$0",
    period: "forever",
    description: "Try it out, no card needed",
    photos: 500,
    videos: 50,
    features: [
      "500 photos",
      "50 videos",
      "Basic albums",
      "Mobile access",
    ],
    cta: "Start Free",
    highlighted: false,
  },
  {
    name: "Premium",
    price: "$0.99",
    period: "/mo",
    yearlyPrice: "$9.99/yr",
    description: "For people who actually care about their memories",
    photos: 20_000,
    videos: 2_000,
    features: [
      "20,000 photos",
      "2,000 videos",
      "Unlimited albums",
      "Vertical feed",
      "Notes & tags",
      "Memory reminders",
    ],
    cta: "Get Premium",
    highlighted: true,
    badge: "Most Popular",
  },
  {
    name: "Premium+",
    price: "$2.99",
    period: "/mo",
    yearlyPrice: "$29.99/yr",
    description: "For families and power users",
    photos: 50_000,
    videos: 5_000,
    features: [
      "50,000 photos",
      "5,000 videos",
      "Everything in Premium",
      "Family sharing (5 members)",
      "Priority support",
      "Early access to new features",
    ],
    cta: "Go Premium+",
    highlighted: false,
  },
];

// Сравнение с конкурентами — по лимитам, а не ГБ
export const comparisonData = [
  {
    feature: "Free tier",
    monclips: "500 photos + 50 videos",
    icloud: "5GB (≈1,500 photos)",
    google: "15GB shared with Gmail",
  },
  {
    feature: "Paid plan from",
    monclips: "$0.99/mo",
    icloud: "$0.99/mo (50GB)",
    google: "$1.99/mo (100GB)",
  },
  {
    feature: "Album organization",
    monclips: "Smart albums + tags",
    icloud: "Basic folders",
    google: "Auto only",
  },
  {
    feature: "Vertical feed",
    monclips: true,
    icloud: false,
    google: false,
  },
  {
    feature: "Notes on photos",
    monclips: true,
    icloud: false,
    google: false,
  },
  {
    feature: "Memory reminders",
    monclips: true,
    icloud: false,
    google: "Limited",
  },
  {
    feature: "Add from chats",
    monclips: true,
    icloud: false,
    google: false,
  },
];

// Фичи MonClips — из реального приложения
export const features = [
  {
    title: "Save from anywhere",
    description: "Add from camera roll or any chat. Everything in one place.",
    icon: "download" as const,
  },
  {
    title: "Albums & tags",
    description: "Organize by moments, people, places — not just dates.",
    icon: "grid" as const,
  },
  {
    title: "Vertical feed",
    description: "Scroll through your memories like a personal TikTok of your life.",
    icon: "play" as const,
  },
  {
    title: "Take notes",
    description: "Rewatch. Take notes. Go deeper into what matters.",
    icon: "edit" as const,
  },
  {
    title: "Track progress",
    description: "Never miss a practice session. Mark as done. Be proud.",
    icon: "check" as const,
  },
  {
    title: "Reminders",
    description: "Resurface memories on anniversaries and special dates.",
    icon: "clock" as const,
  },
];
