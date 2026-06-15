import { FC, ReactNode } from "react";
import { Author } from "../author";

export const Category: FC<CategoryProps & { children: ReactNode }> = ({
  title,
  children,
  author,
}) => {
  return (
    <div className="container mx-auto px-4">
      <div className="flex flex-col -mx-2.5">
        <Author author={author} />
        <div className="basis-full min-w-0 px-2.5 mb-8">
          <h1 className="font-secondary font-bold md:text-3xl text-2xl leading-none">
            {title}
          </h1>
        </div>
        <div className="px-2.5 basis-full">{children}</div>
      </div>
    </div>
  );
};
