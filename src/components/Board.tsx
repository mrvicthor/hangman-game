"use client";
import React, { useState, useEffect } from "react";
import Square from "./Square";
import { generateHiddenLetters, getRandomItemFromCategory } from "@/helpers";
const MAX_MISTAKES = 8;
const REVEAL_PERCENTAGE = 0.6;
type GameStatus = "playing" | "won" | "lost";

type Props = {
  data: string;
};
const Board = ({ data }: Props) => {
  const [guessedLetters, setGuessedLetters] = useState(new Set<string>([" "]));
  const [mistakes, setMistakes] = useState(0);
  const [gameStatus, setGameStatus] = useState<GameStatus>("playing");
  const [hiddenLetters, setHiddenLetters] = useState<Set<string>>(new Set());
  const [phrase, setPhrase] = useState<string>("");
  const [mounted, setMounted] = useState(false);

  const startNewGame = (): void => {
    const randomPhrase = getRandomItemFromCategory(JSON.parse(data));
    const hiddenLetters = generateHiddenLetters(
      randomPhrase.name,
      REVEAL_PERCENTAGE
    );
    setGuessedLetters(new Set([" "]));
    setHiddenLetters(hiddenLetters);
    setPhrase(randomPhrase.name);
    setMistakes(0);
    setGameStatus("playing");
  };

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    startNewGame();
  }, []);

  const shouldShowLetter = (letter: string): boolean => {
    return (
      letter === " " || guessedLetters.has(letter) || !hiddenLetters.has(letter)
    );
  };

  const renderPhrase = (): JSX.Element[] => {
    return phrase.split(" ").map((word, wordIndex) => (
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
                {shouldShowLetter(letter) ? letter.toUpperCase() : ""}
              </span>
            </button>
          );
        })}
      </div>
    ));
  };
  if (!mounted) return null;
  return (
    <section className="">
      <div className="flex gap-4 md:gap-12 justify-center flex-wrap">
        {renderPhrase()}
      </div>

      <div className="mt-16 flex flex-col gap-4">
        <div className="flex gap-4">
          <Square value="A" />
          <Square value="B" />
          <Square value="C" />
          <Square value="D" />
          <Square value="E" />
          <Square value="F" />
          <Square value="G" />
          <Square value="H" />
          <Square value="I" />
        </div>
        <div className="flex gap-4">
          <Square value="J" />
          <Square value="K" />
          <Square value="L" />
          <Square value="M" />
          <Square value="N" />
          <Square value="O" />
          <Square value="P" />
          <Square value="Q" />
          <Square value="R" />
        </div>
        <div className="flex gap-4">
          <Square value="S" />
          <Square value="T" />
          <Square value="U" />
          <Square value="V" />
          <Square value="W" />
          <Square value="X" />
          <Square value="Y" />
          <Square value="Z" />
        </div>
      </div>
    </section>
  );
};

export default Board;
