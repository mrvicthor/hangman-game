import { createContext, useState } from "react";

type MenuContextProps = {
  showMenu: boolean;
  setShowMenu: React.Dispatch<React.SetStateAction<boolean>>;
};

export const MenuContext = createContext<MenuContextProps | undefined>(
  undefined
);

export const MenuProvider = ({ children }: { children: React.ReactNode }) => {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <MenuContext.Provider value={{ showMenu, setShowMenu }}>
      {children}
    </MenuContext.Provider>
  );
};
