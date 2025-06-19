import Image from "next/image";
import Link from "next/link";
import { useTranslations } from "next-intl";
import tiktok from "/public/assets/img/social/tiktok.svg";
import instagram from "/public/assets/img/social/instagram.svg";
import monclips from "/public/assets/img/monclips.svg";

export const Footer = () => {
  const t = useTranslations("footer");

  return (
    <footer className="relative md:overflow-hidden pt-12 pb-12 font-secondary text-light">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap sm:justify-between justify-center -mx-2">
          <div className="px-2 basis-full md:basis-1/3">
            <div className="mb-4">
              <Image src={monclips} alt="Monslips" className="mx-auto" />
            </div>
          </div>
          <div className="px-2 basis-full md:basis-1/3">
            <ul className="mb-0 md:text-right text-center">
              <li className="mb-3">
                <div className="flex flex-wrap items-center md:justify-end justify-center -mx-2">
                  <div className="flex-none px-2">
                    <a
                      href="https://www.tiktok.com/@monclips.app?_t=8qud0MxXOY1&_r=1"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Image src={tiktok} alt="Tiktok" />
                    </a>
                  </div>
                  <div className="flex-none px-2">
                    <a
                      href="https://www.instagram.com/monclips.app?igsh=MWRtZzM3M3lobTB2Mw=="
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
          MONCLIPS, INC. 2024 <br />
          DOVER, DELAWARE
        </p>
      </div>
    </footer>
  );
};
