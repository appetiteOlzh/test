import Image from "next/image";
import { FC } from "react";
import cn from "classnames";

export const Slider: FC<{ isReversed?: boolean; imageList: string[] }> = ({
  imageList,
  isReversed = false,
}) => {
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
              className="sm:w-[170px] w-[148px] h-auto"
              width={170}
              height={274}
            />
          </div>
        ))}
      </div>
    </div>
  );
};
{
  /* <Swiper
      spaceBetween={8}
      slidesPerView="auto"
      autoplay={{ delay, disableOnInteraction: false }}
      modules={[Autoplay]}
      loop
      cssMode
      wrapperClass="flex ease-linear"
      className="w-full"
      speed={15000}
      allowTouchMove={false}
    >
      {imageList.map((image, index) => (
        <SwiperSlide
          key={index}
          className="basis-[170px] min-w-[170px] h-[274px]"
        >
          <Image
            src={image}
            alt={`Slide ${index + 1}`}
            className="w-[170px] h-[274px]"
            width={170}
            height={274}
          />
        </SwiperSlide>
      ))}
    </Swiper> */
}
