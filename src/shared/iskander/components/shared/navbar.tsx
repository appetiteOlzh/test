"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Logo } from "./logo";
import { Button } from "../ui/button";

export function Navbar({
  links = [],
  ctaText = "Download",
  ctaHref = "#download",
  theme = "dark",
}: {
  links?: { label: string; href: string }[];
  ctaText?: string;
  ctaHref?: string;
  theme?: "dark" | "light";
}) {
  const [open, setOpen] = useState(false);

  const bg =
    theme === "dark"
      ? "bg-neutral-950/80 border-white/10"
      : "bg-white/80 border-neutral-200";
  const textColor =
    theme === "dark"
      ? "text-white/70 hover:text-white"
      : "text-neutral-600 hover:text-neutral-900";

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 backdrop-blur-xl border-b ${bg}`}
    >
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <Logo size="small" />

        {/* Десктопное меню */}
        <div className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`text-sm font-medium transition-colors ${textColor}`}
            >
              {link.label}
            </a>
          ))}
          <Button size="sm" render={<a href={ctaHref} />}>
            {ctaText}
          </Button>
        </div>

        {/* Мобильная кнопка */}
        <button
          className="md:hidden p-2"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </div>

      {/* Мобильное меню */}
      {open && (
        <div className={`md:hidden border-t ${bg} px-6 py-4 space-y-3`}>
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`block text-sm font-medium ${textColor}`}
              onClick={() => setOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <Button size="sm" className="w-full" render={<a href={ctaHref} />}>
            {ctaText}
          </Button>
        </div>
      )}
    </nav>
  );
}
