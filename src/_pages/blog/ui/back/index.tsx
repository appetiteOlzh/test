import { useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";
import backArrow from "./ArrowLeft.svg";

export const Back = () => {
  const t = useTranslations("common");

  return (
    <div className="mb-6 max-w-[780px] mx-auto">
      <Link
        href="/"
        prefetch={false}
        className="uppercase flex flex-wrap items-center"
      >
        <Image src={backArrow} alt="Back to Main" className="mr-3 block" />
        {t("back_to_main")}
      </Link>
    </div>
  );
};
