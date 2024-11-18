"use client";
import React, { useState } from "react";
import Image from "next/image";
import Board from "./Board";
import HowToPlay from "./HowToPlay";
import logo from "../../public/assets/images/logo.svg";
import play from "../../public/assets/images/icon-play.svg";

const Menu = () => {
  const [showHowToPlay, setShowHowToPlay] = useState(false);
  const [start, setStart] = useState(false);
  return (
    <>
      <div className="flex justify-center items-center relative top-[8rem]">
        <div className="w-[22.24875rem] h-[11.244rem] absolute top-0">
          <Image
            src={logo}
            alt="logo"
            style={{
              width: "100%",
              height: "auto",
            }}
            onClick={() => setStart(true)}
          />
        </div>
        <div className="h-[38.125rem] w-[37rem] flex items-end">
          <div className="w-[37rem] h-[31.25rem] border-x-2 border-[#0b1524] border-b-8 rounded-[2rem] overflow-hidden">
            <div className="h-[31.2rem] w-full flex flex-col justify-center items-center border-x-4 border-[#2463ff] border-t-[.8rem] rounded-[2.05rem] menu-background space-y-16">
              <div className="h-[12.5rem] cursor-pointer w-[12.5rem] border-x-2 border-[#0b1524] border-b-8 border-t flex items-center justify-center rounded-full relative bg-[#8424EC]">
                <div className="h-[11.5rem] w-[11.5rem] absolute top-0 play-gradient rounded-full flex items-center justify-center">
                  <Image src={play} width={60} height={60} alt="play icon" />
                </div>
              </div>
              <button
                className="bg-[#2463ff] w-[16.25rem] rounded-3xl text-white text-xl font-bold uppercase py-4 tracking-wide"
                onClick={() => setShowHowToPlay(true)}
              >
                how to play
              </button>
            </div>
          </div>
        </div>
      </div>
      {showHowToPlay && <HowToPlay />}
      {start && <Board />}
    </>
  );
};

export default Menu;
