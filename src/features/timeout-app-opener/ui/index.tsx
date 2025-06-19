"use client";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { useTranslations } from "next-intl";
import { QRCode } from "react-qrcode-logo";
import { Modal } from "@/shared/ui/modal";
import { matchDevice } from "@/shared/lib/match-device";
import {
  AppStoreButton,
  AppStoreCustomButton,
  GoogleplayButton,
  GoogleplayCustomButton,
} from "@/shared/ui";

const sec15 = 15 * 1000;

export const AppOpenerModal = () => {
  const t = useTranslations("Sharing");
  const t_common = useTranslations("common");
  const [isOpen, setOpen] = useState(false);
  const [userAgent, setUserAgent] = useState("");
  const [fullUrl, setFullUrl] = useState("");

  const pathname = usePathname();

  useEffect(() => {
    if (typeof window !== "undefined") {
      setFullUrl(`${window.location.origin}${pathname}`);
    }
  }, [pathname]);

  useEffect(() => {
    setTimeout(() => {
      setOpen(true);
    }, sec15);
    setUserAgent(window.navigator.userAgent);
  }, []);

  return (
    <Modal
      isOpen={isOpen}
      onClose={() => setOpen(false)}
      size="sm"
      isRestricted
    >
      <div className="p-6 text-center">
        <div className="mb-6">
          {matchDevice(userAgent).isWeb ? (
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
          ) : (
            <Image
              src="/assets/img/favicon-lg.png"
              width={90}
              height={90}
              alt=""
              className="mx-auto"
            />
          )}
        </div>
        <h4
          className="gradient-text text-center text-xl leading-none mb-4 font-bold"
          dangerouslySetInnerHTML={{
            __html: matchDevice(userAgent).isWeb ? t.raw("qr") : t.raw("no_qr"),
          }}
        ></h4>
        <p
          className="text-input-default mb-8 font-medium leading-none"
          dangerouslySetInnerHTML={{
            __html: t.raw("download_from_stores_extended_text"),
          }}
        ></p>
        {matchDevice(userAgent).isIos && (
          <AppStoreCustomButton className="block" />
        )}
        {matchDevice(userAgent).isAndroid && (
          <GoogleplayCustomButton className="block" />
        )}
        {matchDevice(userAgent).isWeb ? (
          <div className="flex flex-wrap -mx-2 justify-center">
            <div className="basis-1/2 px-2">
              <GoogleplayButton />
            </div>
            <div className="basis-1/2 px-2">
              <AppStoreButton />
            </div>
          </div>
        ) : (
          <button
            onClick={() => setOpen(false)}
            className="w-full p-4 text-accent font-bold text-base mt-2"
          >
            {t_common("not_now")}
          </button>
        )}
      </div>
    </Modal>
  );
};
