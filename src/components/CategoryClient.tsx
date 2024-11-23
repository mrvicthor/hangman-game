"use client";
import React, { useEffect, useRef, useState } from "react";
import GradientCircle from "./GradientCircle";
import Heading from "./Heading";

import { useRouter } from "next/navigation";

type Props = {
  categories: string[];
};

const CategoryClient = ({ categories }: Props) => {
  const categoryRefs = useRef<HTMLButtonElement[]>([]);
  const router = useRouter();
  const [isMounted, setIsMounted] = useState(false);

  const [activeCategory, setActiveCategory] = useState(false);

  const handleFocus = () => {
    setActiveCategory(true);
  };
  const handleBlur = () => {
    setActiveCategory(false);
  };

  const handleKeydown = (
    e: React.KeyboardEvent<HTMLButtonElement>,
    category: string,
    index: number
  ) => {
    const { key } = e;
    switch (key) {
      case "ArrowRight":
      case "ArrowDown":
        e.preventDefault();
        categoryRefs.current[
          index === categories.length - 1 ? 0 : index + 1
        ]?.focus();
        break;
      case "ArrowLeft":
      case "ArrowUp":
        e.preventDefault();
        categoryRefs.current[
          index === 0 ? categories.length - 1 : index - 1
        ]?.focus();
        break;
      case "Enter":
      case " ":
        e.preventDefault();
        router.push(`/board/${category}`);
        break;
      case "Escape":
        e.preventDefault();
        setActiveCategory(false);
        break;
    }
  };

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return null;

  return (
    <section className="container px-6">
      <div className="flex items-center gap-16 md:gap-64  mt-16">
        <GradientCircle imageSrc="/assets/images/icon-back.svg" />
        <Heading text="Pick a Category" />
      </div>
      <div
        className="grid grid-cols-1 mt-16 gap-4 md:gap-10 lg:grid-cols-3 md:grid-cols-2"
        role="menu"
      >
        {categories.map((category, index) => (
          <button
            key={index}
            onFocus={handleFocus}
            onBlur={handleBlur}
            ref={(el) => {
              if (el) categoryRefs.current[index] = el;
            }}
            onKeyDown={(e) => handleKeydown(e, category, index)}
            tabIndex={activeCategory ? 1 : 0}
            onClick={() => router.push(`/board/${category}`)}
            role="menuitem"
            aria-label={`Navigate to ${category} category`}
            className="text-white h-[4.8125rem] md:max-w-[20.25rem] md:h-[11.875rem] lg:w-[24rem] bg-[#2463ff] group/item  rounded-[2rem] flex items-end justify-center border-x-4 border-[#0b1524] border-b-4 border-t overflow-hidden menu-wrapper"
          >
            <span className="h-[4.8125rem] w-full md:h-[11.875rem] flex items-center justify-center border-x-2  border-t-[.7rem] group-hover/item:opacity-50  group-hover/item:bg-[#0680fa] group-hover/item:border-[#2463ff] border-[#0680FA] rounded-t-[2rem] md:text-[3.625rem] text-[1.8125rem] uppercase lg:tracking-wider">
              {category}
            </span>
          </button>
        ))}
      </div>
    </section>
  );
};

export default CategoryClient;
