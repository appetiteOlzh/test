"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { Star } from "lucide-react";

import { Logo } from "@/shared/iskander/components/shared/logo";
import {
  BlurRevealWords,
  FadeUpWords,
  BlurScaleBlock,
} from "@/shared/iskander/components/shared/animations";
import { QrGlowButton } from "@/shared/iskander/components/shared/qr-button";

// Pricing section
function PricingSection() {
  const [yearly, setYearly] = useState(true); // по умолчанию годовой

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
      eventName: "memories_download_app_popup_free",
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
      eventName: "memories_download_app_popup_premium",
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
      eventName: "memories_download_app_popup_premium_plus",
    },
  ];

  return (
    <section id="pricing" className="pt-24 pb-0">
      <div className="max-w-6xl mx-auto px-6">
        {/* Шапка: заголовок и переключатель по центру */}
        <div className="text-center mb-14 md:mb-14">
          <div className="text-3xl md:text-[2.75rem] font-medium tracking-tight mb-8">
            <span className="block">
              <BlurRevealWords text="Pay for" className="inline" gradient />{" "}
              <BlurRevealWords
                text="memories,"
                className="inline font-serif italic"
                gradient
              />
            </span>
            <BlurRevealWords text="not gigabytes" className="block" gradient />
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
      {/* Карточки — full width на мобильном, max-w-6xl на десктопе */}
      <div className="relative grid md:grid-cols-3 gap-0 border-t border-white/[0.06] md:max-w-6xl md:mx-auto">
        {/* Свечение от Premium — растекается на соседние */}
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
              url="https://monclips.com/download_memories"
              eventName={plan.eventName}
            >
              {plan.cta}
            </QrGlowButton>
          </div>
        ))}
      </div>
    </section>
  );
}

// FAQ item — принимает open/onClick извне для аккордеона
function FaqItem({
  question,
  answer,
  open,
  onClick,
}: {
  question: string;
  answer: string;
  open: boolean;
  onClick: () => void;
}) {
  return (
    <div
      className="border-b border-white/[0.06] transition-all duration-300 cursor-pointer"
      onClick={onClick}
    >
      <div className="flex items-center justify-between py-5">
        <h3 className="font-semibold text-base md:text-lg pr-4">{question}</h3>
        <div
          className={`shrink-0 transition-transform duration-300 ${open ? "rotate-45" : ""}`}
        >
          <span className="text-white/40 text-lg leading-none">+</span>
        </div>
      </div>
      <div
        className="overflow-hidden transition-all duration-300"
        style={{
          maxHeight: open ? "300px" : "0px",
          opacity: open ? 1 : 0,
        }}
      >
        <p className="pb-5 text-white/40 text-sm md:text-base leading-relaxed">
          {answer}
        </p>
      </div>
    </div>
  );
}

// FAQ аккордеон — только один вопрос открыт
function FaqAccordion({ items }: { items: { q: string; a: string }[] }) {
  const [openIdx, setOpenIdx] = useState<number | null>(null);
  return (
    <div className="border-t border-white/[0.06]">
      {items.map((item, i) => (
        <FaqItem
          key={i}
          question={item.q}
          answer={item.a}
          open={openIdx === i}
          onClick={() => setOpenIdx(openIdx === i ? null : i)}
        />
      ))}
    </div>
  );
}

// Feature accordion — мокапы слева, пункты справа раскрываются при скролле
function FeatureAccordion() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    // Скролл-переключение только на десктопе
    function onScroll() {
      if (window.innerWidth < 1024) return;
      const rect = section!.getBoundingClientRect();
      const sectionHeight = rect.height;
      const viewportCenter = window.innerHeight / 2;
      const progress = (viewportCenter - rect.top) / sectionHeight;

      if (progress < 0.33) setActive(0);
      else if (progress < 0.66) setActive(1);
      else setActive(2);
    }

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const features = [
    {
      title: "Save from anywhere",
      desc: "Camera roll, chats, screenshots — grab anything in one tap and it lands in MonClips.",
      mockup: "/assets/img/memories/11.png",
      gradient:
        "radial-gradient(ellipse at 50% 80%, rgba(242,207,64,0.25) 0%, rgba(242,207,64,0.08) 40%, rgba(20,20,20,0.95) 100%)",
    },
    {
      title: "Your albums, your rules",
      desc: "Create albums that make sense to you. By trip, by person, by mood. Add tags and notes to never lose context.",
      mockup: "/assets/img/memories/22.png",
      gradient:
        "radial-gradient(ellipse at 50% 20%, rgba(242,207,64,0.25) 0%, rgba(242,207,64,0.08) 40%, rgba(20,20,20,0.95) 100%)",
    },
    {
      title: "Relive & remember",
      desc: "Scroll your vertical feed, get reminders on special dates, and rediscover forgotten moments.",
      mockup: "/assets/img/memories/33.png",
      gradient:
        "radial-gradient(ellipse at 50% 50%, rgba(242,207,64,0.25) 0%, rgba(242,207,64,0.08) 40%, rgba(20,20,20,0.95) 100%)",
    },
  ];

  return (
    <>
      {/* ═══ МОБИЛЬНЫЙ ЛЕЙАУТ — sticky cards ═══ */}
      <div className="lg:hidden">
        {/* Общий заголовок — sticky, уровень 1 */}
        <div
          className="sticky bg-neutral-950 pt-4 pb-6"
          style={{ top: "64px", zIndex: 40 }}
        >
          <BlurScaleBlock delay={0}>
            <h2
              className="text-[30px] font-medium tracking-[-0.04em] leading-[1.05] mb-1"
              style={{
                background: "linear-gradient(to bottom, #ffffff, #555555)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Everything you need
              <br />
              to <em className="font-serif italic font-normal">organize</em>
            </h2>
            <p className="text-white/40 text-sm">
              Save, sort, and enjoy — all from one app.
            </p>
          </BlurScaleBlock>
        </div>

        {/* Sticky cards — все в одном контейнере чтобы sticky работал до конца */}
        <div className="relative">
          {/* Заголовок 1 */}
          <div
            className="sticky bg-neutral-950 py-2"
            style={{ top: "180px", zIndex: 43 }}
          >
            <h3 className="text-base font-semibold">{features[0].title}</h3>
          </div>
          <BlurScaleBlock delay={200}>
            <p className="text-white/40 text-sm leading-relaxed mb-3 mt-1">
              {features[0].desc}
            </p>
            <div
              className="relative aspect-square rounded-2xl overflow-hidden mb-4"
              style={{ background: features[0].gradient }}
            >
              <div className="absolute inset-0 flex justify-center px-6 items-end">
                <Image
                  src={features[0].mockup}
                  alt=""
                  className="w-[85%] object-contain"
                  width={595}
                  height={600}
                />
              </div>
            </div>
          </BlurScaleBlock>

          {/* Заголовок 2 */}
          <div
            className="sticky bg-neutral-950 py-2"
            style={{ top: "212px", zIndex: 42 }}
          >
            <h3 className="text-base font-semibold">{features[1].title}</h3>
          </div>
          <BlurScaleBlock>
            <p className="text-white/40 text-sm leading-relaxed mb-3 mt-1">
              {features[1].desc}
            </p>
            <div
              className="relative aspect-square rounded-2xl overflow-hidden mb-4"
              style={{ background: features[1].gradient }}
            >
              <div className="absolute inset-0 flex justify-center px-6 items-start">
                <Image
                  src={features[1].mockup}
                  alt=""
                  className="w-[85%] object-contain"
                  width={595}
                  height={600}
                />
              </div>
            </div>
          </BlurScaleBlock>

          {/* Заголовок 3 */}
          <div
            className="sticky bg-neutral-950 py-2"
            style={{ top: "244px", zIndex: 41 }}
          >
            <h3 className="text-base font-semibold">{features[2].title}</h3>
          </div>
          <BlurScaleBlock>
            <p className="text-white/40 text-sm leading-relaxed mb-3 mt-1">
              {features[2].desc}
            </p>
            <div
              className="relative aspect-square rounded-2xl overflow-hidden mb-4"
              style={{ background: features[2].gradient }}
            >
              <div className="absolute inset-0 flex justify-center px-6 items-center">
                <Image
                  src={features[2].mockup}
                  alt=""
                  className="w-[85%] object-contain"
                  width={595}
                  height={600}
                />
              </div>
            </div>
          </BlurScaleBlock>
        </div>
      </div>

      {/* ═══ ДЕСКТОПНЫЙ ЛЕЙАУТ — без изменений ═══ */}
      <div
        ref={sectionRef}
        className="relative overflow-visible hidden lg:block"
      >
        <div className="lg:sticky top-32 overflow-visible">
          {/* Заголовок */}
          <BlurScaleBlock delay={0} className="mb-6">
            <h2
              className="text-[2.75rem] font-medium tracking-tight"
              style={{
                background: "linear-gradient(to bottom, #ffffff, #555555)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Everything you need to{" "}
              <em className="font-serif italic font-normal">organize</em>
            </h2>
          </BlurScaleBlock>
          <BlurScaleBlock delay={200}>
            <p className="text-white/40 mb-10 text-lg">
              Save, sort, and enjoy — all from one app.
            </p>
          </BlurScaleBlock>

          <div className="grid grid-cols-[40%_60%] gap-12 items-start min-h-[550px]">
            {/* Пункты — слева */}
            <div className="space-y-8">
              {features.map((f, i) => (
                <div
                  key={i}
                  className="cursor-pointer transition-all duration-500"
                  onClick={() => setActive(i)}
                >
                  <h3
                    className={`text-xl font-semibold mb-2 transition-colors duration-500 ${
                      active === i ? "text-white" : "text-white/25"
                    }`}
                  >
                    {f.title}
                  </h3>
                  <div
                    className="overflow-hidden transition-all duration-500"
                    style={{
                      maxHeight: active === i ? "120px" : "0px",
                      opacity: active === i ? 1 : 0,
                    }}
                  >
                    <p className="text-white/40 leading-relaxed">{f.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Мокап — справа */}
            <div className="flex justify-center">
              <div className="relative w-full h-[calc(100vh-200px)] max-h-[600px] rounded-3xl overflow-hidden">
                <div
                  className="absolute inset-0 rounded-3xl transition-all duration-700"
                  style={{ background: features[active].gradient }}
                />
                {features.map((f, i) => (
                  <div
                    key={i}
                    className={`absolute inset-0 flex justify-center transition-all duration-700 px-8 ${
                      i === 0
                        ? "items-end"
                        : i === 1
                          ? "items-start"
                          : "items-center"
                    }`}
                    style={{ opacity: active === i ? 1 : 0 }}
                  >
                    <Image
                      src={f.mockup}
                      alt=""
                      className={`object-contain ${
                        i === 0
                          ? "w-[85%]"
                          : i === 1
                            ? "w-[85%]"
                            : "max-w-full max-h-full"
                      }`}
                      width={595}
                      height={600}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Скролл-зона */}
        <div className="h-[200vh]" />
      </div>
    </>
  );
}

// Хук для эффекта дуги — карточки по краям крупнее, по центру мельче
function useArcScale(containerRef: React.RefObject<HTMLDivElement | null>) {
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    let rafId: number;
    let isVisible = true;

    // Останавливаем анимацию когда карусель не видна
    const observer = new IntersectionObserver(
      ([entry]) => {
        isVisible = entry.isIntersecting;
      },
      { threshold: 0 },
    );
    observer.observe(container);

    function update() {
      if (isVisible) {
        const cards =
          container!.querySelectorAll<HTMLElement>(".carousel-card");
        const containerRect = container!.getBoundingClientRect();
        const centerX = containerRect.left + containerRect.width / 2;

        cards.forEach((card) => {
          const cardRect = card.getBoundingClientRect();
          const cardCenterX = cardRect.left + cardRect.width / 2;
          const dist =
            Math.abs(cardCenterX - centerX) / (containerRect.width / 2);
          const clampedDist = Math.min(dist, 1);
          const side = cardCenterX < centerX ? 1 : -1;
          const isMobile = containerRect.width < 768;
          if (isMobile) {
            const tilt = clampedDist * 4 * side;
            card.style.transform = `rotate(${tilt}deg)`;
          } else {
            const rotate = clampedDist * 25 * side;
            const scale = 0.85 + clampedDist * 0.2;
            const depth = (1 - clampedDist) * 80;
            card.style.transform = `perspective(800px) rotateY(${rotate}deg) scale(${scale}) translateY(${depth}px)`;
          }
        });
      }
      rafId = requestAnimationFrame(update);
    }

    rafId = requestAnimationFrame(update);
    return () => {
      cancelAnimationFrame(rafId);
      observer.disconnect();
    };
  }, [containerRef]);
}

// Хук для отслеживания скролла
function useScrolled(threshold = 100) {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > threshold);
    }
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, [threshold]);
  return scrolled;
}

export default function NewLanding() {
  const carouselRef = useRef<HTMLDivElement>(null);
  useArcScale(carouselRef);
  const scrolled = useScrolled(200);
  // JSON-LD structured data для поисковиков
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "MonClips",
    applicationCategory: "PhotographyApplication",
    operatingSystem: "iOS, Android",
    description:
      "Save photos and videos from anywhere. Organize them into albums your way. Find any moment instantly.",
    url: "https://monclips.com",
    image: "https://monclips.com/og-image.png",
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.5",
      ratingCount: "5000",
      bestRating: "5",
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
      {/* JSON-LD для поисковиков */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      {/* ═══ ЛОГО — по центру, скроллится с контентом ═══ */}
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

      {/* ═══ NAVBAR 2 — появляется при скролле ═══ */}
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
            url="https://monclips.com/download_memories"
            eventName="memories_download_app_popup_navbar"
          >
            Explore MonClips Free
          </QrGlowButton>
        </div>
      </nav>

      {/* ═══ HERO ═══ */}
      <section className="pt-8 pb-8 md:pb-24 px-6">
        <div className="max-w-4xl mx-auto text-center">
          {/* Рейтинг с аватарками */}
          <BlurScaleBlock
            delay={0}
            className="flex items-center justify-center gap-3 mb-5"
          >
            <div className="flex -space-x-2">
              {[111, 112, 113, 114, 115].map((id) => (
                <Image
                  key={id}
                  src={`/assets/img/memories/avatars/Ellipse${id}.png`}
                  alt=""
                  className="size-8 rounded-full border-2 border-white object-cover"
                  width={32}
                  height={32}
                />
              ))}
            </div>
            <div className="text-sm">
              <div className="flex items-center gap-1.5">
                <Star className="size-4 fill-amber-400 text-amber-400" />
                <span className="font-semibold">4.8/5 Rating</span>
              </div>
              <div className="text-white/50 mt-0.5">5K+ Happy Users</div>
            </div>
          </BlurScaleBlock>

          {/* Заголовок */}
          <BlurScaleBlock delay={200}>
            <h1
              className="text-[2rem] md:text-[4.5rem] font-medium tracking-[-0.04em] leading-[1.05] mb-4"
              style={{
                background: "linear-gradient(to bottom, #ffffff, #555555)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Built for real{" "}
              <em className="font-serif italic font-normal">memories,</em>
              <br />
              Trusted by thousands
            </h1>
          </BlurScaleBlock>

          {/* Подзаголовок */}
          <BlurScaleBlock delay={400}>
            <p className="text-sm md:text-lg text-white/40 leading-relaxed mb-8 md:mb-10 max-w-lg mx-auto">
              Save photos and videos from anywhere.
              <br className="hidden sm:block" />
              Organize them your way. Find any moment instantly.
            </p>
          </BlurScaleBlock>

          {/* CTA */}
          <BlurScaleBlock delay={600} className="relative z-10">
            <QrGlowButton
              className="btn-glow rounded-full h-13 px-10 text-base font-semibold text-neutral-900 transition-all hover:scale-[1.03] active:scale-100 cursor-pointer"
              url="https://monclips.com/download_memories"
              eventName="memories_download_app_popup_hero"
            >
              Explore MonClips Free
            </QrGlowButton>
          </BlurScaleBlock>
        </div>

        {/* Карусель — бесконечная лента, по краям крупнее, по центру мельче */}
        <BlurScaleBlock
          delay={800}
          className="mt-10 md:-mt-2 relative -mx-6"
          style={{ width: "calc(100% + 48px)" }}
        >
          {/* Градиенты — от самого края экрана */}
          <div className="absolute left-0 -top-20 -bottom-20 w-[18%] bg-gradient-to-r from-neutral-950 via-neutral-950/80 to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 -top-20 -bottom-20 w-[18%] bg-gradient-to-l from-neutral-950 via-neutral-950/80 to-transparent z-10 pointer-events-none" />
          <div ref={carouselRef} className="relative w-full overflow-x-clip">
            <div className="flex items-center gap-2 md:gap-4 animate-scroll-left pb-4 md:pb-10">
              {[...Array(2)].map((_, setIdx) => (
                <div
                  key={setIdx}
                  className="flex items-center gap-2 md:gap-5 shrink-0"
                >
                  {[
                    "Category.png",
                    "Category-1.png",
                    "Category-2.png",
                    "Category-3.png",
                    "Category-4.png",
                    "Category-5.png",
                    "Category-6.png",
                    "Category-7.png",
                    "Category-8.png",
                    "Category-9.png",
                    "Category-10.png",
                    "Category-11.png",
                    "Category-12.png",
                    "Category-13.png",
                    "Category-14.png",
                    "Category-15.png",
                  ].map((file, i) => (
                    <div
                      key={`${setIdx}-${i}`}
                      className="carousel-card w-[180px] md:w-[264px] aspect-[4/5] rounded-2xl overflow-hidden shadow-xl shadow-black/30 border border-white/10 shrink-0 bg-neutral-900"
                    >
                      <Image
                        src={`/assets/img/memories/albums/${file}`}
                        alt=""
                        className="w-full h-full object-cover"
                        width={334}
                        height={445}
                      />
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </BlurScaleBlock>
      </section>

      {/* ═══ FEATURES — scroll-driven accordion + mockups ═══ */}
      <section id="features" className="py-12 md:py-24 px-6">
        <div className="max-w-6xl mx-auto">
          {/* Feature cards — заголовок внутри sticky */}
          <FeatureAccordion />
        </div>
      </section>

      {/* Стили анимаций */}
      <style
        dangerouslySetInnerHTML={{
          __html: `
        @keyframes carousel-scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-scroll-left {
          animation: carousel-scroll 60s linear infinite;
          width: max-content;
        }
        @keyframes testimonial-right {
          0% { transform: translateX(-50%); }
          100% { transform: translateX(0); }
        }
        @keyframes testimonial-left {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .testimonial-track-top {
          animation: testimonial-right 80s linear infinite;
        }
        .testimonial-track-bottom {
          animation: testimonial-left 80s linear infinite;
        }
        .testimonial-track-third {
          animation: testimonial-right 70s linear infinite;
        }
      `,
        }}
      />

      {/* ═══ TESTIMONIALS ═══ */}
      <section className="py-24 px-6 overflow-hidden">
        <div className="max-w-5xl mx-auto text-center mb-16">
          <div className="text-3xl md:text-[2.75rem] font-medium tracking-tight mb-6">
            <BlurRevealWords
              text="Trusted by people who"
              className="block"
              gradient
            />
            <span className="block">
              <BlurRevealWords
                text="care about their"
                className="inline"
                gradient
              />
            </span>
            <BlurRevealWords
              text="memories"
              className="block font-serif italic"
              gradient
            />
          </div>
          <div className="relative flex items-center justify-center w-fit mx-auto">
            <Image
              src="/assets/img/memories/laurel.svg"
              alt=""
              className="h-[72px]"
              width={144}
              height={72}
            />
            <span
              className="absolute text-6xl font-medium"
              style={{
                background: "linear-gradient(to bottom, #ffffff, #555555)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              4.5
            </span>
          </div>
          <p className="text-white/30 text-sm mt-3">
            reviews from users worldwide
          </p>
        </div>

        {/* Верхний ряд — движется влево → вправо */}
        <div
          className="mb-4 overflow-hidden"
          onMouseEnter={(e) => {
            const track = e.currentTarget.querySelector(
              ".testimonial-track-top",
            ) as HTMLElement;
            track?.getAnimations().forEach((a) => {
              a.playbackRate = 0.2;
            });
          }}
          onMouseLeave={(e) => {
            const track = e.currentTarget.querySelector(
              ".testimonial-track-top",
            ) as HTMLElement;
            track?.getAnimations().forEach((a) => {
              a.playbackRate = 1;
            });
          }}
        >
          <div
            className="flex gap-8 testimonial-track-top"
            style={{ width: "max-content" }}
          >
            {[...Array(2)].map((_, setIdx) => (
              <div key={setIdx} className="flex gap-4 shrink-0">
                {[
                  {
                    text: "I used to screenshot recipes and lose them forever. Now they're all in one album.",
                    author: "@jessica_k",
                    w: "255px",
                  },
                  {
                    text: "Made albums for every trip this year. It's so satisfying to scroll through them.",
                    author: "@mark.travels",
                    w: "270px",
                  },
                  {
                    text: "My camera roll had 12,000 photos with zero order. MonClips finally fixed that.",
                    author: "@priya_m",
                    w: "260px",
                  },
                  {
                    text: "I showed this to my mom and she organized 10 years of photos in one weekend.",
                    author: "@daniel.rc",
                    w: "310px",
                  },
                  {
                    text: "Best $0.99 I spend every month. Way better than paying for iCloud.",
                    author: "@sofia.lens",
                    w: "285px",
                  },
                  {
                    text: "The vertical feed is addictive. I keep rediscovering old memories before bed.",
                    author: "@tomasz.w",
                    w: "265px",
                  },
                  {
                    text: "Finally an app that lets me organize photos the way I want, not how AI decides.",
                    author: "@rachel_ny",
                    w: "255px",
                  },
                  {
                    text: "Saved all my kids' school photos into one album. Now I can actually find them.",
                    author: "@lucas.foto",
                    w: "305px",
                  },
                ].map((review, i) => (
                  <div
                    key={`${setIdx}-${i}`}
                    className="shrink-0 px-3 md:px-4 py-4 md:py-6"
                    style={{ width: review.w }}
                  >
                    <p className="text-white/90 text-lg md:text-xl font-medium leading-snug mb-4 italic">
                      {review.text}
                    </p>
                    <p className="text-white/30 text-sm">{review.author}</p>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>

        {/* Нижний ряд — движется вправо → влево */}
        <div
          className="overflow-hidden"
          onMouseEnter={(e) => {
            const track = e.currentTarget.querySelector(
              ".testimonial-track-bottom",
            ) as HTMLElement;
            track?.getAnimations().forEach((a) => {
              a.playbackRate = 0.2;
            });
          }}
          onMouseLeave={(e) => {
            const track = e.currentTarget.querySelector(
              ".testimonial-track-bottom",
            ) as HTMLElement;
            track?.getAnimations().forEach((a) => {
              a.playbackRate = 1;
            });
          }}
        >
          <div
            className="flex gap-8 testimonial-track-bottom"
            style={{ width: "max-content" }}
          >
            {[...Array(2)].map((_, setIdx) => (
              <div key={setIdx} className="flex gap-4 shrink-0">
                {[
                  {
                    text: "I save workout videos from Instagram straight into my 'Training' album. So handy.",
                    author: "@emma.creates",
                    w: "265px",
                  },
                  {
                    text: "Notes on photos are a game changer. I write where we ate, what we ordered.",
                    author: "@alex.j",
                    w: "310px",
                  },
                  {
                    text: "Three months in and I've organized every photo since 2018. Life changing.",
                    author: "@nina.photo",
                    w: "300px",
                  },
                  {
                    text: "I set reminders to practice guitar every Tuesday. Now I actually stick to it.",
                    author: "@chris.b",
                    w: "260px",
                  },
                  {
                    text: "I can save photos from WhatsApp directly into albums now. Why didn't this exist before?",
                    author: "@maria.v",
                    w: "275px",
                  },
                  {
                    text: "Started using it to save apartment listings. Ended up organizing my whole life.",
                    author: "@james.k",
                    w: "310px",
                  },
                  {
                    text: "My kids love scrolling through the feed before bed. It's become our little tradition.",
                    author: "@sarah.m",
                    w: "270px",
                  },
                  {
                    text: "Honestly the best way to keep track of everything visual. Recipes, outfits, places.",
                    author: "@david.r",
                    w: "265px",
                  },
                ].map((review, i) => (
                  <div
                    key={`${setIdx}-${i}`}
                    className="shrink-0 px-3 md:px-4 py-4 md:py-6"
                    style={{ width: review.w }}
                  >
                    <p className="text-white/90 text-lg md:text-xl font-medium leading-snug mb-4 italic">
                      {review.text}
                    </p>
                    <p className="text-white/30 text-sm">{review.author}</p>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>

        {/* Третий ряд — только мобильный, движется вправо */}
        <div
          className="overflow-hidden md:hidden"
          onMouseEnter={(e) => {
            const track = e.currentTarget.querySelector(
              ".testimonial-track-third",
            ) as HTMLElement;
            track?.getAnimations().forEach((a) => {
              a.playbackRate = 0.2;
            });
          }}
          onMouseLeave={(e) => {
            const track = e.currentTarget.querySelector(
              ".testimonial-track-third",
            ) as HTMLElement;
            track?.getAnimations().forEach((a) => {
              a.playbackRate = 1;
            });
          }}
        >
          <div
            className="flex gap-4 testimonial-track-third"
            style={{ width: "max-content" }}
          >
            {[...Array(2)].map((_, setIdx) => (
              <div key={setIdx} className="flex gap-4 shrink-0">
                {[
                  {
                    text: "Finally my phone has space again. All photos safe in MonClips.",
                    author: "@kate.p",
                    w: "220px",
                  },
                  {
                    text: "Way better than any cloud storage I've tried before.",
                    author: "@omar.h",
                    w: "210px",
                  },
                  {
                    text: "The album system just makes sense. Simple and clean.",
                    author: "@lisa.t",
                    w: "215px",
                  },
                  {
                    text: "Saved all my travel photos by country. So easy to browse now.",
                    author: "@max.r",
                    w: "230px",
                  },
                  {
                    text: "I use it daily. Best app on my phone honestly.",
                    author: "@anna.k",
                    w: "210px",
                  },
                  {
                    text: "Perfect for saving recipes from TikTok into one place.",
                    author: "@ben.c",
                    w: "225px",
                  },
                ].map((review, i) => (
                  <div
                    key={`${setIdx}-${i}`}
                    className="shrink-0 px-3 py-4"
                    style={{ width: review.w }}
                  >
                    <p className="text-white/90 text-lg font-medium leading-snug mb-4 italic">
                      {review.text}
                    </p>
                    <p className="text-white/30 text-sm">{review.author}</p>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ PRICING ═══ */}
      <PricingSection />

      {/* ═══ PRIVACY ═══ */}
      <section
        className="pt-24 pb-24 px-6"
        style={{
          background:
            "radial-gradient(circle at 50% 35%, rgba(242,207,64,0.07) 0%, rgba(242,207,64,0.02) 25%, transparent 50%)",
        }}
      >
        <div className="max-w-4xl mx-auto rounded-3xl px-12 pb-12 md:px-16 md:pb-16 pt-16 text-center">
          {/* Глаз с замком внутри */}
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
            <div className="text-3xl md:text-[2.75rem] font-medium tracking-tight mb-6">
              <BlurRevealWords
                text="Built for privacy."
                className="block"
                gradient
              />
              <span className="block">
                <BlurRevealWords text="Your" className="inline" gradient />{" "}
                <BlurRevealWords
                  text="memories"
                  className="inline font-serif italic"
                  gradient
                />{" "}
                <BlurRevealWords
                  text="are safe with us."
                  className="inline"
                  gradient
                />
              </span>
            </div>
          </BlurScaleBlock>

          <BlurScaleBlock delay={400}>
            <FadeUpWords
              text="Your photos are stored securely with world-leading cloud providers. We don't look at them, we don't sell them, we don't use them for ads. Your memories stay yours."
              className="text-white/40 text-base md:text-xl leading-relaxed max-w-xl mx-auto"
            />
          </BlurScaleBlock>
        </div>
      </section>

      {/* ═══ FAQ ═══ */}
      <section className="py-24 px-6">
        <div className="max-w-3xl mx-auto">
          <div className="text-3xl md:text-[2.75rem] font-medium tracking-tight text-center mb-14">
            <BlurRevealWords text="Have a" className="inline" gradient />{" "}
            <BlurRevealWords
              text="question?"
              className="inline font-serif italic"
              gradient
            />
          </div>

          <FaqAccordion
            items={[
              {
                q: "What is MonClips?",
                a: "MonClips is an app that helps you save, organize, and browse your photos and videos. Create albums, add notes, and enjoy a vertical feed of your memories — all in one place.",
              },
              {
                q: "How do I organize my photos with MonClips?",
                a: "Save photos from your camera roll or any chat, then sort them into albums — by trip, person, mood, or anything you like. Add notes to keep context. It's your system, your rules.",
              },
              {
                q: "Is the app free?",
                a: "Yes, MonClips is free to use. The free plan includes 500 photos and 50 videos. If you need more, Premium starts at $0.99/mo for 20,000 photos and 500 videos.",
              },
              {
                q: "Do you sell my data?",
                a: "Never. Your photos are stored securely with world-leading cloud providers. We don't look at them, we don't sell them, and we don't use them for ads. Your memories stay yours.",
              },
              {
                q: "Can I save photos from chats and other apps?",
                a: "Yes! You can save photos and videos from WhatsApp, Telegram, Instagram, or any other app directly into MonClips albums with one tap.",
              },
              {
                q: "Will my photos disappear if I delete them from my phone?",
                a: "No. MonClips is not a backup — it's a separate storage. Once uploaded, your photos live in the cloud independently. Delete them from your phone, free up space — they'll stay safe in MonClips.",
              },
              {
                q: "Is MonClips really cheaper than iCloud or Google Photos?",
                a: "It depends on how you use cloud storage. iCloud and Google Photos charge for gigabytes — and most of that space goes to backups you never open. MonClips charges for the number of photos and videos you actually want to keep. Premium gives you 20,000 photos and 500 videos for just $0.99/mo.",
              },
            ]}
          />
        </div>
      </section>

      {/* ═══ CTA ═══ */}
      <section id="download" className="py-24 px-6">
        <div
          className="max-w-4xl mx-auto text-center rounded-3xl py-20 px-8"
          style={{
            background:
              "radial-gradient(ellipse at 50% 50%, rgba(242,207,64,0.08) 0%, rgba(242,207,64,0.02) 40%, transparent 70%)",
            border: "1px solid rgba(255,255,255,0.04)",
          }}
        >
          <BlurScaleBlock delay={0}>
            <div className="text-3xl md:text-[2.75rem] font-medium tracking-tight mb-6">
              <BlurRevealWords text="Ready to" className="inline" gradient />{" "}
              <BlurRevealWords
                text="organize"
                className="inline font-serif italic"
                gradient
              />{" "}
              <BlurRevealWords text="your life?" className="inline" gradient />
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
              className="btn-glow rounded-full h-13 px-10 text-base font-semibold text-neutral-900 cursor-pointer hover:scale-[1.03] transition-transform mb-6"
              url="https://monclips.com/download_memories"
              eventName="memories_download_app_popup_download"
            >
              Get Started Free
            </QrGlowButton>
          </BlurScaleBlock>
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
          <h1>MonClips — Built for real memories, Trusted by thousands</h1>
          <p>
            Save photos and videos from anywhere. Organize them your way. Find
            any moment instantly.
          </p>

          <h2>Features</h2>
          <ul>
            <li>
              Save from anywhere — Camera roll, chats, screenshots, grab
              anything in one tap and it lands in MonClips.
            </li>
            <li>
              Your albums, your rules — Create albums that make sense to you. By
              trip, by person, by mood.
            </li>
            <li>
              Relive and remember — Scroll your vertical feed, get reminders on
              special dates, and rediscover forgotten moments.
            </li>
          </ul>

          <h2>Trusted by thousands</h2>
          <p>4.5 rating from users worldwide.</p>

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

          <h2>Privacy</h2>
          <p>
            Your photos are stored securely with world-leading cloud providers.
            We do not look at them, sell them, or use them for ads.
          </p>

          <h2>FAQ</h2>
          <dl>
            <dt>What is MonClips?</dt>
            <dd>
              MonClips is an app that helps you save, organize, and browse your
              photos and videos.
            </dd>
            <dt>Is the app free?</dt>
            <dd>Yes, the free plan includes 500 photos and 50 videos.</dd>
            <dt>Will my photos disappear if I delete them from my phone?</dt>
            <dd>
              No. MonClips is a separate storage. Once uploaded, your photos
              live in the cloud independently.
            </dd>
          </dl>

          <p>
            <a href="https://monclips.com/download_memories">
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
