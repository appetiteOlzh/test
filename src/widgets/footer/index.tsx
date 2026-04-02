import { FC } from "react";
import Image from "next/image";
import Link from "next/link";
import { useTranslations } from "next-intl";
import cn from "classnames";
import tiktok from "/public/assets/img/social/tiktok.svg";
import instagram from "/public/assets/img/social/instagram.svg";
import monclips from "/public/assets/img/monclips.svg";

export const Footer: FC<{ deskOnly?: boolean }> = ({ deskOnly }) => {
  const t = useTranslations("footer");

  return (
    <footer
      className={cn(
        "relative md:overflow-hidden pt-12 pb-12 font-secondary text-light",
        { "sm:block hidden": deskOnly },
      )}
    >
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap sm:justify-between justify-center -mx-2">
          <div className="px-2 basis-full md:basis-1/3">
            <div className="mb-4">
              <Image
                src={monclips}
                alt="Monslips"
                className="mx-auto"
                unoptimized
              />
            </div>
          </div>
          <div className="px-2 basis-full md:basis-1/3">
            <ul className="mb-0 md:text-right text-center">
              <li className="mb-3">
                <div className="flex flex-wrap items-center md:justify-end justify-center -mx-2">
                  <div className="flex-none px-2">
                    <a
                      href="https://www.tiktok.com/@monclipsapp"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Image src={tiktok} alt="Tiktok" unoptimized />
                    </a>
                  </div>
                  <div className="flex-none px-2">
                    <a
                      href="https://www.instagram.com/monclipsapp"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Image src={instagram} alt="Instagram" unoptimized />
                    </a>
                  </div>
                </div>
              </li>
              <li className="mb-3">
                <a href="mailto:support@monclips.com">support@monclips.com</a>
              </li>
            </ul>
          </div>
          <div className="px-2 basis-full md:basis-1/3 md:order-first">
            <ul className="mb-0 text-center md:text-left">
              <li className="mb-3">
                <Link href="/privacy-policy">{t("policy")}</Link>
              </li>
              <li className="mb-3">
                <Link href="/terms-of-service">{t("term")}</Link>
              </li>
              <li className="mb-3">
                <Link href="/eula">{t("eula")}</Link>
              </li>
            </ul>
          </div>
        </div>
        <div
          style={{
            margin: "18px 0px 30px",
            height: "1px",
            backgroundColor: "#466765",
          }}
        ></div>
        <p className="text-center">
          MONCLIPS, INC. 2026 <br />
        </p>
      </div>
    </footer>
  );
};

export { FooterNew } from "./footer-new";
