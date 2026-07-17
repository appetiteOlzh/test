import { FC, ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";

export const Category: FC<CategoryProps & { children: ReactNode }> = ({
  title,
  children,
  author: authorItem,
}) => {
  return (
    <div className="container mx-auto px-4">
      <div className="flex flex-col pt-4 md:pt-20 -mx-2.5">
        <div className="basis-full min-w-0 px-2.5">
          <div className="flex flex-wrap items-center">
            <div className="basis-10">
              <Link href={`/${authorItem.username}`}>
                <Image
                  src="/assets/icons/back.svg"
                  alt="Back"
                  width={32}
                  height={32}
                  className="w-8 h-8 -ml-2"
                />
              </Link>
            </div>
            <h1 className="font-secondary font-bold md:text-3xl text-xl leading-none flex-1 min-w-0 text-center">
              {title}
            </h1>
            <div className="basis-10"></div>
          </div>
        </div>
        <div className="px-2.5 basis-full pt-12 md:pt-20 pb-14 md:pb-28">
          {children}
        </div>
      </div>
    </div>
  );
};
