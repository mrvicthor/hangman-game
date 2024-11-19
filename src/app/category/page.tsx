"use client";
import GradientCircle from "@/components/GradientCircle";
import Heading from "@/components/Heading";
import React from "react";
import { getCategories } from "../lib/data";

const page = async () => {
  const data = await getCategories();
  const categories = Object.keys(data.categories);

  return (
    <section className="container mx-auto px-6">
      <div className="flex items-center gap-16 md:gap-64  mt-16">
        <GradientCircle imageSrc="/assets/images/icon-back.svg" />
        <Heading text="Pick a Category" />
      </div>

      <div className="grid grid-cols-1 mt-16 gap-4 md:gap-10 lg:grid-cols-3 md:grid-cols-2">
        {categories.map((category, index) => (
          <button
            key={index}
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

export default page;
