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
        <div className="h-[8.1375rem] w-[16.4375rem] md:w-[22.24875rem] md:h-[11.244rem] absolute top-0">
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
        <div className="h-[33.1875rem] w-[20.25rem] md:h-[38.125rem] md:w-[37rem] flex items-end">
          <div className="h-[30.0625rem] w-[20.25rem] md:w-[37rem] md:h-[31.25rem] border-x-4 border-[#0b1524] border-b-8 rounded-[4.5rem] overflow-hidden menu-wrapper flex items-end justify-center">
            <div className="h-[28.8125rem] w-[19.25rem] md:h-[30rem] md:w-[36rem] flex flex-col justify-center items-center rounded-t-[4.5rem] menu-background space-y-16">
              <div className="h-[10rem] w-[10rem] md:h-[12.5rem] cursor-pointer md:w-[12.5rem] border-x-2 border-[#0b1524] border-b-8 border-t flex items-center justify-center rounded-full relative bg-[#8424EC]">
                <div className="h-[9rem] w-[9rem] md:h-[11.5rem] md:w-[11.5rem] absolute top-0 play-gradient rounded-full flex items-center justify-center">
                  <Image
                    src={play}
                    width={60}
                    height={60}
                    alt="play icon"
                    className="animate-ping"
                  />
                </div>
              </div>
              <button
                className="bg-[#2463ff] animate-bounce w-[16.25rem] rounded-3xl text-white text-xl border-t-8 border-[#0680FA] font-bold uppercase py-4 tracking-wide"
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
