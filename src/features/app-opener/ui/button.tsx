"use client";
import { useTranslations } from "next-intl";
import { usePathname } from "next/navigation";
import { FC, useEffect, useState } from "react";
import { QRCode } from "react-qrcode-logo";
import cn from "classnames";
import { Modal } from "@/shared/ui/modal";
import { AppStoreButton, GoogleplayButton } from "@/shared/ui";
// media

export const AppOpenerButton: FC<{
  isPremium?: boolean;
  textVarity?: "family";
}> = ({ isPremium, textVarity }) => {
  const [fullUrl, setFullUrl] = useState("");
  const common_t = useTranslations("common");
  const sharing_t = useTranslations("Sharing");
  const [isOpen, setOpen] = useState(false);
  const pathname = usePathname();

  const onClick = () => {
    globalThis.gtag("event", "desktop_popup");
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
        className={cn(
          "bg-gradient-to-br from-[#018C6E] via-[#014F42] to-[#035846] py-4 px-7 rounded-2xl text-yellow uppercase font-bold",
          { "w-full md:w-80 block text-center": isPremium }
        )}
        onClick={onClick}
      >
        {textVarity === "family"
          ? common_t("download_monclips")
          : isPremium
          ? common_t("free_download")
          : common_t("open_in_monclips")}
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
          <h4
            className="gradient-text text-center text-xl leading-none mb-4 font-bold"
            dangerouslySetInnerHTML={{ __html: sharing_t.raw("qr") }}
          ></h4>
          <p className="text-input-default mb-6 font-medium">
            {sharing_t("download_from_stores")}
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
