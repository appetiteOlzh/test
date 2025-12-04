import { FC } from "react";
import Image from "next/image";
import Link from "next/link";
import { useTranslations } from "next-intl";
import cn from "classnames";
import { Select } from "../header/select";
// import monclips from "/public/assets/img/monclips.svg";
import tiktok from "/public/assets/img/social/tiktok.svg";
import instagram from "/public/assets/img/social/instagram.svg";

export const FooterNew: FC<{ deskOnly?: boolean }> = ({ deskOnly }) => {
  const t = useTranslations("footer");

  return (
    <footer
      className={cn(
        "relative md:overflow-hidden pt-9 md:pb-9 pb-24 font-secondary text-light",
        { "sm:block hidden": deskOnly }
      )}
    >
      <div className="container mx-auto px-4">
        <div className="flex md:flex-row-reverse flex-wrap sm:justify-between justify-center -mx-2">
          <div className="basis-auto">
            <ul className="mb-0 md:text-right text-center flex flex-col md:flex-row flex-wrap md:space-x-[30px] items-center">
              <li className="mb-3">
                <Select />
              </li>
              <li className="mb-3 md:hidden order-1 md:order-none">
                <div className="flex flex-wrap items-center md:justify-end justify-center -mx-2">
                  <div className="flex-none px-2">
                    <a
                      href="https://www.tiktok.com/@monclipsapp"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Image src={tiktok} alt="Tiktok" />
                    </a>
                  </div>
                  <div className="flex-none px-2">
                    <a
                      href="https://www.instagram.com/monclipsapp"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Image src={instagram} alt="Instagram" />
                    </a>
                  </div>
                </div>
              </li>
              <li className="mb-3">
                <a href="mailto:support@monclips.com">support@monclips.com</a>
              </li>
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
          <div className="basis-auto">
            <div
              style={{
                margin: "18px 0px 30px",
                height: "1px",
                backgroundColor: "#B9B9B9",
              }}
              className="md:hidden"
            ></div>
            <p className="text-center">MONCLIPS, INC. 2025</p>
          </div>
        </div>
      </div>
    </footer>
  );
};
