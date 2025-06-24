import Image from "next/image";
import Link from "next/link";

export const Header = () => {
  return (
    <header className="md:pt-12 pt-[30px] absolute w-full top-0 left-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap items-center ">
          <div className="basis-auto">
            <Link href="#">
              <Image
                src="/assets/img/monclips-icon.svg"
                alt="MonClips"
                width={150}
                height={117}
                className="w-[120px] h-auto md:w-[150px]"
              />
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};
