import Image from "next/image";
import { FC } from "react";
import { Widget } from "../widget";

type Props = {
  img: string;
};

export const Post: FC<Props> = ({ img }) => {
  return (
    <div className="relative select-none">
      <Image
        src={img}
        width={375}
        height={742}
        alt=""
        className="w-full h-full object-cover select-none"
        draggable={false}
      />
      <Widget />
    </div>
  );
};
