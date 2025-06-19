"use client";
import Link from "next/link";
import { usePathname, useSearchParams } from "next/navigation";
import { FC, MouseEventHandler } from "react";

export const ShallowLink: FC<{ postId: number }> = ({ postId }) => {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const params = new URLSearchParams(searchParams.toString());
  params.set("post", String(postId));

  const setURLState: MouseEventHandler<HTMLAnchorElement> = (e) => {
    e.preventDefault();
    window.history.pushState(null, "", `?${params.toString()}`);
  };

  return (
    <Link
      href={`${pathname}?${params.toString()}`}
      passHref
      onClick={setURLState}
      className="absolute top-0 left-0 w-full h-full"
    ></Link>
  );
};
