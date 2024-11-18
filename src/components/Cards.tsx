import React from "react";

const Cards = () => {
  const cardsMetada = [
    {
      column: "01",
      title: "choose a category",
      description:
        "First, choose a word category, like animals or movies. The computer then randomly selects a secret word from that topic and shows you blanks for each letter of the word.",
    },
    {
      column: "02",
      title: "guess letters",
      description:
        "Take turns guessing letters. The computer fills in the relevant blank spaces if your guess is correct. If it’s wrong, you lose some health, which empties after eight incorrect guesses.",
    },
    {
      column: "03",
      title: "win or lose",
      description:
        "You win by guessing all the letters in the word before your health runs out. If the health bar empties before you guess the word, you lose.",
    },
  ];

  return cardsMetada.map((card, index) => (
    <article
      key={index}
      className="bg-white rounded-3xl h-[11.5625rem] min-w-[20.25rem] md:h-[12.5rem] lg:h-[34.375rem] lg:w-[24rem] flex flex-col py-6 md:flex-row lg:flex-col md:items-center lg:pt-16 gap-6 px-6"
    >
      <div className="flex gap-4">
        <p className="font-bold text-2xl md:text-7xl text-[#2463ff]">
          {card.column}
        </p>
        <h2 className="text-2xl md:hidden md:text-3xl lg:text-4xl font-bold uppercase lg:tracking-widest text-[#261676]">
          {card.title}
        </h2>
      </div>
      <div>
        <h2 className="text-2xl hidden md:block lg:text-center  md:text-3xl lg:text-4xl font-bold uppercase tracking-widest text-[#261676]">
          {card.title}
        </h2>
        <p className=" text-[#887dc0] card-description lg:text-center lg:mt-6 text-base lg:text-[1.625rem]">
          {card.description}
        </p>
      </div>
    </article>
  ));
};

export default Cards;
