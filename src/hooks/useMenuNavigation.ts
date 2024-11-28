import { usePathname } from "next/navigation";
import { MutableRefObject, useEffect, useState } from "react";

type Props = {
  totalItems: number;
  menuItemsRef?: MutableRefObject<(HTMLAnchorElement | null)[]>;
  buttonsControlRef?: React.RefObject<(HTMLButtonElement | null)[]>;
};
export const useMenuNavigation = ({
  totalItems,
  menuItemsRef,
  buttonsControlRef,
}: Props) => {
  const pathname = usePathname();
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (["ArrowUp", "ArrowRight", "ArrowDown", "ArrowLeft"].includes(e.key)) {
        e.preventDefault();
      }
      switch (e.key) {
        case "ArrowUp":
        case "ArrowRight":
          setActiveIndex((prev) => (prev === totalItems - 1 ? 0 : prev + 1));

          break;
        case "ArrowDown":
        case "ArrowLeft":
          setActiveIndex((prev) => (prev === 0 ? totalItems - 1 : prev - 1));

          break;
        case "Enter":
          if (pathname === "/") menuItemsRef?.current[activeIndex]?.click();
          if (buttonsControlRef?.current)
            buttonsControlRef?.current[activeIndex]?.click();
          break;
      }
    };

    document.addEventListener("keydown", handler);
    return () => document.removeEventListener("keydown", handler);
  }, [totalItems, activeIndex]);

  return {
    activeIndex,
  };
};
