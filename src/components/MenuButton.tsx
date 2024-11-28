import React, { useRef, KeyboardEvent } from "react";
import Image from "next/image";
// import { useMenu } from "@/hooks/useMenu";
interface Props {
  imageSrc: string;
  showMenu: boolean;
  onToggleMenu: React.Dispatch<React.SetStateAction<boolean>>;
}
const MenuButton = ({ imageSrc, showMenu, onToggleMenu }: Props) => {
  // const { setShowMenu, showMenu } = useMenu();
  const menuRef = useRef<HTMLButtonElement | null>(null);
  const handleKeydown = (e: KeyboardEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (menuRef) {
      menuRef.current?.click();
    }
  };
  return (
    <button
      ref={menuRef}
      className="cursor-pointer h-[2.5rem] w-[2.5rem] md:h-[4rem] md:w-[4rem] lg:h-[5.875rem] lg:w-[5.875rem] rounded-full play-gradient relative flex items-center justify-center"
      onKeyDown={handleKeydown}
      onClick={() => onToggleMenu(!showMenu)}
    >
      <span
        role="button"
        className="flex items-center justify-center h-[1.5rem] w-[1.5rem] md:h-[3rem] md:w-[3rem] lg:h-[4.875rem] lg:w-[4.875rem] rounded-full absolute top-0 play-gradient back-gradient "
      >
        <Image
          src={imageSrc}
          width={24}
          height={24}
          alt="back icon"
          className="animate-pulse mt-2 h-[1rem] w-[1rem] md:h-[2rem] md:w-[2rem] lg:h-[3rem] lg:w-[3rem]"
        />
      </span>
    </button>
  );
};

export default MenuButton;
