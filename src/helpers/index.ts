type Category = {
  name: string;
  selected: boolean;
};
export const getRandomItemFromCategory = (arr: Category[]) => {
  return arr[Math.floor(Math.random() * arr.length)];
};

export const randomlyReplaceStringWithSpaces = (value: string) => {
  const numToRemove =
    value.length <= 4
      ? Math.floor(Math.random() * 2) + 1
      : Math.floor(Math.random() * 4) + 2;
  const chars = value.split("");
  const indicesToReplace = new Set();
  while (indicesToReplace.size < numToRemove) {
    const randomIndex = Math.floor(Math.random() * chars.length);
    indicesToReplace.add(randomIndex);
  }
  indicesToReplace.forEach((index) => {
    chars[index as number] = " ";
  });
  return chars.join("");
};
