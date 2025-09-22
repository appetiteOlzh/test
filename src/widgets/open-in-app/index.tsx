import Image from "next/image";
import { cookies } from "next/headers";
import { FC } from "react";
import { useTranslations } from "next-intl";
import cn from "classnames";
import { matchDevice } from "@/shared/lib/match-device";
import logo from "./logo.png";

type Props = {
  style?: "dark" | "transparent";
};

export const OpenInAppHeader: FC<Props> = ({ style = "dark" }) => {
  const t = useTranslations("app");
  const userAgent = cookies().get("deviceOs")?.value;
  if (matchDevice(userAgent).isWeb) return null;

  const link = matchDevice(userAgent).isIos
    ? String(process.env.iosAppUrl)
    : String(process.env.androidAppUrl);

  return (
    <>
      <a
        href={link}
        className={cn("fixed top-0 left-0 w-full z-50 py-3", {
          "bg-dark": style === "dark",
        })}
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
                className={cn("font-medium text-[10px] leading-3 ", {
                  "text-inactive": style === "dark",
                  "text-[#9E9E9E]": style === "transparent",
                })}
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
