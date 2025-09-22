import Image from "next/image";
import { FC } from "react";

export const Widget: FC = () => {
  return (
    <aside className="absolute right-4 bottom-9">
      <div className="flex flex-col space-y-9">
        <div className="basis-7">
          <Image
            src="/assets/icons/widge-icons/heart.svg"
            width={28}
            height={28}
            alt=""
          />
        </div>
        <div className="basis-7">
          <Image
            src="/assets/icons/widge-icons/albums.svg"
            width={28}
            height={28}
            alt=""
          />
        </div>
        <div className="basis-7">
          <Image
            src="/assets/icons/widge-icons/trash.svg"
            width={28}
            height={28}
            alt=""
          />
        </div>
        <div className="basis-7">
          <Image
            src="/assets/icons/widge-icons/share.svg"
            width={28}
            height={28}
            alt=""
          />
        </div>
      </div>
    </aside>
  );
};
