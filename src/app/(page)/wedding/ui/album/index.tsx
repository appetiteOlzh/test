import { FC } from "react";

export const Album: FC = () => {
  return (
    <section className="bg-[#0C0C0C] md:py-20 pt-40">
      <div className="container">
        <div className="flex flex-wrap flex-row-reverse -mx-2.5">
          <div className="basis-full md:basis-7/12 px-2.5">
            <div className="md:pl-14 md:pt-[30%] mb-9 md:mb-0 text-center md:text-left">
              <h2 className="text-yellow-darker text-h2-wed mb-6 font-apple font-black">
                A real-time album for your wedding day
              </h2>
              <p className="font-bold text-2xl">
                Photos and videos appear in one place while the celebration is
                still happening
              </p>
            </div>
          </div>
          <div className="basis-full md:basis-5/12 px-2.5">
            <div className="rounded-[60px] overflow-hidden bg-[#101010]">
              <video
                src="/assets/video/wedding-gallery.mp4"
                autoPlay
                loop
                muted
                playsInline
              ></video>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
