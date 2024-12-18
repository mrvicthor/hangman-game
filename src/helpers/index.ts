type Category = {
  name: string;
  selected: boolean;
};
export const getRandomItemFromCategory = (arr: Category[]) => {
  return arr[Math.floor(Math.random() * arr.length)];
};

export const generateHiddenLetters = (
  phrase: string,
  revealPercentage: number
): Set<string> => {
  // Get unique letters excluding spaces
  const uniqueLetters = Array.from(
    new Set(phrase.replace(/\s/g, "").split(""))
  );

  // Shuffle array
  const shuffledLetters = [...uniqueLetters].sort(() => Math.random() - 0.5);

  // calculate how many letters to hide
  const numToHide = Math.floor(uniqueLetters.length * (1 - revealPercentage));

  // Return set of hidden letters
  return new Set(shuffledLetters.slice(0, numToHide));
};

export const alphabets = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];

export const handleShufflePhrase = (phrase: string) => {
  const uniqueLetters = Array.from(
    new Set(phrase.replace(/\s/g, "").split(""))
  );

  // Shuffle array
  const shuffledLetters = [...uniqueLetters].sort(() => Math.random() - 0.5);
  return new Set(shuffledLetters);
};
