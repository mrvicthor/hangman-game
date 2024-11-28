"use client";
import React, {
  useState,
  useEffect,
  useRef,
  KeyboardEvent,
  useCallback,
} from "react";
import Square from "./Square";
import BoardHeader from "./BoardHeader";
import { useGame } from "@/hooks/useGame";
import RenderPhrase from "./RenderPhrase";
import { alphabets } from "@/helpers";
import { MenuProvider } from "@/context/MenuContext";
import MenuModal from "./MenuModal";

// import RenderPhrase from "./RenderPhrase";
const MAX_MISTAKES = 8;
// type GameStatus = "playing" | "won" | "lost";

type Props = {
  data: string;
  title: string;
};
const Board = ({ data, title }: Props) => {
  const {
    handleGuess,
    hiddenLetters,
    shouldShowLetter,
    startNewGame,
    phrase,
    progressBarWidth,
    gameStatus,
  } = useGame(data, MAX_MISTAKES);

  console.log(phrase);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [mounted, setMounted] = useState(false);
  const gridRef = useRef<HTMLDivElement | null>(null);

  const handleKeyDown = (e: KeyboardEvent) => {
    const totalLetters = alphabets.length;
    const columnsPerRow = 9;

    switch (e.key) {
      case "ArrowRight":
        e.preventDefault();
        setSelectedIndex((prev) => (prev === totalLetters - 1 ? 0 : prev + 1));

        break;

      case "ArrowLeft":
        e.preventDefault();
        setSelectedIndex((prev) => (prev - 1 + totalLetters) % totalLetters);
        break;

      case "ArrowDown":
        e.preventDefault();
        setSelectedIndex((prev) =>
          prev + columnsPerRow < totalLetters
            ? prev + columnsPerRow
            : prev % columnsPerRow
        );
        break;
      case "ArrowUp":
        e.preventDefault();
        setSelectedIndex((prev) =>
          prev - columnsPerRow >= 0
            ? prev - columnsPerRow
            : totalLetters - columnsPerRow + (prev % columnsPerRow)
        );
        break;

      case "Enter":
      case " ":
        e.preventDefault();
        handleGuess(alphabets[selectedIndex]);
        break;

      case "Escape":
        e.preventDefault();
        setSelectedIndex(0);
      default:
        break;
    }
  };

  useEffect(() => {
    if (gridRef.current) {
      gridRef.current.focus();
    }
  }, []);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    startNewGame();
  }, []);

  if (!mounted) return null;
  return (
    <MenuProvider>
      <section className="flex flex-col gap-8">
        <BoardHeader title={title} health={progressBarWidth} />
        <div className="flex gap-4 justify-center flex-wrap">
          <RenderPhrase
            phrase={phrase}
            hiddenLetters={hiddenLetters}
            shouldShowLetter={shouldShowLetter}
          />
        </div>

        <div className="mt-16">
          <div
            ref={gridRef}
            tabIndex={0}
            onKeyDown={handleKeyDown}
            aria-label="Alphabet Grid"
            role="grid"
            className="grid grid-cols-9 gap-y-4 gap-x-2 md:gap-x-4"
          >
            {alphabets.map((letter, index) => (
              <Square
                key={index}
                value={letter}
                tabIndex={index === selectedIndex ? 0 : -1}
                onSquareClick={() => handleGuess(letter)}
                classes={`${
                  phrase.toUpperCase().split("").includes(letter) &&
                  !hiddenLetters.has(letter) &&
                  "opacity-20"
                } ${index === selectedIndex ? "ring-2 ring-[#261676]" : ""}`}
              />
            ))}
          </div>
        </div>
      </section>
      <MenuModal handleNewGame={startNewGame} gameStatus={gameStatus} />
    </MenuProvider>
  );
};

export default Board;
