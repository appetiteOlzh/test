"use client";

import { FC, MouseEventHandler, ReactNode, useEffect, useState } from "react";
import { Card } from "../card";
import { twMerge } from "tailwind-merge";

type Props = {
  className?: string;
  name: string;
  list: {
    icon: string;
    content: ReactNode;
  }[];
};

export const CardList: FC<Props> = ({ list, name, className }) => {
  const [uniqList, setUniqList] = useState(new Set());

  const onClick: MouseEventHandler<HTMLDivElement> = (e) => {
    const target = e.target as HTMLElement;
    const index = Number(target.dataset.index);

    if (isNaN(index)) return;
    setUniqList((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(index)) {
        newSet.delete(index);
      } else {
        newSet.add(index);
      }
      localStorage.setItem(name, JSON.stringify(Array.from(newSet)));
      return newSet;
    });
  };

  useEffect(() => {
    const list = localStorage.getItem(name);
    if (list) {
      const parsedList = JSON.parse(list);
      setUniqList(new Set(parsedList));
    }
  }, [name]);

  return (
    <div
      onClick={onClick}
      className={twMerge("grid grid-cols-1 md:grid-cols-2 gap-2.5", className)}
    >
      {list.map(({ icon, content }, index) => {
        return (
          <Card
            key={index}
            isChecked={uniqList.has(index)}
            index={index}
            icon={icon}
          >
            {content}
          </Card>
        );
      })}
    </div>
  );
};
