import Image from "next/image";
import { FC } from "react";

export const Card: FC<{ image: string; title: string; text?: string }> = (
  props
) => {
  const { image, title, text } = props;

  return (
    <div className="px-6 pb-6 rounded-[2.25rem] bg-[#1A2927] h-full card-radial-gradient relative overflow-hidden">
      <div className="relative z-10">
        <div className="basis-full">
          <div className="relative -mx-6 mb-4 h-72 overflow-hidden">
            <Image
              src={image}
              width={206}
              height={446}
              alt=""
              className="mx-auto w-full rounded-[26px]"
              quality={100}
            />
            <div className="absolute shadow-[0px_0px_27px_1px_rgba(0,188,150,0.25)] top-0 left-0 w-full h-full rounded-[26px]"></div>
          </div>
        </div>
        <div className="basis-full text-yellow-darker">
          <h4 className="font-semibold text-xl mb-4 text-balance leading-none flex">
            {title}
          </h4>
        </div>
        <p
          dangerouslySetInnerHTML={{ __html: text ?? "" }}
          className="text-gray-300"
        ></p>
      </div>
    </div>
  );
};
