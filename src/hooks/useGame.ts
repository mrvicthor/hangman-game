import { useState } from "react";
import { generateHiddenLetters, getRandomItemFromCategory } from "@/helpers";
type GameStatus = "playing" | "won" | "lost";
const REVEAL_PERCENTAGE = 0.7;

export const useGame = (data: string, MAX_MISTAKES: number) => {
  const [guessedLetters, setGuessedLetters] = useState(new Set<string>([" "]));
  const [mistakes, setMistakes] = useState(0);
  const [gameStatus, setGameStatus] = useState<GameStatus>("playing");
  const [hiddenLetters, setHiddenLetters] = useState<Set<string>>(new Set());
  const [phrase, setPhrase] = useState<string>("");
  const [progressBarWidth, setProgressBarWidth] = useState(100);

  const startNewGame = (): void => {
    const randomPhrase = getRandomItemFromCategory(JSON.parse(data));
    const hiddenLetters = generateHiddenLetters(
      randomPhrase.name,
      REVEAL_PERCENTAGE
    );

    const hiddenLettersToUse = new Set(
      Array.from(hiddenLetters).map((item) => item.toUpperCase())
    );

    setGuessedLetters(new Set([" "]));
    setHiddenLetters(hiddenLettersToUse);
    setPhrase(randomPhrase.name);
    setMistakes(0);
    setGameStatus("playing");
    setProgressBarWidth(100);
  };

  const handleGuess = (letter: string): void => {
    if (gameStatus !== "playing") return;
    const newGuessedLetters = new Set(guessedLetters);
    newGuessedLetters.add(letter);
    hiddenLetters.delete(letter);
    const isWrongGuess = !phrase.toUpperCase().includes(letter);
    if (isWrongGuess) {
      const newMistakes = isWrongGuess ? mistakes + 1 : mistakes;
      setProgressBarWidth((prevState) =>
        Math.max(0, prevState - 100 / MAX_MISTAKES)
      );
      setMistakes(newMistakes);
      if (mistakes >= MAX_MISTAKES) {
        setGameStatus("lost");
        alert("You lost");
      }
    }
    setGuessedLetters(newGuessedLetters);
    setHiddenLetters(hiddenLetters);
  };

  const shouldShowLetter = (letter: string): boolean => {
    return (
      letter === " " || guessedLetters.has(letter) || !hiddenLetters.has(letter)
    );
  };

  return {
    hiddenLetters,
    handleGuess,
    shouldShowLetter,
    startNewGame,
    phrase,
    progressBarWidth,
  };
};
