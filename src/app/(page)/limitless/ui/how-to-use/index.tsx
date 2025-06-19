"use client";
import { FC, useState } from "react";
import { TabNavItem } from "./tab-nav-item";
import { TabContent } from "./tab-content";
import { galleryList, messengerList } from "./data";

export const HowToUse: FC = () => {
  const [tabItem, setTabItem] = useState<"gallery" | "messenger">("gallery");

  return (
    <section className="md:pt-40 pt-[180px]">
      <div className="max-w-[1270px] mx-auto px-4">
        <h2 className="text-2xl md:text-4xl lg:text-5xl mb-8 font-apple font-black uppercase text-balance text-center">
          <span className="text-yellow-darker">Как загружать фото</span> <br />в
          MonClips Gallery
        </h2>
        <div className="flex flex-wrap -mx-[5px] md:-mx-4 justify-center mb-8">
          <div className="px-[5px] md:px-4">
            <TabNavItem
              onClick={() => setTabItem("gallery")}
              isActive={tabItem === "gallery"}
            >
              <span className="hidden md:inline">Способ 1: </span>из Галереи
            </TabNavItem>
          </div>
          <div className="px-[5px] md:px-4">
            <TabNavItem
              onClick={() => setTabItem("messenger")}
              isActive={tabItem === "messenger"}
            >
              <span className="hidden md:inline">Способ 2: </span>из
              мессенджеров
            </TabNavItem>
          </div>
        </div>
        <div className="overflow-hidden">
          {tabItem === "gallery" ? <TabContent list={galleryList} /> : null}
          {tabItem === "messenger" ? <TabContent list={messengerList} /> : null}
        </div>
      </div>
    </section>
  );
};
