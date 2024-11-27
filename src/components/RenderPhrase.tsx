"use client";

type Props = {
  phrase: string;
  hiddenLetters: Set<string>;
  shouldShowLetter: (letter: string) => boolean;
};
const RenderPhrase = ({
  phrase,
  hiddenLetters,
  shouldShowLetter,
}: Props): JSX.Element[] => {
  return phrase
    .toUpperCase()
    .split(" ")
    .map((word, wordIndex) => (
      <div key={wordIndex} className="flex md:gap-4 gap-1 justify-center">
        {word.split("").map((letter, index) => {
          return (
            <div
              className={`lg:w-[5rem] h-[4.125rem] md:h-[6rem] w-[2.5rem] sm:w-[3.5rem] rounded-[2rem] bg-[#2463ff] border-2 border-[#0b1524] overflow-hidden ${
                hiddenLetters.has(letter) && "opacity-20"
              }`}
              key={index}
            >
              <span className="border-x-2  sm:border-t-[.6rem] lg:border-t-[.7rem] border-[#0680FA] rounded-t-[2rem] h-[4.125rem] md:h-[6rem] w-full flex items-center justify-center text-[2.5rem] sm:text-[3rem] md:text-[4rem] lg:text-[4.625rem] text-white">
                {shouldShowLetter(letter) ? letter : ""}
              </span>
            </div>
          );
        })}
      </div>
    ));
};

export default RenderPhrase;
