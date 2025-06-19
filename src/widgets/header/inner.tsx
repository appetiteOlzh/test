import Image from "next/image";
import { GoogleplayButton } from "@/shared/ui/button-apps/googleplay";
import { AppStoreButton } from "@/shared/ui/button-apps/apple-store";
import background from "./bg.jpg";

export const HeaderInner = () => {
  return (
    <header
      className="py-6 w-full bg-cover"
      style={{ backgroundImage: `url(${background.src})` }}
    >
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap items-center justify-center md:justify-between relative">
          <div className="basis-auto text-center">
            <a href="/">
              <Image
                src="/assets/img/logo-gold.svg"
                alt="MonClips"
                width={150}
                height={117}
                className="w-[120px] h-auto md:w-[150px]"
              />
            </a>
          </div>
          <div className="basis-auto ml-auto mr-9 hidden md:block">
            <div className="flex flex-wrap -mx-2.5">
              <div className="px-2.5">
                <GoogleplayButton />
              </div>
              <div className="px-2.5">
                <AppStoreButton />
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
