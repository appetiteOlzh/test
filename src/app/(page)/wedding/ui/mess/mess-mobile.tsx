import Image from "next/image";

// images
import mess1 from "./img/1.png";
import mess2 from "./img/2.png";
import mess4 from "./img/4.png";
import mess5 from "./img/5.png";
import mess6 from "./img/6.png";
import mess7 from "./img/7.png";
import mess9 from "./img/9.png";
import mess10 from "./img/10.png";

export const MessMobile = () => {
  return (
    <>
      <section className="overflow-hidden pt-16">
        <div className="container">
          <div className="flex flex-wrap justify-between">
            <div className="basis-full relative mt-[280px]">
              <Image
                src={mess1}
                alt="mess1"
                className="rotate-[-8.62deg] absolute top-0 left-0 translate-y-[-268px] -translate-x-2"
                width={mess1.width / 2}
                height={mess1.height / 2}
              />
              <Image
                src={mess2}
                alt="mess2"
                className="rotate-[9.3deg] absolute top-0 left-1/2 translate-y-[-268px] -translate-x-3"
                width={mess2.width / 2}
                height={mess2.height / 2}
              />

              <h2 className="text-h2-wed text-yellow-darker font-black font-apple mb-4 text-center uppercase relative z-10">
                Photos stay <br />
                in phones
              </h2>
            </div>
            <div className="basis-full relative mt-[352px]">
              <Image
                src={mess4}
                alt="mess4"
                className="rotate-[8.44deg] absolute top-0 left-0 translate-y-[-288px] -translate-x-3"
                width={mess4.width / 2}
                height={mess4.height / 2}
              />
              <Image
                src={mess5}
                alt="mess5"
                className="rotate-[-11.46deg] absolute top-0 left-1/2 translate-y-[-236px] translate-x-5"
                width={mess5.width / 2}
                height={mess5.height / 2}
              />

              <h2 className="text-h2-wed text-yellow-darker font-black font-apple mb-4 text-center uppercase relative z-10">
                Chats get messy
              </h2>
            </div>
            <div className="basis-full relative mt-[306px]">
              <Image
                src={mess6}
                alt="mess6"
                className="rotate-[8.44deg] absolute top-0 left-0 translate-y-[-266px] -translate-x-3"
                width={mess6.width / 2}
                height={mess6.height / 2}
              />
              <Image
                src={mess7}
                alt="mess7"
                className="rotate-[-11.46deg] absolute top-0 left-1/2 translate-y-[-210px] translate-x-5"
                width={mess7.width / 2}
                height={mess7.height / 2}
              />

              <h2 className="text-h2-wed text-yellow-darker font-black font-apple mb-4 text-center uppercase relative z-10">
                Stories disappear
              </h2>
            </div>
            <div className="basis-full relative mt-[262px]">
              <Image
                src={mess9}
                alt="mess9"
                className="rotate-[8.44deg] absolute top-0 left-0 translate-y-[-120px] translate-x-4 z-10"
                width={mess9.width / 3}
                height={mess9.height / 3}
              />
              <Image
                src={mess10}
                alt="mess10"
                className="rotate-[-11.46deg] absolute top-0 left-1/2 translate-y-[-214px] translate-x-[-76px]"
                width={mess10.width / 2}
                height={mess10.height / 2}
              />

              <h2 className="text-h2-wed text-yellow-darker font-black font-apple mb-4 text-center uppercase relative z-20">
                Moments get <br />
                scattered
              </h2>
            </div>
          </div>
        </div>
      </section>
      <section className="pt-36">
        <div className="container">
          <h2 className="text-h2-wed text-yellow-darker font-black font-apple leading-[1.2] mb-4 text-center">
            What if it all stayed together?
          </h2>
          <p className="text-desc-mon font-bold mb-10 text-center">
            One wedding. One album.
            <br />
            One place for every moment.
          </p>
          <Image
            src="/assets/img/wedding/together.png"
            alt="MonClips wedding album on iPhone"
            width={366}
            height={884}
            className="w-[276px] max-w-full mx-auto"
            quality={100}
            priority
          />
        </div>
      </section>
    </>
  );
};
