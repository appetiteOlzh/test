"use client";
import { usePathname } from "next/navigation";
import { FC, useEffect, useState } from "react";
import { QRCode } from "react-qrcode-logo";
import cn from "classnames";
import { Modal } from "@/shared/ui/modal";
import { AppStoreButton, GoogleplayButton } from "@/shared/ui";
import { useTranslations } from "next-intl";
import { twMerge } from "tailwind-merge";
import { sendGAEvent } from "@/shared/lib/sendGa";
// media

export const AppOpenerButton: FC<{
  buttonText: string;
  className?: string;
}> = ({ buttonText, className }) => {
  const t = useTranslations("app");
  const [fullUrl, setFullUrl] = useState("");
  const [isOpen, setOpen] = useState(false);
  const pathname = usePathname();

  const onClick = () => {
    if (typeof window !== "undefined" && typeof window.gtag === "function") {
      globalThis.gtag("event", "desktop_popup");
    } else {
      sendGAEvent("desktop_popup");
    }
    // globalThis.gtag("event", "desktop_popup");
    setOpen(true);
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      setFullUrl(`${window.location.origin}${pathname}`);
    }
  }, [pathname]);

  return (
    <>
      <button
        className={twMerge(
          cn(
            "bg-gradient-to-br from-[#018C6E] via-[#014F42] to-[#035846] py-4 px-7 rounded-2xl text-yellow uppercase font-bold",
            className
          )
        )}
        onClick={onClick}
      >
        {buttonText}
      </button>
      <Modal
        isOpen={isOpen}
        onClose={() => setOpen(false)}
        size="sm"
        isRestricted
      >
        <div className="p-6 text-center">
          <div className="mb-6">
            <QRCode
              value={fullUrl}
              size={144}
              bgColor="transparent"
              fgColor="#fff"
              qrStyle="fluid"
              eyeRadius={8}
              style={{ margin: "auto" }}
              quietZone={0}
            />
          </div>
          <h4 className="gradient-text text-center text-xl leading-none mb-4 font-bold">
            {t("scan_qr")}
          </h4>
          <p className="text-input-default mb-6 font-medium">
            {t("app_stores")}
          </p>
          <div className="flex flex-wrap -mx-2 justify-center">
            <div className="basis-1/2 px-2">
              <GoogleplayButton />
            </div>
            <div className="basis-1/2 px-2">
              <AppStoreButton />
            </div>
          </div>
        </div>
      </Modal>
    </>
  );
};
