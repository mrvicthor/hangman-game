"use client";
import React, { useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";

interface Props {
  imageSrc: string;
}
const GradientCircle = ({ imageSrc }: Props) => {
  const backButtonRef = useRef<HTMLAnchorElement | null>(null);
  const [isFocused, setIsFocused] = useState(false);
  console.log(isFocused);
  const handleFocus = () => {
    setIsFocused(true);
  };
  const handleBlur = () => {
    setIsFocused(false);
  };
  const handleKeydown = (e: React.KeyboardEvent<HTMLAnchorElement>) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      backButtonRef.current?.click();
    }
  };
  return (
    <Link
      href="/"
      ref={backButtonRef}
      className="cursor-pointer h-[2.5rem] w-[2.5rem] md:h-[4rem] md:w-[4rem] lg:h-[5.875rem] lg:w-[5.875rem] rounded-full play-gradient relative flex items-center justify-center"
      onFocus={handleFocus}
      onBlur={handleBlur}
      onKeyDown={handleKeydown}
    >
      <span
        role="button"
        className="flex items-center justify-center h-[1.5rem] w-[1.5rem] md:h-[3rem] md:w-[3rem] lg:h-[4.875rem] lg:w-[4.875rem] rounded-full absolute top-0 play-gradient back-gradient "
      >
        <Image
          src={imageSrc}
          width={24}
          height={24}
          alt="back icon"
          className="animate-pulse mt-2 h-[1rem] w-[1rem] md:h-[2rem] md:w-[2rem] lg:h-[3rem] lg:w-[3rem]"
        />
      </span>
    </Link>
  );
};

export default GradientCircle;
