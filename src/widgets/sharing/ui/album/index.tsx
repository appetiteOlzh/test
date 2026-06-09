import { FC } from "react";
import { Author } from "../author";

export const Album: FC<{
  author: UserProps;
  children: React.ReactNode;
}> = ({ author, children }) => {
  return (
    <div className="container mx-auto px-4">
      <div className="flex flex-col -mx-2.5">
        <Author author={author} />
        {children}
      </div>
    </div>
  );
};

export { AlbumCardList } from "./album-card-list";
