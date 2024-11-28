import { useMenu } from "@/hooks/useMenu";
import React from "react";

type MenuModalProps = {
  handleNewGame: () => void;
};
const MenuModal = ({ handleNewGame }: MenuModalProps) => {
  const { showMenu, setShowMenu } = useMenu();
  if (!showMenu) return null;
  return (
    <>
      <div className="bg-[#261676] opacity-40 fixed left-0  w-screen h-screen z-30" />
      <div>Menu modal</div>
    </>
  );
};

export default MenuModal;
