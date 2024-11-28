import React, { RefCallback, useEffect, useRef } from "react";
import { useRouter } from "next/navigation";

import Heading from "./Heading";
import { useMenuNavigation } from "@/hooks/useMenuNavigation";

type MenuModalProps = {
  handleNewGame: () => void;
  gameStatus: string;
  health: number;
  showMenu: boolean;
  handleMenu: React.Dispatch<React.SetStateAction<boolean>>;
};
const MenuModal = ({
  handleNewGame,
  gameStatus,
  health,
  showMenu,
  handleMenu,
}: MenuModalProps) => {
  const router = useRouter();

  const displayStatus =
    health >= 0 && gameStatus === "Playing"
      ? "paused"
      : gameStatus === "Won"
      ? "you win"
      : "you lose";

  const buttonsMetadata = [
    {
      label: displayStatus === "paused" ? "continue" : "play again!",
      handler: () => {
        handleMenu(false);
        if (displayStatus !== "paused") return handleNewGame();
      },
    },
    { label: "new category", handler: () => router.push("/category") },
    { label: "quit game", handler: () => router.push("/") },
  ];
  const buttonsRef = useRef<(HTMLButtonElement | null)[]>([]);
  const totalItems = buttonsMetadata.length;
  const { activeIndex } = useMenuNavigation({
    totalItems,
    buttonsControlRef: buttonsRef,
  });

  const setMenuItemsRef: (index: number) => RefCallback<HTMLButtonElement> =
    (index) => (el) => {
      if (buttonsRef?.current) {
        buttonsRef.current[index] = el;
      }
    };

  useEffect(() => {
    buttonsRef.current[activeIndex]?.focus();
  }, [activeIndex]);

  if (!showMenu) return null;

  return (
    <>
      <div
        className="bg-[#261676] opacity-40 fixed left-0  w-screen h-screen z-30"
        onClick={() => handleMenu(!showMenu)}
      />
      <div className="flex justify-center items-center absolute top-[50%] -translate-y-[50%] left-[50%] -translate-x-[50%] z-40">
        <div className="h-[8.1375rem] w-[16.4375rem] md:w-[22.24875rem] md:h-[11.244rem] absolute -top-[2rem] md:-top-[5rem]  left-[50%] -translate-x-[50%] z-50 flex justify-center">
          <Heading
            text={displayStatus}
            classes="text-[5.875rem] md:text-[8.375rem] capitalize"
          />
        </div>
        <div className="h-[33.1875rem] w-[20.25rem] md:h-[33.375rem] md:w-[37rem] flex items-end">
          <div className="h-[30.0625rem] w-[20.25rem] md:w-[37rem] md:h-[31.25rem] border-x-4 border-[#0b1524] border-b-8 rounded-[4.5rem] overflow-hidden menu-wrapper flex items-end justify-center">
            <div className="h-[28.8125rem] w-[19.25rem] md:h-[30rem] md:w-[36rem] flex flex-col justify-center items-center rounded-t-[4.5rem] menu-background space-y-4">
              {buttonsMetadata.map((item, index) => (
                <button
                  key={index}
                  ref={setMenuItemsRef(index)}
                  onClick={item.handler}
                  className={`${
                    item.label === "quit game"
                      ? "play-gradient border-[#8424EC] "
                      : "bg-[#2463ff] border-[#0680FA]"
                  } flex items-center justify-center w-[16.25rem] rounded-3xl text-white text-xl border-t-8 border font-bold uppercase py-4 tracking-wide`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MenuModal;
