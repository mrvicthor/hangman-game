"use client";
import { useEffect, useState, useRef, RefCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import logo from "../../public/assets/images/logo.svg";
import play from "../../public/assets/images/icon-play.svg";

const Menu = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [mounted, setMounted] = useState(false);
  const menuItemsRef = useRef<(HTMLAnchorElement | null)[]>([]);

  const setMenuItemsRef: (index: number) => RefCallback<HTMLAnchorElement> =
    (index) => (el) => {
      menuItemsRef.current[index] = el;
    };
  const menuItems = [
    { href: "/category", label: "Play" },
    { href: "/howToPlay", label: "How to Play" },
  ];
  useEffect(() => {
    setMounted(true);
    const handler = (e: KeyboardEvent) => {
      if (["ArrowUp", "ArrowRight", "ArrowDown", "ArrowLeft"].includes(e.key)) {
        e.preventDefault();
      }
      switch (e.key) {
        case "ArrowUp":
        case "ArrowRight":
          setActiveIndex((prev) =>
            prev === menuItems.length - 1 ? 0 : prev + 1
          );

          break;
        case "ArrowDown":
        case "ArrowLeft":
          setActiveIndex((prev) =>
            prev === 0 ? menuItems.length - 1 : prev - 1
          );

          break;
        case "Enter":
          menuItemsRef.current[activeIndex]?.click();
          break;
      }
    };

    document.addEventListener("keydown", handler);
    return () => document.removeEventListener("keydown", handler);
  }, [menuItems.length]);

  useEffect(() => {
    menuItemsRef.current[activeIndex]?.focus();
  }, [activeIndex]);

  if (!mounted) return null;
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
          />
        </div>
        <div className="h-[33.1875rem] w-[20.25rem] md:h-[38.125rem] md:w-[37rem] flex items-end">
          <div className="h-[30.0625rem] w-[20.25rem] md:w-[37rem] md:h-[31.25rem] border-x-4 border-[#0b1524] border-b-8 rounded-[4.5rem] overflow-hidden menu-wrapper flex items-end justify-center">
            <div className="h-[28.8125rem] w-[19.25rem] md:h-[30rem] md:w-[36rem] flex flex-col justify-center items-center rounded-t-[4.5rem] menu-background space-y-16">
              <div className="h-[10rem] w-[10rem] md:h-[12.5rem] cursor-pointer md:w-[12.5rem] border-x-2 border-[#0b1524] border-b-8 border-t flex items-center justify-center rounded-full relative bg-[#8424EC]">
                <Link
                  href="/category"
                  ref={setMenuItemsRef(0)}
                  className="h-[9rem] w-[9rem] md:h-[11.5rem] md:w-[11.5rem] absolute top-0 play-gradient rounded-full flex items-center justify-center"
                >
                  <Image
                    src={play}
                    width={60}
                    height={60}
                    alt="play icon"
                    className="animate-ping"
                  />
                </Link>
              </div>
              <Link
                href="/howToPlay"
                ref={setMenuItemsRef(1)}
                className="bg-[#2463ff] animate-bounce flex items-center justify-center w-[16.25rem] rounded-3xl text-white text-xl border-t-8 border-[#0680FA] font-bold uppercase py-4 tracking-wide"
              >
                how to play
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Menu;
