import Image from "next/image";
import { FC } from "react";
import { useTranslations } from "next-intl";
import { ShareButton } from "@/features/share-button";

export const Author: FC<{ author: UserProps }> = ({ author }) => {
  const t = useTranslations("Sharing");
  return (
    <div className="px-2.5 basis-full mb-6 md:mb-10 w-[375px] max-w-full">
      <div className="flex flex-wrap flex-row gap-4">
        {author.avatar ? (
          <Image
            src={author.avatar}
            alt={author.name}
            width={100}
            height={100}
            className="rounded-full w-[100px] h-[100px]"
          />
        ) : (
          <div className="rounded-full w-[100px] h-[100px] bg-[#22322F] flex items-center justify-center text-white font-bold text-xl">
            <svg
              width="32"
              height="32"
              viewBox="0 0 32 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clip-path="url(#clip0_10729_73930)">
                <path
                  d="M16.1583 17.0409C16.065 17.0276 15.945 17.0276 15.8383 17.0409C13.4917 16.9609 11.625 15.041 11.625 12.681C11.625 10.2676 13.5717 8.30762 15.9983 8.30762C18.4117 8.30762 20.3717 10.2676 20.3717 12.681C20.3583 15.041 18.505 16.9609 16.1583 17.0409Z"
                  stroke="#466765"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M24.9831 25.8411C22.6098 28.0144 19.4631 29.3344 15.9964 29.3344C12.5298 29.3344 9.3831 28.0144 7.00977 25.8411C7.1431 24.5877 7.9431 23.3611 9.36977 22.4011C13.0231 19.9744 18.9964 19.9744 22.6231 22.4011C24.0498 23.3611 24.8498 24.5877 24.9831 25.8411Z"
                  stroke="#466765"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M15.9993 29.3337C23.3631 29.3337 29.3327 23.3641 29.3327 16.0003C29.3327 8.63653 23.3631 2.66699 15.9993 2.66699C8.63555 2.66699 2.66602 8.63653 2.66602 16.0003C2.66602 23.3641 8.63555 29.3337 15.9993 29.3337Z"
                  stroke="#466765"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </g>
              <defs>
                <clipPath id="clip0_10729_73930">
                  <rect width="32" height="32" fill="white" />
                </clipPath>
              </defs>
            </svg>
          </div>
        )}
        <div className="flex-1 min-w-0 pt-3">
          <h4 className="text-2xl font-bold mb-2 leading-none">
            {author.name}
          </h4>
          <p className="text-xs text-[#999999] font-medium leading-normal mb-4">
            {author.about || t("no_about")}
          </p>
          <div className="flex w-full gap-1.5">
            {author.phone && (
              <a href={`tel:${author.phone}`}>
                <Image
                  src="/assets/icons/social/phone.svg"
                  alt="Phone"
                  width={40}
                  height={40}
                />
              </a>
            )}
            {author.whatsappPhone && (
              <a href={`https://wa.me/${author.whatsappPhone}`}>
                <Image
                  src="/assets/icons/social/wa.svg"
                  alt="WhatsApp"
                  width={40}
                  height={40}
                />
              </a>
            )}
            {author.telegramAccount && (
              <a href={`https://t.me/${author.telegramAccount}`}>
                <Image
                  src="/assets/icons/social/tg.svg"
                  alt="Telegram"
                  width={40}
                  height={40}
                />
              </a>
            )}
            {author.instagramLink && (
              <a href={`https://www.instagram.com/${author.instagramLink}`}>
                <Image
                  src="/assets/icons/social/insta.svg"
                  alt="Instagram"
                  width={40}
                  height={40}
                />
              </a>
            )}
            {author.tiktokLink && (
              <a href={`https://www.tiktok.com/@${author.tiktokLink}`}>
                <Image
                  src="/assets/icons/social/ttok.svg"
                  alt="TikTok"
                  width={40}
                  height={40}
                />
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
