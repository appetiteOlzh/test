import { OpenInAppHeader } from "@/widgets/open-in-app";
import { FC } from "react";

export const Header: FC = () => {
  return (
    <header className="absolute w-full top-0 left-0 h-[147px] bg-gradient-to-b from-black/80 to-black/0 z-10">
      <OpenInAppHeader style="transparent" />
    </header>
  );
};
