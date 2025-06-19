import React, { InputHTMLAttributes } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  errorMessage?: string;
  refProps?: React.Ref<HTMLInputElement>;
}

export const Input: React.FC<InputProps> = ({
  errorMessage,
  refProps,
  ...props
}) => {
  return (
    <label>
      <div className="rounded-full font-secondary font-bold bg-[#22322F] overflow-hidden">
        <input
          className="block bg-transparent w-full focus:outline-0 pl-7 pr-4 py-4 placeholder:text-[#466765]"
          ref={refProps}
          {...props}
        />
      </div>
      {errorMessage ? (
        <p className="text-red-800 text-sm mt-1 pl-4">{errorMessage}</p>
      ) : null}
    </label>
  );
};
