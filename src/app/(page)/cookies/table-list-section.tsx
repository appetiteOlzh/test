import { FC, ReactNode } from "react";

export const TableLIstSection: FC<{
  title: string;
  description: string;
  children: ReactNode;
}> = ({ title, description, children }) => {
  return (
    <section>
      <h2 className="mb-4 text-2xl underline">{title}</h2>
      <p>{description}</p>
      <br />
      {children}
    </section>
  );
};
