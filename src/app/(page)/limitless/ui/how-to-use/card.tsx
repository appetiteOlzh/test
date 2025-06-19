import Image from "next/image";
import { FC } from "react";

export const Card: FC<{ image: string; title: string }> = (props) => {
  const { image, title } = props;

  return (
    <div className="px-7 pt-9 pb-8 rounded-[2.25rem] bg-[#1A2927] h-full card-radial-gradient relative overflow-hidden">
      <div className="relative z-10">
        <div className="basis-full text-center gradient-text">
          <h4 className="font-semibold text-xl mb-4 text-balance leading-none min-h-[60px] flex items-center">
            {title}
          </h4>
        </div>
        <div className="basis-full">
          <div className="mx-auto relative">
            <Image
              src={image}
              width={205.32}
              height={445.02}
              alt=""
              className="mx-auto w-full rounded-[26px]"
              quality={100}
            />
            <div className="absolute shadow-[0px_0px_27px_1px_rgba(0,188,150,0.25)] top-0 left-0 w-full h-full rounded-[26px]"></div>
          </div>
        </div>
      </div>
    </div>
  );
};
