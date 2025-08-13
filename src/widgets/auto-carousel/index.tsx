import Image from "next/image";
import { FC } from "react";
import cn from "classnames";

export const AutoCarousel: FC<{
  isReversed?: boolean;
  imageList: string[];
}> = ({ imageList, isReversed = false }) => {
  return (
    <div className="w-full overflow-hidden">
      <div
        className={cn("flex max-w-max gap-2", {
          "animate-[scroll_33s_linear_infinite_alternate]": !isReversed,
          "animate-[scroll_33s_linear_infinite_alternate-reverse]": isReversed,
        })}
      >
        {imageList.map((image, index) => (
          <div
            key={index}
            className="sm:min-w-[170px] min-w-[148px] opacity-80"
          >
            <Image
              src={image}
              alt={`Slide ${index + 1}`}
              className="sm:w-[170px] sm:h-[274px] w-[148px] h-[238px] object-cover object-center"
              width={170}
              height={274}
            />
          </div>
        ))}
      </div>
    </div>
  );
};
