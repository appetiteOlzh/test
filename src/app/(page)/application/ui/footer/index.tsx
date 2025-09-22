import Image from "next/image";
import { FC } from "react";

export const Footer: FC = () => {
  return (
    <footer className="bg-[#0d0d0d] w-full h-18 absolute bottom-0 z-10">
      <div className="bg-[#191919] pb-3 sm:rounded-b-3xl rounded-b-[2rem]">
        <div className="flex flex-wrap justify-center items-center p-2.5">
          <div className="flex-none">
            <Image
              src="/assets/icons/footer-icons/heart.svg"
              alt="Gallery"
              width={30}
              height={30}
            />
          </div>
          <div className="flex-none mx-14 -my-4">
            <Image
              src="/assets/icons/footer-icons/add-button.svg"
              alt="Gallery"
              width={72}
              height={72}
            />
          </div>
          <div className="flex-none">
            <Image
              src="/assets/icons/footer-icons/albums.svg"
              alt="Gallery"
              width={26}
              height={26}
            />
          </div>
        </div>
      </div>
    </footer>
  );
};
