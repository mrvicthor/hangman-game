import React from "react";

type SquareProps = {
  value: string;
  onSquareClick?: () => void;
  classes?: string;
};
const Square = ({ value, onSquareClick, classes }: SquareProps) => {
  return (
    <button
      className={`bg-white rounded-xl ${classes} w-[1.8056rem] md:w-[5.25rem] lg:w-[6.8125rem] lg:h-[5.25rem] text-[2.25rem] md:text-[3.625rem] text-[#261676]`}
      onClick={onSquareClick}
    >
      {value}
    </button>
  );
};

export default Square;
