"use client";
import React from "react";

import Image from "next/image";
import MenuButton from "./MenuButton";

type BoardHeaderProps = {
  title: string;
};
const BoardHeader = ({ title }: BoardHeaderProps) => {
  return (
    <header>
      <nav className="flex md:gap-12 gap-6 items-center justify-between">
        <MenuButton imageSrc="/assets/images/icon-menu.svg" />
        <h1 className="lg:text-[6.625rem] md:text-[3.625rem] text-[3rem] font-bold text-white mr-auto md:tracking-wide">
          {title}
        </h1>
        <div className="flex items-center gap-4">
          <div className="bg-white rounded-xl flex items-center px-4 py-1 lg:w-[15rem] md:w-[10rem] w-[3.5625rem]">
            <input
              type="range"
              id="heart"
              min={0}
              max={100}
              value={100}
              onChange={() => {
                console.log("change");
              }}
              className=" outline-none border-none focus:outline-none focus:border-none w-full "
            />
          </div>
          <label htmlFor="heart">
            <Image
              src="/assets/images/icon-heart.svg"
              alt="heart icon"
              width={40}
              height={40}
              className="h-6 w-6 md:h-12 md:w-12"
            />
          </label>
        </div>
      </nav>
    </header>
  );
};

export default BoardHeader;
