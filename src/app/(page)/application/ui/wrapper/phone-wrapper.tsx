import { FC, ReactNode } from "react";

export const PhoneWrapper: FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <div className="relative w-full sm:w-80 sm:h-[654px] mx-auto sm:px-2.5 sm:pt-2.5 sm:pb-1.5 h-full">
      <div className="absolute top-0 left-0 right-0 bottom-0 pointer-events-none bg-cover z-20 sm:bg-[url('/assets/img/application/phone-wrapper.png')]"></div>
      {children}
    </div>
  );
};
