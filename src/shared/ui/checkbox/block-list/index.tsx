"use client";

import { FC, MouseEventHandler, useEffect, useState } from "react";
import { Block } from "../block";

type Props = {
  className?: string;
  name: string;
  list: string[];
};

export const BlockList: FC<Props> = ({ list, name, className }) => {
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
    <div onClick={onClick} className={className}>
      {list.map((item, index) => {
        return (
          <Block
            key={index}
            className="mb-4 md:mb-6"
            isChecked={uniqList.has(index)}
            index={index}
          >
            {item}
          </Block>
        );
      })}
    </div>
  );
};
