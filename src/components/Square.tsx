"use client";
import React, { useState, useEffect } from "react";

type SquareProps = {
  value: string;
  onSquareClick?: () => void;
  classes?: string;
  tabIndex: number;
  disable: boolean;
};
const Square = ({
  value,
  onSquareClick,
  classes,
  tabIndex,
  disable,
}: SquareProps) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);
  if (!mounted) return null;

  return (
    <button
      tabIndex={tabIndex}
      aria-label={`Letter ${value}`}
      disabled={disable}
      className={`bg-white rounded-xl ${classes} ${
        disable && "opacity-20"
      } max-w-[3.8056rem] md:max-w-[5.25rem] hover:bg-[#2463ff] hover:text-white transition-all duration-300 lg:max-w-[6.8125rem] lg:min-w-[6rem] lg:h-[5.25rem] text-[2.25rem] md:text-[3.625rem] text-[#261676]`}
      onClick={onSquareClick}
    >
      {value}
    </button>
  );
};

export default Square;
