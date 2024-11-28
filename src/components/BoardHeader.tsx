"use client";
import React, { useEffect, useState } from "react";

import Image from "next/image";
import MenuButton from "./MenuButton";

type BoardHeaderProps = {
  title: string;
  health: number;
  showMenu: boolean;
  handleMenu: React.Dispatch<React.SetStateAction<boolean>>;
};
const BoardHeader = ({
  title,
  health,
  showMenu,
  handleMenu,
}: BoardHeaderProps) => {
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);
  if (!mounted) return null;
  return (
    <header>
      <nav className="flex md:gap-12 gap-6 items-center justify-between">
        <MenuButton
          imageSrc="/assets/images/icon-menu.svg"
          showMenu={showMenu}
          onToggleMenu={handleMenu}
        />
        <h1 className="lg:text-[6.625rem] md:text-[3.625rem] text-[3rem] font-bold text-white mr-auto md:tracking-wide">
          {title}
        </h1>
        <div className="flex items-center gap-4">
          <div className="bg-white rounded-xl flex items-center px-2 md:px-4 py-2 lg:w-[15rem] md:w-[10rem] w-[3.5625rem]">
            <div
              className={`rounded-xl bg-[#261676] h-2`}
              style={{ width: `${health}%` }}
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
