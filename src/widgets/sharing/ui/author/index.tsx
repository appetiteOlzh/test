import Image from "next/image";
import { FC } from "react";
import { useTranslations } from "next-intl";
import { ShareButton } from "@/features/share-button";

export const Author: FC<{ author: CategoryProps["author"] }> = ({ author }) => {
  const t = useTranslations("Sharing");
  return (
    <div className="px-2.5 basis-full mb-6 md:mb-10 max-w-[570px]">
      <div className="flex flex-wrap flex-row items-center gap-4 md:gap-5">
        <Image
          src={author.avatar}
          alt=""
          width={100}
          height={100}
          className="rounded-full w-12 md:w-[100px] h-12 md:h-[100px]"
        />
        <div className="flex-1 min-w-0">
          <h4 className="text-xl font-bold mb-2.5 text-accent leading-none">
            {author.name}
          </h4>
          <p className="text-sm text-[#466765] opacity-70 font-medium leading-none">
            {author.about}
          </p>
        </div>
        <div className="flex w-full gap-2.5">
          <div className="flex-1">
            <ShareButton />
          </div>
          {author.phone && (
            <div className="flex-1">
              <a
                href={`tel:${author.phone}`}
                className="w-full bg-gradient-to-b from-[#018C6E] to-[#014F42] rounded-2xl font-bold text-base h-12 flex items-center justify-center overflow-hidden group relative"
              >
                <div className="bg-background rounded-2xl flex items-center justify-center group-hover:bg-transparent transition-colors absolute inset-px bottom-[1.5px]">
                  <span className="gradient-text">{t("connect")}</span>
                </div>
              </a>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
