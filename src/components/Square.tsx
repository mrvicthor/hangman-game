"use client";
import React, { useState, useEffect } from "react";

type SquareProps = {
  value: string;
  onSquareClick?: () => void;
  classes?: string;
};
const Square = ({ value, onSquareClick, classes }: SquareProps) => {
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);
  if (!mounted) return null;
  return (
    <button
      className={`bg-white rounded-xl ${classes} w-[3.8056rem] sm:w-[5.25rem] lg:w-[6.8125rem] lg:h-[5.25rem] text-[2.25rem] md:text-[3.625rem] text-[#261676]`}
      onClick={onSquareClick}
    >
      {value}
    </button>
  );
};

export default Square;
