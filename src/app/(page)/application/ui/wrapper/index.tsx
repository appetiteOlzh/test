import { FC, ReactNode } from "react";
import { Header } from "../header";
import { PhoneWrapper } from "./phone-wrapper";

type Props = {
  children: ReactNode;
};

export const Wrapper: FC<Props> = ({ children }) => {
  return (
    <PhoneWrapper>
      <section
        id="phone-portal"
        className="relative h-full bg-[#0d0d0d] sm:rounded-3xl overflow-hidden"
      >
        <Header />
        <div className="h-full">{children}</div>
      </section>
    </PhoneWrapper>
  );
};
