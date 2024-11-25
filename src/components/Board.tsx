"use client";
import React, { useState, useEffect } from "react";
import Square from "./Square";
import BoardHeader from "./BoardHeader";
import { useGame } from "@/hooks/useGame";

// import RenderPhrase from "./RenderPhrase";
const MAX_MISTAKES = 8;
// type GameStatus = "playing" | "won" | "lost";

type Props = {
  data: string;
  title: string;
};
const Board = ({ data, title }: Props) => {
  const { handleGuess, hiddenLetters, shouldShowLetter, startNewGame, phrase } =
    useGame(data, MAX_MISTAKES);

  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    startNewGame();
  }, []);

  const renderPhrase = (): JSX.Element[] => {
    return phrase
      .toUpperCase()
      .split(" ")
      .map((word, wordIndex) => (
        <div key={wordIndex} className="flex md:gap-4 gap-1 justify-center">
          {word.split("").map((letter, index) => {
            return (
              <button
                className={`lg:w-[5rem] h-[4.125rem] md:h-[6rem] w-[2.5rem] sm:w-[3.5rem] rounded-[2rem] bg-[#2463ff] border-2 border-[#0b1524] overflow-hidden ${
                  hiddenLetters.has(letter) && "opacity-20"
                }`}
                key={index}
              >
                <span className="border-x-2  sm:border-t-[.6rem] lg:border-t-[.7rem] border-[#0680FA] rounded-t-[2rem] h-[4.125rem] md:h-[6rem] w-full flex items-center justify-center text-[2.5rem] sm:text-[3rem] md:text-[4rem] lg:text-[4.625rem] text-white">
                  {shouldShowLetter(letter) ? letter : ""}
                </span>
              </button>
            );
          })}
        </div>
      ));
  };
  if (!mounted) return null;
  return (
    <section className="flex flex-col gap-8">
      <BoardHeader title={title} />
      <div className="flex gap-4 md:gap-12 justify-center flex-wrap">
        {renderPhrase()}
      </div>

      <div className="mt-16 flex flex-col gap-4">
        <div className="flex gap-4">
          <Square onSquareClick={() => handleGuess("A")} value="A" />
          <Square onSquareClick={() => handleGuess("B")} value="B" />
          <Square onSquareClick={() => handleGuess("C")} value="C" />
          <Square onSquareClick={() => handleGuess("D")} value="D" />
          <Square onSquareClick={() => handleGuess("E")} value="E" />
          <Square onSquareClick={() => handleGuess("F")} value="F" />
          <Square onSquareClick={() => handleGuess("G")} value="G" />
          <Square onSquareClick={() => handleGuess("H")} value="H" />
          <Square onSquareClick={() => handleGuess("I")} value="I" />
        </div>
        <div className="flex gap-4">
          <Square onSquareClick={() => handleGuess("J")} value="J" />
          <Square onSquareClick={() => handleGuess("K")} value="K" />
          <Square onSquareClick={() => handleGuess("L")} value="L" />
          <Square onSquareClick={() => handleGuess("M")} value="M" />
          <Square onSquareClick={() => handleGuess("N")} value="N" />
          <Square onSquareClick={() => handleGuess("O")} value="O" />
          <Square onSquareClick={() => handleGuess("P")} value="P" />
          <Square onSquareClick={() => handleGuess("Q")} value="Q" />
          <Square onSquareClick={() => handleGuess("R")} value="R" />
        </div>
        <div className="flex gap-4">
          <Square onSquareClick={() => handleGuess("S")} value="S" />
          <Square onSquareClick={() => handleGuess("T")} value="T" />
          <Square onSquareClick={() => handleGuess("U")} value="U" />
          <Square onSquareClick={() => handleGuess("V")} value="V" />
          <Square onSquareClick={() => handleGuess("W")} value="W" />
          <Square onSquareClick={() => handleGuess("X")} value="X" />
          <Square onSquareClick={() => handleGuess("Y")} value="Y" />
          <Square onSquareClick={() => handleGuess("Z")} value="Z" />
        </div>
      </div>
    </section>
  );
};

export default Board;
