"use client";
import React, { useState, useEffect } from "react";
import Square from "./Square";
import BoardHeader from "./BoardHeader";
import { useGame } from "@/hooks/useGame";
import RenderPhrase from "./RenderPhrase";

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
  } = useGame(data, MAX_MISTAKES);
  console.log(phrase);
  const [mounted, setMounted] = useState(false);
  const firstRow = ["A", "B", "C", "D", "E", "F", "G", "H", "I"];
  const secondRow = ["J", "K", "L", "M", "N", "O", "P", "Q", "R"];
  const thirdRow = ["S", "T", "U", "V", "W", "X", "Y", "Z"];

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    startNewGame();
  }, []);

  if (!mounted) return null;
  return (
    <section className="flex flex-col gap-8">
      <BoardHeader title={title} health={progressBarWidth} />
      <div className="flex gap-4 md:gap-12 justify-center flex-wrap">
        <RenderPhrase
          phrase={phrase}
          hiddenLetters={hiddenLetters}
          shouldShowLetter={shouldShowLetter}
        />
      </div>

      <div className="mt-16 flex flex-col gap-4">
        <div className="flex gap-4">
          {firstRow.map((letter, index) => (
            <Square
              key={index}
              onSquareClick={() => handleGuess(letter)}
              value={letter}
              classes={`${
                phrase.toUpperCase().split("").includes(letter) &&
                !hiddenLetters.has(letter) &&
                "opacity-20"
              }`}
            />
          ))}
        </div>
        <div className="flex gap-4">
          {secondRow.map((letter, index) => (
            <Square
              key={index}
              onSquareClick={() => handleGuess(letter)}
              value={letter}
              classes={`${
                phrase.toUpperCase().split("").includes(letter) &&
                !hiddenLetters.has(letter) &&
                "opacity-20"
              }`}
            />
          ))}
        </div>
        <div className="flex gap-4">
          {thirdRow.map((letter, index) => (
            <Square
              key={index}
              onSquareClick={() => handleGuess(letter)}
              value={letter}
              classes={`${
                phrase.toUpperCase().split("").includes(letter) &&
                !hiddenLetters.has(letter) &&
                "opacity-20"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Board;
