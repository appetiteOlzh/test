import Image from "next/image";
import { FC } from "react";

export const Album: FC = () => {
  return (
    <section>
      <div className="container pt-[10px] md:pt-[130px]" id="album">
        <div className="rounded-[36px] bg-[#101010] pt-10 md:pt-0 overflow-hidden">
          <div className="flex flex-wrap flex-row-reverse">
            <div className="basis-full lg:basis-1/2 flex flex-wrap content-center lg:pl-10 pl-[30px] pr-[26px] md:pr-0">
              <h2 className="text-h2-clamp text-yellow-darker uppercase font-black font-apple mb-3 md:mb-4">
                Альбом после мероприятия по одной ссылке
              </h2>
              <p className="text-lg font-bold max-w-[380px]">
                Новый формат для тех, кто хочет больше зарабатывать на своих
                мероприятиях
              </p>
            </div>
            <div className="basis-full lg:basis-1/2">
              <div className="relative lg:inline-block hidden">
                <Image
                  src="/assets/img/organize/shum-video-desk.png"
                  alt="Альбом после мероприятия по одной ссылке"
                  width={590}
                  height={628}
                  className="w-full h-auto"
                />
                <div className="absolute top-[42.1%] left-[74.18%] w-[16.07%] h-[32.86%] rounded-[13px] overflow-hidden rotate-[2.57deg]">
                  <video
                    src="/assets/video/album.mp4"
                    autoPlay
                    loop
                    muted
                    controls={false}
                  ></video>
                </div>
              </div>
              <div className="relative block lg:hidden">
                <Image
                  src="/assets/img/organize/shum-video-mob.png"
                  alt="Альбом после мероприятия по одной ссылке"
                  width={590}
                  height={628}
                  className="w-full h-auto"
                />
                <div className="absolute top-[22.82%] left-[54.83%] w-[32.82%] h-[62%] rounded-[4.26vw] overflow-hidden rotate-[-2.64deg]">
                  <video
                    src="/assets/video/album.mp4"
                    autoPlay
                    loop
                    muted
                    controls={false}
                  ></video>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
