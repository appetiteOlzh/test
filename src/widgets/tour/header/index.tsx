import Image, { type ImageProps } from "next/image";
import Link from "next/link";
import { FC } from "react";

export const Header: FC<{
  logo: ImageProps;
}> = ({ logo: { alt, ...logo } }) => {
  return (
    <header className="md:pt-16 pt-7 absolute w-full top-0 left-0 z-50">
      <div className="container">
        <Link href="#">
          <Image {...logo} alt={alt} />
        </Link>
      </div>
    </header>
  );
};
