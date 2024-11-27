import { useCallback, useState } from "react";

// type Props = {
//   totalResults: number;
//   itemsRef: React.RefObject<HTMLButtonElement[]>;
// };
export const useKeyboardNavigation = (
  totalResults: number,
  itemsRef: React.RefObject<HTMLButtonElement[]>
) => {
  const [focusedIndex, setFocusedIndex] = useState(0);

  const focusElement = useCallback(
    (index: number) => {
      if (index >= 0 && itemsRef?.current?.[index]) {
        itemsRef.current[index].focus();
      }
    },
    [itemsRef]
  );

  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      const { key } = e;
      const navigate = (direction: "next" | "prev"): number => {
        e?.preventDefault();
        let newIndex: number;
        if (direction === "next") {
          console.log("next");
          newIndex = focusedIndex < totalResults - 1 ? focusedIndex + 1 : 0;
        } else {
          newIndex = focusedIndex > 0 ? focusedIndex - 1 : totalResults - 1;
        }
        console.log(focusedIndex);
        setFocusedIndex(newIndex);
        focusElement(newIndex);
        console.log(newIndex);
        return newIndex;
      };
      switch (key) {
        case "ArrowRight":
        case "ArrowUp":
          navigate("next");
          break;
        case "ArrowLeft":
        case "ArrowDown":
          navigate("prev");
          break;
        case "Enter":
        case " ":
          if (itemsRef.current) {
            e.preventDefault();
            itemsRef.current[focusedIndex].click();
          }

          break;
        case "Escape":
          e.preventDefault();
          setFocusedIndex(-1);
          focusElement(-1);
          break;
      }
    },
    [focusedIndex, totalResults, itemsRef, focusElement]
  );
  return {
    focusedIndex,
    handleKeyDown,
  };
};
