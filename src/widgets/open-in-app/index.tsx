import Image from "next/image";
import { headers } from "next/headers";
import { matchDevice } from "@/shared/lib/match-device";
import logo from "./logo.png";
import { useTranslations } from "next-intl";

export const OpenInAppHeader = () => {
  const t = useTranslations("app");
  const userAgent = headers().get("user-agent");
  if (matchDevice(userAgent).isWeb) return null;

  const link = matchDevice(userAgent).isIos
    ? String(process.env.iosAppUrl)
    : String(process.env.androidAppUrl);

  return (
    <>
      <a
        href={link}
        className="fixed top-0 left-0 w-full bg-dark z-50 py-3"
        rel="noopener nofollow"
      >
        <div className="container px-4 mx-auto">
          <div className="flex items-center">
            <div className="flex-none">
              <Image src={logo} alt="monclips" width={30} height={30} />
            </div>
            <div className="flex-1 px-2.5">
              <p className="font-semibold text-sm leading-4">
                {t("monclips_gallery")}
              </p>
              <p
                className="font-medium text-[10px] leading-3 text-inactive"
                dangerouslySetInnerHTML={{ __html: t.raw("open_in_app") }}
              ></p>
            </div>
            <div className="flex-none">
              <div className="py-1.5 px-4 uppercase font-semibold text-sm bg-[#0E84F6] rounded-2xl font-apple leading-[1.125rem]">
                {t("button_action")}
              </div>
            </div>
          </div>
        </div>
      </a>
      <div className="h-8"></div>
    </>
  );
};
