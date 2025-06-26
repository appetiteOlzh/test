import Image from "next/image";
import { FC } from "react";

export const SectionTitle: FC<{ title: string; icon: string }> = ({
  icon,
  title,
}) => {
  return (
    <h2 className="text-h3-clamp mb-8">
      <div className="flex flex-wrap items-center">
        <div className="basis-9 md:basis-12">
          <Image
            src={icon}
            width={48}
            height={48}
            alt=""
            className="block w-9 md:w-12"
          />
        </div>
        <div className="flex-1 min-w-0 pl-4 md:pl-6">{title}</div>
      </div>
    </h2>
  );
};
