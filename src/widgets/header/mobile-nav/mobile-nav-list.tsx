import Link from "next/link";
import { FC } from "react";
import cn from "classnames";
import { Select } from "../select";

export const Nav: FC<{
  navList: { href: string; title: string }[];
  isOpen: boolean;
  onClose: () => void;
  noLocale?: boolean;
}> = ({ navList, isOpen, onClose, noLocale }) => {
  return (
    <aside
      className={cn(
        "fixed w-full left-0 top-[100px] z-50 md:hidden -translate-x-full transition-transform duration-300 h-[calc(100vh-100px)] bg-background",
        {
          "translate-x-0": isOpen,
        }
      )}
    >
      <div className="container">
        <div className="row">
          <div className="col-12">
            <ul className="pt-6 mb-4 list-none px-4">
              {navList.map(({ href, title }) => {
                return (
                  <li
                    key={href}
                    className="text-h4-clamp mb-4"
                    onClick={onClose}
                  >
                    <Link href={href} className="px-2">
                      {title}
                    </Link>
                  </li>
                );
              })}
              {noLocale ? null : (
                <li className="px-1">
                  <Select onChange={onClose} />
                </li>
              )}
            </ul>
          </div>
        </div>
      </div>
    </aside>
  );
};
