"use client";
import { FC, useState, useMemo } from "react";
import cn from "classnames";
import { useTranslations } from "next-intl";

export const ShareButton: FC<{ className?: string }> = ({ className }) => {
  const t = useTranslations("Sharing");
  const [copied, setCopied] = useState(false);

  const isMobile = useMemo(() => {
    if (typeof navigator === "undefined") return false;
    return /Android|iPhone|iPad/i.test(navigator.userAgent);
  }, []);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleShare = async () => {
    const url = window.location.href;

    const shareData = {
      url,
    };

    if (navigator.share && isMobile) {
      try {
        await navigator.share(shareData);
      } catch (err: unknown) {
        if (err instanceof Error && err.name !== "AbortError") {
          copyToClipboard();
        }
      }
    } else {
      copyToClipboard();
    }
  };

  return (
    <button
      onClick={handleShare}
      className={cn(
        "flex items-center justify-center relative pointer-events-auto w-full bg-gradient-to-b from-[#018C6E] to-[#014F42] rounded-2xl font-bold text-base h-12",
        className,
      )}
      title="Share"
      aria-label={t("share") || "Share"}
    >
      <span className="gradient-text">{t("share")}</span>
      {copied && (
        <span className="absolute top-full translate-y-2 left-1/2 -translate-x-1/2 bg-black/70 text-white text-bold text-sm px-3 py-2 rounded">
          {t("copied")}
        </span>
      )}
    </button>
  );
};
