import { useCallback, useState } from "react";

type Props = {
  totalResults: number;
  onActivate: (index: number) => void;
  hasBackButton?: boolean;
  itemsRef: React.RefObject<HTMLButtonElement[]>;
  backButtonRef: React.RefObject<HTMLAnchorElement>;
};
export const useKeyboardNavigation = ({
  totalResults,
  onActivate,
  hasBackButton = true,
  itemsRef,
  backButtonRef,
}: Props) => {
  const [focusedIndex, setFocusedIndex] = useState(0);

  const focusElement = useCallback(
    (index: number) => {
      if (index === -1 && backButtonRef.current) {
        backButtonRef.current.focus();
      } else if (index >= 0 && itemsRef?.current?.[index]) {
        itemsRef.current[index].focus();
      }
    },
    [backButtonRef, itemsRef]
  );

  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      const { key } = e;
      const adjustTotalItems = hasBackButton ? totalResults + 1 : totalResults;
      const navigate = (direction: "next" | "prev"): number => {
        e?.preventDefault();
        let newIndex: number;
        if (direction === "next") {
          console.log("next");
          newIndex = focusedIndex < adjustTotalItems - 1 ? focusedIndex + 1 : 0;
        } else {
          newIndex = focusedIndex > 0 ? focusedIndex - 1 : adjustTotalItems - 1;
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
          if (onActivate) {
            e.preventDefault();
            onActivate(focusedIndex);
          }
          break;
        case "Escape":
          e.preventDefault();
          setFocusedIndex(-1);
          focusElement(-1);
          break;
      }
    },
    [focusedIndex, hasBackButton, totalResults, onActivate, focusElement]
  );
  return {
    focusedIndex,
    setFocusedIndex,
    handleKeyDown,
    focusElement,
  };
};
