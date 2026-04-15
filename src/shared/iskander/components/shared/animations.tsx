"use client";

import { useEffect, useRef, useState } from "react";

// Blur → Clear по словам (последовательно, с подъёмом)
export function BlurRevealWords({ text, className = "", gradient = false }: { text: string; className?: string; gradient?: boolean }) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.3 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const words = text.split(" ");

  return (
    <div ref={ref} className={className}>
      {words.map((word, i) => (
        <span
          key={i}
          className="inline-block mr-[0.3em] transition-all duration-700"
          style={{
            filter: visible ? "blur(0px)" : "blur(12px)",
            opacity: visible ? 1 : 0,
            transform: visible ? "translateY(0)" : "translateY(8px)",
            transitionDelay: `${i * 80}ms`,
            ...(gradient ? {
              background: "linear-gradient(to bottom, #ffffff, #555555)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            } : {}),
          }}
        >
          {word}
        </span>
      ))}
    </div>
  );
}

// Blur + Scale (весь блок целиком)
export function BlurScaleBlock({ children, className = "", delay = 0, style = {} }: { children: React.ReactNode; className?: string; delay?: number; style?: React.CSSProperties }) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.1 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`transition-all duration-1000 ease-out ${className}`}
      style={{
        ...style,
        filter: visible ? "blur(0px)" : "blur(20px)",
        opacity: visible ? 1 : 0,
        transform: visible ? "scale(1)" : "scale(0.95)",
        transitionDelay: `${delay}ms`,
      }}
    >
      {children}
    </div>
  );
}

// Fade Up по словам
export function FadeUpWords({ text, className = "" }: { text: string; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.3 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const words = text.split(" ");

  return (
    <div ref={ref} className={className}>
      {words.map((word, i) => (
        <span
          key={i}
          className="inline-block mr-[0.3em] transition-all duration-600 ease-out"
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? "translateY(0)" : "translateY(20px)",
            transitionDelay: `${i * 60}ms`,
          }}
        >
          {word}
        </span>
      ))}
    </div>
  );
}
