import { FC, HTMLAttributes } from "react";

export const CheckIcon: FC<HTMLAttributes<SVGElement>> = (props) => {
  return (
    <svg
      width="14"
      height="10"
      viewBox="0 0 14 10"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M1.33594 4.9999L5.10927 8.77323L12.6693 1.22656"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
