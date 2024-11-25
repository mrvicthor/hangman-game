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
  console.log(1, uniqueLetters);

  // Shuffle array
  const shuffledLetters = [...uniqueLetters].sort(() => Math.random() - 0.5);
  console.log(2, shuffledLetters);
  // calculate how many letters to hide
  const numToHide = Math.floor(uniqueLetters.length * (1 - revealPercentage));
  console.log(3, numToHide);
  console.log(new Set(shuffledLetters.slice(0, numToHide)));
  // Return set of hidden letters
  return new Set(shuffledLetters.slice(0, numToHide));
};
