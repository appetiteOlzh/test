"use client";

import Image from "next/image";
import { useState } from "react";

import { PhoneOnCircle } from "@/shared/iskander/components/shared/phone-on-circle";
import { StoreBadge } from "@/shared/iskander/components/shared/store-badge";
import { NumberedStep } from "@/shared/iskander/components/shared/numbered-step";
import { FeatureItem } from "@/shared/iskander/components/shared/feature-item";

// ═══════════════════════════════════════════════════════════
// Константы цветов — золотой вместо зелёного у Roader
// ═══════════════════════════════════════════════════════════
const GOLD = "#F2CF40";
const GOLD_DEEP = "#E8B400";

// Ссылки на приложение в сторах — с UTM-метками для трекинга /easyapp
const GOOGLE_PLAY_URL =
  "https://play.google.com/store/apps/details?id=com.monclips&utm_source=meta&utm_medium=paid&utm_campaign=android&utm_content=easyapp";
const APP_STORE_URL =
  "https://apps.apple.com/app/apple-store/id6502268873?pt=127217049&ct=easyapp&mt=8";

// ═══════════════════════════════════════════════════════════
// NAVBAR — светлый, логотип слева, меню по центру, CTA справа
// Оставлен inline т.к. существующий shared/navbar использует
// shadcn Button для CTA, а нам нужна золотая пилюля как у Roader.
// Вынесем когда появится второй такой же лендинг.
// ═══════════════════════════════════════════════════════════
function Navbar() {
  return (
    <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-xl border-b border-neutral-100">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <a href="/easyapp" className="flex items-center">
          <Image
            src="/assets/img/memories/logo.svg"
            alt="MonClips"
            className="h-7"
            width={110}
            height={28}
            unoptimized
          />
        </a>

        <div className="hidden md:flex items-center gap-8">
          <a
            href="#home"
            className="text-sm text-neutral-900 font-medium hover:text-neutral-600 transition-colors"
          >
            Home
          </a>
          <a
            href="#features"
            className="text-sm text-neutral-600 hover:text-neutral-900 transition-colors"
          >
            Features
          </a>
          <a
            href="#how"
            className="text-sm text-neutral-600 hover:text-neutral-900 transition-colors"
          >
            How it works
          </a>
        </div>

        <a
          href="#download"
          className="rounded-full h-10 px-5 flex items-center text-sm font-semibold text-neutral-900 transition-all hover:scale-[1.03]"
          style={{ background: GOLD }}
        >
          Download app
        </a>
      </div>
    </nav>
  );
}

// ═══════════════════════════════════════════════════════════
// HERO — текст слева, мокап справа (PhoneOnCircle + плашки)
// ═══════════════════════════════════════════════════════════
function Hero() {
  return (
    <section id="home" className="pt-10 md:pt-20 pb-16 md:pb-24 px-6">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* Текст */}
        <div>
          <div>
            <h1 className="text-[2.5rem] md:text-[4rem] font-extrabold tracking-[-0.03em] leading-[1.05] mb-6 text-neutral-900">
              Save photos,
              <br />
              Organize albums,
              <br />
              Find any moment!
            </h1>
          </div>

          <div>
            <p className="text-base md:text-lg text-neutral-500 leading-relaxed mb-8 max-w-md">
              Save from camera roll or any chat. Organize into albums. Find any
              moment in seconds.
            </p>
          </div>

          <div>
            <div className="flex flex-wrap gap-3">
              <StoreBadge store="google" href={GOOGLE_PLAY_URL} />
              <StoreBadge store="apple" href={APP_STORE_URL} />
            </div>
          </div>
        </div>

        {/* Мокап + круг + плашки */}
        <div>
          <PhoneOnCircle
            src="/assets/img/easyapp/main-mockup.webp"
            className="max-w-[500px]"
            accentFrom={GOLD}
            accentTo={GOLD_DEEP}
            circleInset="10%"
            imageWidth="180%"
            circleClassName="animate-breathe"
            imageClassName="animate-sway"
          >
            <div
              className="animate-float absolute top-[-3%] left-[5%] md:top-[-3%] md:left-[-5%] z-30 text-neutral-900 rounded-xl shadow-xl px-4 py-2.5 flex items-center gap-2"
              style={{ background: GOLD }}
            >
              <svg
                className="size-4 shrink-0"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <polyline points="20 6 9 17 4 12" />
              </svg>
              <span className="text-sm font-semibold whitespace-nowrap">
                Organize photos and videos
              </span>
            </div>

            {/* Плашка снизу-справа. Симметрично верхней: -3% bottom, -5% right. */}
            <div
              className="animate-float-delayed absolute -bottom-[10%] right-[5%] md:bottom-[-3%] md:right-[-5%] z-30 text-neutral-900 rounded-xl shadow-xl px-4 py-2.5 flex items-center gap-2"
              style={{ background: GOLD }}
            >
              <svg
                className="size-4 shrink-0"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <polygon points="23 7 16 12 23 17 23 7" />
                <rect x="1" y="5" width="15" height="14" rx="2" ry="2" />
              </svg>
              <span className="text-sm font-semibold whitespace-nowrap">
                Keep memories safe
              </span>
            </div>
          </PhoneOnCircle>
        </div>
      </div>
    </section>
  );
}

// ═══════════════════════════════════════════════════════════
// HOW IT WORKS — 4 шага крест-накрест вокруг центрального телефона
// ═══════════════════════════════════════════════════════════
function HowItWorks() {
  const steps = [
    {
      n: 1,
      title: "Download the app",
      text: "Get MonClips from App Store or Google Play — free forever.",
    },
    {
      n: 2,
      title: "Save anything",
      text: "Grab photos and videos from camera roll, WhatsApp or Telegram.",
    },
    {
      n: 3,
      title: "Organize your way",
      text: "Create albums by trip, person, mood — add notes to moments.",
    },
    {
      n: 4,
      title: "Scroll your feed",
      text: "Vertical feed like TikTok — but with your own memories.",
    },
  ];

  return (
    <section id="how" className="py-20 md:py-28 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        {/* Заголовок. На десктопе большой mb — чтобы высокий вертикальный
            мокап, который крупнее контейнера, не задевал подзаголовок сверху.
            На мобилке мокап внизу секции, большой отступ не нужен. */}
        <div className="text-center mb-12 md:mb-40">
          <div>
            <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-neutral-900 mb-4">
              How MonClips Works
            </h2>
          </div>
          <div>
            <p className="text-neutral-500 max-w-xl mx-auto">
              Download the MonClips app from App Store or Google Play. Save your
              photos and videos — organize them, find any moment.
            </p>
          </div>
        </div>

        {/* Mobile: шаги 1-4 подряд, потом мокап. Явный вертикальный порядок
            вместо колонок — легче читать на узком экране.
            mt-16 у мокапа — чтобы его высокая часть не перекрывала 4-й шаг. */}
        <div className="md:hidden flex flex-col gap-10">
          <div>
            <NumberedStep {...steps[0]} align="left" accent={GOLD} />
          </div>
          <div>
            <NumberedStep {...steps[1]} align="left" accent={GOLD} />
          </div>
          <div>
            <NumberedStep {...steps[2]} align="left" accent={GOLD} />
          </div>
          <div>
            <NumberedStep {...steps[3]} align="left" accent={GOLD} />
          </div>

          <div className="mt-24">
            <PhoneOnCircle
              src="/assets/img/easyapp/mockup-front.png"
              className="w-[220px] mx-auto"
              accentFrom={GOLD}
              accentTo={GOLD_DEEP}
              circleInset="0%"
              imageWidth="90%"
              circleClassName="animate-breathe"
              imageClassName="animate-sway"
            />
          </div>
        </div>

        {/* Desktop: сетка крест-накрест — 2 шага слева, мокап по центру, 2 справа */}
        <div className="hidden md:grid grid-cols-[1fr_280px_1fr] gap-14 items-center">
          <div className="flex flex-col gap-16">
            <div>
              <NumberedStep {...steps[0]} align="right" accent={GOLD} />
            </div>
            <div>
              <NumberedStep {...steps[2]} align="right" accent={GOLD} />
            </div>
          </div>

          <div>
            <PhoneOnCircle
              src="/assets/img/easyapp/mockup-front.png"
              className="w-[220px] mx-auto"
              accentFrom={GOLD}
              accentTo={GOLD_DEEP}
              circleInset="0%"
              imageWidth="90%"
              circleClassName="animate-breathe"
              imageClassName="animate-sway"
            />
          </div>

          <div className="flex flex-col gap-16">
            <div>
              <NumberedStep {...steps[1]} align="left" accent={GOLD} />
            </div>
            <div>
              <NumberedStep {...steps[3]} align="left" accent={GOLD} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ═══════════════════════════════════════════════════════════
// FEATURES — таб-переключатель Free/Premium + 2 мокапа + 3 пункта
// ═══════════════════════════════════════════════════════════
function Features() {
  const [tab, setTab] = useState<"free" | "premium">("free");

  // Две пачки фич — переключаются табом
  const items = {
    free: [
      {
        icon: (
          <svg
            className="size-6"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
            <polyline points="17 8 12 3 7 8" />
            <line x1="12" y1="3" x2="12" y2="15" />
          </svg>
        ),
        title: "Save memories",
        text: "Grab photos from any app. One tap and it's safe forever.",
      },
      {
        icon: (
          <svg
            className="size-6"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z" />
          </svg>
        ),
        title: "Organize albums",
        text: "Create albums by trip, person or mood. Add notes to any moment.",
      },
      {
        icon: (
          <svg
            className="size-6"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
            <line x1="3" y1="9" x2="21" y2="9" />
            <line x1="9" y1="21" x2="9" y2="9" />
          </svg>
        ),
        title: "Your Feed",
        text: "Vertical feed with random moments — scroll your own life.",
      },
    ],
    premium: [
      {
        icon: (
          <svg
            className="size-6"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
          </svg>
        ),
        title: "20,000 photos",
        text: "Space for thousands of memories — organized and ready to scroll.",
      },
      {
        icon: (
          <svg
            className="size-6"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <polygon points="23 7 16 12 23 17 23 7" />
            <rect x="1" y="5" width="15" height="14" rx="2" ry="2" />
          </svg>
        ),
        title: "2,000 videos",
        text: "Full-length memories — birthdays, trips, first steps of your kids.",
      },
      {
        icon: (
          <svg
            className="size-6"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
          </svg>
        ),
        title: "Memory reminders",
        text: "Get gentle nudges to revisit what matters — notes, memories, moods.",
      },
    ],
  };

  return (
    <section id="features" className="py-20 md:py-28 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        {/* Заголовок + таб-переключатель */}
        <div className="text-center mb-10">
          <div>
            <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-neutral-900 mb-6">
              What you can do
              <br />
              with MonClips
            </h2>
          </div>

          <div>
            <div className="inline-flex bg-neutral-100 rounded-full p-1">
              <button
                onClick={() => setTab("free")}
                className={`px-6 py-2 rounded-full text-sm font-semibold transition-all ${
                  tab === "free"
                    ? "text-neutral-900 shadow-sm"
                    : "text-neutral-500"
                }`}
                style={tab === "free" ? { background: GOLD } : {}}
              >
                Free
              </button>
              <button
                onClick={() => setTab("premium")}
                className={`px-6 py-2 rounded-full text-sm font-semibold transition-all ${
                  tab === "premium"
                    ? "text-neutral-900 shadow-sm"
                    : "text-neutral-500"
                }`}
                style={tab === "premium" ? { background: GOLD } : {}}
              >
                Premium
              </button>
            </div>
          </div>
        </div>

        {/* Контент: на десктопе мокап слева + 3 пункта справа.
            На мобилке меняем порядок через order — сначала пункты, потом мокап. */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Мокапы на круге — order-2 на мобилке (вторым), первый на десктопе */}
          <div className="order-2 md:order-1">
            <PhoneOnCircle
              className="max-w-[500px]"
              accentFrom={GOLD}
              accentTo={GOLD_DEEP}
              circleClassName="animate-breathe"
            >
              <Image
                src="/assets/img/easyapp/2.png"
                alt="Organize albums"
                className="animate-sway-left absolute left-[8%] top-[5%] z-10 w-[55%] object-contain shadow-float"
                width={275}
                height={489}
              />
              <Image
                src="/assets/img/easyapp/1.png"
                alt="Save photos"
                className="animate-sway-right absolute right-[8%] bottom-[5%] z-20 w-[55%] object-contain shadow-float"
                width={275}
                height={489}
              />
            </PhoneOnCircle>
          </div>

          {/* 3 пункта — order-1 на мобилке (первым), второй на десктопе */}
          <div className="flex flex-col gap-8 order-1 md:order-2">
            {items[tab].map((item) => (
              <div key={item.title}>
                <FeatureItem
                  icon={item.icon}
                  title={item.title}
                  text={item.text}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// ═══════════════════════════════════════════════════════════
// GOLD CTA — крупный золотой прямоугольник с мокапом справа
// ═══════════════════════════════════════════════════════════
function GoldCTA() {
  return (
    <section id="download" className="py-16 md:py-24 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        {/* Левый блок (текст) задаёт высоту и ширину фона — мокап absolute
            и не влияет на размеры. Поэтому фон компактный, а телефон
            выходит за его края сверху, снизу и справа. */}
        <div
          className="relative rounded-3xl px-8 md:px-14 py-14 md:py-16"
          style={{
            background: `linear-gradient(135deg, ${GOLD} 0%, ${GOLD_DEEP} 100%)`,
          }}
        >
          {/* max-w-[55%] ограничивает левый блок — иначе текст растянется
              во всю ширину фона и наложится на абсолютно позиционированный мокап */}
          <div className="md:max-w-[55%]">
            <div>
              <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-neutral-900 mb-5">
                Download
                <br />
                MonClips App
              </h2>
            </div>

            <div>
              <p className="text-neutral-900/70 text-base md:text-lg leading-relaxed mb-8 max-w-md">
                MonClips is cloud storage built for families and memory keepers.
                Save photos and videos from your camera roll or any chat —
                organize them, find any moment in seconds. Privacy-first,
                encrypted, never used for ads.
              </p>
            </div>

            <div>
              <div className="flex flex-wrap gap-3">
                <StoreBadge store="google" href={GOOGLE_PLAY_URL} />
                <StoreBadge store="apple" href={APP_STORE_URL} />
              </div>
            </div>
          </div>

          <div className="hidden md:block absolute top-1/2 right-[-40px] -translate-y-1/2">
            <div>
              <Image
                src="/assets/img/app/44.webp"
                alt="MonClips feed"
                className="animate-sway w-[560px] max-w-none shadow-float"
                width={560}
                height={609}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ═══════════════════════════════════════════════════════════
// FOOTER — тёмный, 4 колонки + соцсети
// Оставлен inline т.к. существующий shared/footer — это упрощённая
// версия с одной строкой. Вынесем когда появится второй лендинг.
// ═══════════════════════════════════════════════════════════
function Footer() {
  return (
    <footer className="bg-neutral-900 text-white pt-16 pb-8 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 mb-12">
          {/* Логотип + описание */}
          <div>
            <Image
              src="/assets/img/memories/logo.svg"
              alt="MonClips"
              className="h-8 mb-5 brightness-0 invert"
              width={126}
              height={32}
              unoptimized
            />
            <p className="text-sm text-white/50 leading-relaxed">
              MonClips is cloud storage for photos and videos — save, organize
              and find any moment in seconds.
            </p>
          </div>

          <div>
            <h4 className="text-base font-bold mb-5">Quick Links</h4>
            <ul className="space-y-3 text-sm text-white/50">
              <li>
                <a href="#home" className="hover:text-white transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a
                  href="https://monclips.com/privacy-policy"
                  className="hover:text-white transition-colors"
                >
                  Privacy Policy
                </a>
              </li>
              <li>
                <a
                  href="https://monclips.com/terms-of-service"
                  className="hover:text-white transition-colors"
                >
                  Terms &amp; Conditions
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-6 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-white/30">
            © 2026 MonClips. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <a
              href="https://tiktok.com/@monclipsapp"
              aria-label="TikTok"
              className="size-9 rounded-full bg-white/5 flex items-center justify-center text-white/60 hover:text-white hover:bg-white/10 transition-all"
            >
              <svg className="size-4" viewBox="0 0 24 24" fill="currentColor">
                <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1v-3.5a6.37 6.37 0 00-.79-.05A6.34 6.34 0 003.15 15.2a6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.34-6.34V8.87a8.16 8.16 0 004.76 1.52v-3.4a4.85 4.85 0 01-1-.3z" />
              </svg>
            </a>
            <a
              href="https://instagram.com/monclipsapp"
              aria-label="Instagram"
              className="size-9 rounded-full bg-white/5 flex items-center justify-center text-white/60 hover:text-white hover:bg-white/10 transition-all"
            >
              <svg className="size-4" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

// ═══════════════════════════════════════════════════════════
// MAIN PAGE — светлая тема
// ═══════════════════════════════════════════════════════════
export default function EasyAppLanding() {
  // JSON-LD structured data — помогает Google распознать страницу как
  // продуктовый лендинг мобильного приложения и показывать rich snippets
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "MonClips",
    applicationCategory: "PhotographyApplication",
    operatingSystem: "iOS, Android",
    description:
      "Save photos and videos from camera roll or any chat. Organize into albums. Find any moment in seconds.",
    url: "https://monclips.com/easyapp",
    image: "https://monclips.com/og_img_easyapp.png",
    installUrl: [
      "https://apps.apple.com/app/apple-store/id6502268873",
      "https://play.google.com/store/apps/details?id=com.monclips",
    ],
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.8",
      ratingCount: "1200",
    },
    offers: [
      {
        "@type": "Offer",
        name: "Free",
        price: "0",
        priceCurrency: "USD",
        description: "500 photos, 50 videos, all features",
      },
      {
        "@type": "Offer",
        name: "Premium",
        price: "0.99",
        priceCurrency: "USD",
        description: "20,000 photos, 2,000 videos",
      },
      {
        "@type": "Offer",
        name: "Premium+",
        price: "2.99",
        priceCurrency: "USD",
        description: "50,000 photos, 5,000 videos",
      },
    ],
  };

  return (
    <div className="min-h-screen bg-white text-neutral-900 font-[family-name:var(--font-inter)]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <Navbar />
      <div className="overflow-hidden">
        <Hero />
        <HowItWorks />
        <Features />
        <GoldCTA />
      </div>
      <Footer />

      {/* Fallback для ботов без JS и поисковых движков —
          даёт семантическую структуру для индексации */}
      <noscript>
        <div style={{ padding: "40px", maxWidth: "800px", margin: "0 auto" }}>
          <h1>MonClips — Save photos, organize albums, find any moment</h1>
          <p>
            Cloud storage built for families and memory keepers. Save photos and
            videos from your camera roll or any chat, organize into albums, find
            any moment in seconds.
          </p>

          <h2>How it works</h2>
          <ol>
            <li>
              Download MonClips from App Store or Google Play — free forever.
            </li>
            <li>
              Save photos and videos from camera roll, WhatsApp or Telegram.
            </li>
            <li>Create albums by trip, person, mood — add notes to moments.</li>
            <li>
              Scroll your feed — vertical feed like TikTok, but with your own
              memories.
            </li>
          </ol>

          <h2>Features</h2>
          <ul>
            <li>Save memories — grab photos from any app in one tap.</li>
            <li>Organize albums — by trip, person or mood, with notes.</li>
            <li>
              Your Feed — vertical feed with random moments from your life.
            </li>
          </ul>

          <h2>Pricing</h2>
          <ul>
            <li>Free — 500 photos, 50 videos, all features.</li>
            <li>Premium — $0.99/mo: 20,000 photos, 2,000 videos.</li>
            <li>Premium+ — $2.99/mo: 50,000 photos, 5,000 videos.</li>
          </ul>

          <p>
            <a href="https://apps.apple.com/app/apple-store/id6502268873">
              Download on App Store
            </a>
            {" · "}
            <a href="https://play.google.com/store/apps/details?id=com.monclips">
              Get it on Google Play
            </a>
          </p>
        </div>
      </noscript>
    </div>
  );
}
