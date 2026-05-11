import { FC } from "react";

export const Album: FC = () => {
  return (
    <section className="bg-[#0C0C0C] py-20">
      <div className="container">
        <div className="flex flex-wrap -mx-2.5">
          <div className="basis-5/12 px-2.5">
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
          <div className="basis-7/12 px-2.5">
            <div className="pl-14 pt-[30%]">
              <h2 className="text-yellow-darker text-h2-wed mb-6 font-apple font-black">
                A real-time album for your wedding day
              </h2>
              <p className="font-bold text-2xl">
                Photos and videos appear in one place while the celebration is
                still happening
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
