"use client";

import Image from "next/image";

import { useState, useEffect } from "react";
import { Logo } from "@/shared/iskander/components/shared/logo";
import {
  BlurRevealWords,
  BlurScaleBlock,
  FadeUpWords,
} from "@/shared/iskander/components/shared/animations";
import { QrGlowButton } from "@/shared/iskander/components/shared/qr-button";

// ═══ PRICING ═══
function PricingSection() {
  const [yearly, setYearly] = useState(true);

  const plans = [
    {
      name: "Free Plan",
      description: "For anyone who wants to try MonClips",
      price: "$0",
      period: "",
      yearlyPrice: "$0",
      features: ["500 photos · 50 videos · All features"],
      cta: "Get Started Free",
      highlighted: false,
    },
    {
      name: "Premium Plan",
      description: "For those who care about memories",
      price: "$0.99",
      period: "/mo",
      yearlyPrice: "$9.99",
      yearlyPeriod: "/year",
      badge: "Popular",
      features: [
        "20,000 photos",
        "500 videos",
        "Unlimited albums",
        "Vertical feed",
        "Notes on photos",
        "Memory reminders",
      ],
      cta: "Get Started Free",
      highlighted: true,
    },
    {
      name: "Premium+ Plan",
      description: "For families and power users",
      price: "$2.99",
      period: "/mo",
      yearlyPrice: "$29.99",
      yearlyPeriod: "/year",
      features: [
        "50,000 photos",
        "2,000 videos",
        "Everything in Premium",
        "Priority support",
        "Early access to features",
      ],
      cta: "Get Started Free",
      highlighted: false,
    },
  ];

  return (
    <section id="pricing" className="pt-24 pb-0">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-14">
          <div className="text-2xl md:text-[2.5rem] font-bold tracking-tight leading-[1.1] mb-8">
            <BlurRevealWords text="START FREE," className="block" gradient />
            <BlurRevealWords
              text="UPGRADE ANYTIME"
              className="block"
              gradient
            />
          </div>
          <div className="inline-flex items-center gap-3">
            <span
              className={`text-sm transition-colors ${!yearly ? "text-white" : "text-white/40"}`}
            >
              Monthly
            </span>
            <button
              onClick={() => setYearly(!yearly)}
              className={`relative w-12 h-6 rounded-full transition-colors ${yearly ? "bg-amber-500" : "bg-white/20"}`}
            >
              <div
                className={`absolute top-0.5 left-0.5 size-5 rounded-full bg-white transition-transform ${yearly ? "translate-x-6" : ""}`}
              />
            </button>
            <span
              className={`text-sm transition-colors ${yearly ? "text-white" : "text-white/40"}`}
            >
              Annual
            </span>
            {yearly && (
              <span className="text-xs font-semibold text-amber-400 bg-amber-400/10 px-2 py-0.5 rounded-full">
                SAVE 20%
              </span>
            )}
          </div>
        </div>
      </div>

      <div className="relative grid md:grid-cols-3 gap-0 border-t border-white/[0.06] md:max-w-6xl md:mx-auto">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 60% 80% at 50% 100%, rgba(242,207,64,0.1) 0%, transparent 70%)",
          }}
        />
        {plans.map((plan, i) => (
          <div
            key={plan.name}
            className={`p-10 pb-14 border-b md:border-b-0 border-white/[0.06] flex flex-col ${
              i < 2 ? "md:border-r md:border-white/[0.06]" : ""
            } ${plan.highlighted ? "relative" : ""}`}
            style={
              plan.highlighted
                ? {
                    background:
                      "radial-gradient(ellipse at 50% 100%, rgba(242,207,64,0.15) 0%, rgba(242,207,64,0.05) 50%, transparent 80%)",
                  }
                : i === 2
                  ? {
                      background:
                        "linear-gradient(180deg, rgba(242,207,64,0.06) 0%, transparent 40%)",
                      borderTop: "1px solid rgba(242,207,64,0.15)",
                    }
                  : {}
            }
          >
            <div className="mb-6">
              <div className="flex items-center gap-2 mb-1">
                <h3 className="text-lg font-semibold">{plan.name}</h3>
                {plan.badge && (
                  <span className="text-xs font-medium text-amber-400 bg-amber-400/10 px-2 py-0.5 rounded-full">
                    {plan.badge}
                  </span>
                )}
              </div>
              <p className="text-sm text-white/30">{plan.description}</p>
            </div>

            <div className="mb-6">
              <span className="text-4xl font-bold">
                {plan.name === "Free Plan"
                  ? "$0"
                  : yearly
                    ? plan.yearlyPrice
                    : plan.price}
              </span>
              <span className="text-white/30 text-sm ml-1">
                {plan.name === "Free Plan" ? "" : yearly ? "/year" : "/month"}
              </span>
            </div>

            <ul className="space-y-3 mb-8 flex-1">
              {plan.features.map((f) => (
                <li
                  key={f}
                  className="flex items-start gap-2 text-sm text-white/50"
                >
                  <span className="text-amber-400 mt-0.5">✓</span>
                  {f}
                </li>
              ))}
            </ul>

            <QrGlowButton
              className={`w-full h-11 rounded-full text-sm font-medium transition-all cursor-pointer flex items-center justify-center ${
                plan.highlighted
                  ? "btn-glow text-neutral-900"
                  : "border border-white/15 text-white/70 hover:border-amber-400/50 hover:shadow-[0_0_20px_rgba(242,207,64,0.15)] hover:text-white"
              }`}
            >
              {plan.cta}
            </QrGlowButton>
          </div>
        ))}
      </div>
    </section>
  );
}

// ═══ MAIN PAGE ═══
export default function AppLanding() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 200);
    }
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "MonClips",
    applicationCategory: "PhotographyApplication",
    operatingSystem: "iOS, Android",
    description:
      "Save photos and videos from camera roll or any chat. Organize into albums. Find any moment in seconds.",
    url: "https://monclips.com",
    image: "https://monclips.com/og_img_app.png",
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
        description: "20,000 photos, 500 videos",
        billingDuration: "P1M",
      },
      {
        "@type": "Offer",
        name: "Premium+",
        price: "2.99",
        priceCurrency: "USD",
        description: "50,000 photos, 2,000 videos",
        billingDuration: "P1M",
      },
    ],
  };

  return (
    <div className="min-h-screen bg-neutral-950 text-white/85 font-[family-name:var(--font-inter)]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* ═══ ЛОГО ═══ */}
      <div className="flex justify-center pt-6">
        <Image
          src="/assets/img/memories/logo-vert.svg"
          alt="MonClips"
          className="h-14 md:h-20"
          width={456}
          height={312}
          unoptimized
        />
      </div>

      {/* ═══ NAVBAR — появляется при скролле ═══ */}
      <nav
        className="fixed top-0 left-0 right-0 z-50 bg-neutral-950/80 backdrop-blur-xl border-b border-white/[0.06] transition-all duration-500"
        style={{
          opacity: scrolled ? 1 : 0,
          transform: scrolled ? "translateY(0)" : "translateY(-100%)",
          pointerEvents: scrolled ? "auto" : "none",
        }}
      >
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <Logo size="small" />
          <div className="hidden md:flex items-center gap-8">
            <a
              href="#features"
              className="text-sm text-white/50 hover:text-white transition-colors"
            >
              Features
            </a>
            <a
              href="#pricing"
              className="text-sm text-white/50 hover:text-white transition-colors"
            >
              Pricing
            </a>
            <a
              href="#download"
              className="text-sm text-white/50 hover:text-white transition-colors"
            >
              Download
            </a>
          </div>
          <QrGlowButton
            className="btn-glow rounded-full h-10 px-5 text-sm font-medium text-neutral-900 transition-all hover:scale-[1.03] cursor-pointer"
            url="https://monclips.com/download_app"
          >
            Download Free
          </QrGlowButton>
        </div>
      </nav>

      {/* ═══ HERO ═══ */}
      <section className="pt-8 md:pt-16 pb-0 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <BlurScaleBlock delay={0}>
            <h1
              className="text-[2rem] md:text-[4.5rem] font-extrabold tracking-[-0.04em] leading-[1.05] mb-4"
              style={{
                background: "linear-gradient(to bottom, #ffffff, #555555)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              CLOUD STORAGE FOR
              <br />
              PHOTOS AND VIDEOS
            </h1>
          </BlurScaleBlock>

          <BlurScaleBlock delay={200}>
            <p className="text-sm md:text-lg text-white/40 leading-relaxed mb-8 md:mb-10 max-w-xl mx-auto">
              Save from camera roll or any chat.
              <br className="hidden sm:block" />
              Organize into albums. Find any moment in seconds.
            </p>
          </BlurScaleBlock>

          <BlurScaleBlock delay={400} className="relative z-10">
            <QrGlowButton
              className="btn-glow rounded-full h-13 px-10 text-base font-semibold text-neutral-900 transition-all hover:scale-[1.03] active:scale-100 cursor-pointer"
              url="https://monclips.com/download_app"
            >
              Download Free
            </QrGlowButton>
          </BlurScaleBlock>
        </div>

        {/* Мокап крупно — на всю ширину */}
        <BlurScaleBlock
          delay={600}
          className="-mt-4 md:-mt-16 -mx-6 overflow-hidden flex justify-center"
        >
          <Image
            src="/assets/img/app/main-mockup.webp"
            alt="MonClips app"
            className="w-[250%] md:w-full max-w-none object-contain"
            width={1740}
            height={1305}
          />
        </BlurScaleBlock>
      </section>

      {/* ═══ FEATURES — bento grid как на референсе ═══ */}
      <section id="features" className="py-16 md:py-24 px-4 md:px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 md:mb-16">
            <BlurScaleBlock>
              <h2
                className="text-2xl md:text-[2.5rem] font-bold tracking-tight"
                style={{
                  background: "linear-gradient(to bottom, #ffffff, #555555)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                WHAT MONCLIPS DOES
              </h2>
            </BlurScaleBlock>
          </div>

          {/* Bento grid — 2 сверху, 1 снизу на всю ширину */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4">
            {/* Карточка 1 — Save */}
            <BlurScaleBlock delay={0}>
              <div
                className="rounded-2xl md:rounded-3xl p-[1px]"
                style={{
                  background:
                    "linear-gradient(45deg, rgba(242,207,64,0.4) 0%, rgba(242,207,64,0.05) 40%, transparent 60%)",
                }}
              >
                <div
                  className="relative rounded-2xl md:rounded-3xl overflow-hidden min-h-[380px] md:min-h-[450px] flex flex-col"
                  style={{
                    background:
                      "radial-gradient(ellipse at 0% 100%, rgba(242,207,64,0.12) 0%, rgba(242,207,64,0.03) 30%, #0a0a0a 70%)",
                  }}
                >
                  <div className="relative z-10 p-8 md:p-10">
                    <h3
                      className="text-2xl md:text-[2rem] font-bold tracking-tight mb-3"
                      style={{
                        background:
                          "linear-gradient(to bottom, #ffffff, #888888)",
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                      }}
                    >
                      SAVE
                    </h3>
                    <p className="text-white/50 text-sm md:text-base leading-relaxed">
                      <span className="md:hidden">
                        Grab photos and videos from your
                        <br />
                        camera roll, WhatsApp, Telegram
                        <br />
                        or any other app.
                      </span>
                      <span className="hidden md:inline">
                        Grab photos and videos from your camera roll,
                        <br />
                        WhatsApp, Telegram or any other app.
                      </span>
                    </p>
                  </div>
                  <div className="mt-auto flex justify-center">
                    <Image
                      src="/assets/img/app/11.webp"
                      alt="Save from anywhere"
                      className="w-[85%] object-contain"
                      width={481}
                      height={513}
                    />
                  </div>
                </div>
              </div>
            </BlurScaleBlock>

            {/* Карточка 2 — Organize */}
            <BlurScaleBlock delay={100}>
              <div
                className="rounded-2xl md:rounded-3xl p-[1px]"
                style={{
                  background:
                    "linear-gradient(225deg, rgba(242,207,64,0.4) 0%, rgba(242,207,64,0.05) 40%, transparent 60%)",
                }}
              >
                <div
                  className="relative rounded-2xl md:rounded-3xl overflow-hidden min-h-[380px] md:min-h-[450px] flex flex-col"
                  style={{
                    background:
                      "radial-gradient(ellipse at 100% 0%, rgba(242,207,64,0.12) 0%, rgba(242,207,64,0.03) 30%, #0a0a0a 70%)",
                  }}
                >
                  <div className="flex justify-center">
                    <Image
                      src="/assets/img/app/22.webp"
                      alt="Organize into albums"
                      className="w-[85%] object-contain"
                      width={481}
                      height={513}
                    />
                  </div>
                  <div className="mt-auto relative z-10 p-8 md:p-10">
                    <h3
                      className="text-2xl md:text-[2rem] font-bold tracking-tight mb-3"
                      style={{
                        background:
                          "linear-gradient(to bottom, #ffffff, #888888)",
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                      }}
                    >
                      ORGANIZE
                    </h3>
                    <p className="text-white/50 text-sm md:text-base leading-relaxed">
                      <span className="md:hidden">
                        Create albums by trip, person, mood —<br />
                        organize your way and add notes
                        <br />
                        to every moment.
                      </span>
                      <span className="hidden md:inline">
                        Create albums by trip, person, mood — organize
                        <br />
                        your way and add notes to every moment.
                      </span>
                    </p>
                  </div>
                </div>
              </div>
            </BlurScaleBlock>

            {/* Карточка 3 — Your Feed (на всю ширину) */}
            <BlurScaleBlock delay={200} className="md:col-span-2">
              <div
                className="rounded-2xl md:rounded-3xl p-[1px]"
                style={{
                  background:
                    "linear-gradient(180deg, rgba(242,207,64,0.4) 0%, rgba(242,207,64,0.05) 30%, transparent 50%)",
                }}
              >
                <div
                  className="relative rounded-2xl md:rounded-3xl overflow-hidden min-h-[420px] md:min-h-[620px] flex flex-col md:flex-row md:items-start"
                  style={{
                    background:
                      "radial-gradient(ellipse at 50% 0%, rgba(242,207,64,0.12) 0%, rgba(242,207,64,0.03) 30%, #0a0a0a 70%)",
                  }}
                >
                  <div className="relative z-10 p-8 md:p-12 flex-1">
                    <h3
                      className="text-2xl md:text-[2rem] font-bold tracking-tight mb-3"
                      style={{
                        background:
                          "linear-gradient(to bottom, #ffffff, #888888)",
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                      }}
                    >
                      YOUR FEED
                    </h3>
                    <p className="text-white/50 text-sm md:text-base leading-relaxed max-w-sm">
                      <span className="md:hidden">
                        Vertical feed like TikTok — but it&apos;s your
                        <br />
                        own photos. Random moments,
                        <br />
                        endless scrolling.
                      </span>
                      <span className="hidden md:inline">
                        Vertical feed like TikTok — but it&apos;s your own
                        <br />
                        photos. Random moments, endless scrolling.
                      </span>
                    </p>
                  </div>
                  <div className="flex justify-center md:absolute md:right-[10%] md:top-1/2 md:-translate-y-1/2">
                    <Image
                      src="/assets/img/app/44.webp"
                      alt="Your Feed"
                      className="h-[320px] md:h-[600px] object-contain"
                      width={552}
                      height={600}
                    />
                  </div>
                </div>
              </div>
            </BlurScaleBlock>
          </div>
        </div>
      </section>

      {/* ═══ PRIVACY ═══ */}
      <section
        className="pt-24 pb-24 px-6"
        style={{
          background:
            "radial-gradient(circle at 50% 50%, rgba(242,207,64,0.07) 0%, rgba(242,207,64,0.02) 30%, transparent 70%)",
        }}
      >
        <div className="max-w-4xl mx-auto rounded-3xl px-12 pb-12 md:px-16 md:pb-16 pt-16 text-center">
          <BlurScaleBlock delay={0}>
            <div className="relative w-fit mx-auto mb-10">
              <Image
                src="/assets/img/memories/privacy-eye.svg"
                alt=""
                className="w-[126px]"
                width={327}
                height={123}
                unoptimized
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <svg
                  className="size-7 text-neutral-900"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
                  <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                </svg>
              </div>
            </div>
          </BlurScaleBlock>

          <BlurScaleBlock delay={200}>
            <div className="text-2xl md:text-[2.5rem] font-bold tracking-tight mb-6">
              <BlurRevealWords
                text="PRIVACY FIRST"
                className="block"
                gradient
              />
            </div>
          </BlurScaleBlock>

          <BlurScaleBlock delay={400}>
            <FadeUpWords
              text="We built MonClips so that even we can't see what you store. Your photos, your business. Stored securely with world-leading cloud providers — encrypted, private, and never used for ads."
              className="text-white/40 text-base md:text-xl leading-relaxed max-w-xl mx-auto"
            />
          </BlurScaleBlock>
        </div>
      </section>

      {/* ═══ PRICING ═══ */}
      <PricingSection />

      {/* ═══ CTA ═══ */}
      <section id="download" className="py-24 px-4 md:px-6">
        <div
          className="max-w-6xl mx-auto rounded-2xl md:rounded-3xl p-[1px]"
          style={{
            background:
              "linear-gradient(135deg, transparent 20%, rgba(242,207,64,0.05) 35%, rgba(242,207,64,0.4) 50%, rgba(242,207,64,0.05) 65%, transparent 80%)",
          }}
        >
          <div
            className="text-center rounded-2xl md:rounded-3xl py-20 px-8"
            style={{
              background:
                "radial-gradient(ellipse at 100% 0%, rgba(242,207,64,0.1) 0%, transparent 40%), radial-gradient(ellipse at 0% 100%, rgba(242,207,64,0.1) 0%, transparent 40%), #0a0a0a",
            }}
          >
            <BlurScaleBlock delay={0}>
              <div className="text-2xl md:text-[2.5rem] font-bold tracking-tight mb-6">
                <BlurRevealWords
                  text="TRY MONCLIPS FOR FREE"
                  className="block"
                  gradient
                />
              </div>
            </BlurScaleBlock>
            <BlurScaleBlock delay={200}>
              <FadeUpWords
                text="500 photos · 50 videos · Free forever"
                className="text-white/40 text-lg mb-10"
              />
            </BlurScaleBlock>
            <BlurScaleBlock delay={400}>
              <QrGlowButton
                className="btn-glow rounded-full h-13 px-10 text-base font-semibold text-neutral-900 cursor-pointer hover:scale-[1.03] transition-transform"
                url="https://monclips.com/download_app"
              >
                Download Free
              </QrGlowButton>
            </BlurScaleBlock>
          </div>
        </div>
      </section>

      {/* ═══ FOOTER ═══ */}
      <footer className="border-t border-white/[0.06] py-10 px-6">
        <div className="max-w-6xl mx-auto flex flex-col items-center gap-8">
          <Image
            src="/assets/img/memories/logo-vert.svg"
            alt="MonClips"
            className="h-16"
            width={456}
            height={312}
            unoptimized
          />
        </div>
        <div className="max-w-6xl mx-auto mt-8 pt-6 border-t border-white/[0.04] flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-6 text-sm text-white/30">
            <a
              href="https://monclips.com/privacy-policy"
              className="hover:text-white/60 transition-colors"
            >
              Privacy
            </a>
            <a
              href="https://monclips.com/terms-of-service"
              className="hover:text-white/60 transition-colors"
            >
              Terms
            </a>
            <a
              href="mailto:support@monclips.com"
              className="hover:text-white/60 transition-colors"
            >
              Support
            </a>
          </div>
          <div className="flex items-center gap-4">
            <a
              href="https://tiktok.com/@monclipsapp"
              className="text-white/30 hover:text-white/60 transition-colors"
              aria-label="TikTok"
            >
              <svg className="size-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1v-3.5a6.37 6.37 0 00-.79-.05A6.34 6.34 0 003.15 15.2a6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.34-6.34V8.87a8.16 8.16 0 004.76 1.52v-3.4a4.85 4.85 0 01-1-.3z" />
              </svg>
            </a>
            <a
              href="https://instagram.com/monclipsapp"
              className="text-white/30 hover:text-white/60 transition-colors"
              aria-label="Instagram"
            >
              <svg className="size-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
              </svg>
            </a>
          </div>
          <p className="text-xs text-white/20">
            © 2026 MonClips. All rights reserved.
          </p>
        </div>
      </footer>

      {/* SEO — fallback для ботов */}
      <noscript>
        <div style={{ padding: "40px", maxWidth: "800px", margin: "0 auto" }}>
          <h1>MonClips — Cloud storage for photos and videos</h1>
          <p>
            Save from camera roll or any chat. Organize into albums. Find any
            moment in seconds.
          </p>

          <h2>Features</h2>
          <ul>
            <li>
              Save — Grab photos and videos from your camera roll, WhatsApp,
              Telegram or any other app.
            </li>
            <li>
              Organize — Create albums by trip, person, mood. Add notes to every
              moment.
            </li>
            <li>
              Your Feed — Vertical feed like TikTok but with your own photos.
              Random moments, endless scrolling.
            </li>
          </ul>

          <h2>Privacy</h2>
          <p>
            We built MonClips so that even we can&apos;t see what you store.
            Your photos, your business. Stored securely with world-leading cloud
            providers — encrypted, private, and never used for ads.
          </p>

          <h2>Pricing</h2>
          <ul>
            <li>
              Free Plan: $0 — 500 photos, 50 videos, all features included.
            </li>
            <li>
              Premium Plan: $0.99/month ($9.99/year) — 20,000 photos, 500
              videos, unlimited albums, vertical feed, notes, reminders.
            </li>
            <li>
              Premium+ Plan: $2.99/month ($29.99/year) — 50,000 photos, 2,000
              videos, priority support, early access.
            </li>
          </ul>

          <p>
            <a href="https://monclips.com/download_app">
              Download MonClips Free
            </a>
          </p>
          <p>
            <a href="https://monclips.com/privacy-policy">Privacy Policy</a> |{" "}
            <a href="https://monclips.com/terms-of-service">Terms of Service</a>
          </p>
        </div>
      </noscript>
    </div>
  );
}
