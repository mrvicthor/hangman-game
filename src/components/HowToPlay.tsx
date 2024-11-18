import React from "react";
import Image from "next/image";
import Link from "next/link";
import Cards from "./Cards";

const HowToPlay = () => {
  return (
    <section className="container mx-auto px-6">
      <div className="flex items-center gap-16 md:gap-64  mt-16">
        <div className="cursor-pointer h-[2.5rem] w-[2.5rem] md:h-[4rem] md:w-[4rem] lg:h-[5.875rem] lg:w-[5.875rem] rounded-full play-gradient relative flex items-center justify-center">
          <Link
            href="/"
            className="flex items-center justify-center h-[1.5rem] w-[1.5rem] md:h-[3rem] md:w-[3rem] lg:h-[4.875rem] lg:w-[4.875rem] rounded-full absolute top-0 play-gradient back-gradient "
          >
            <Image
              src="/assets/images/icon-back.svg"
              width={24}
              height={24}
              alt="back icon"
              className="animate-pulse h-[1rem] w-[1rem] md:h-[2rem] md:w-[2rem] lg:h-[3rem] lg:w-[3rem]"
            />
          </Link>
        </div>
        <h1 className="heading-gradient text-4xl md:text-6xl lg:text-9xl font-bold">
          How to Play
        </h1>
      </div>
      <div className="flex flex-col gap-y-4 lg:flex-row lg:gap-x-4 mt-8">
        <Cards />
      </div>
    </section>
  );
};

export default HowToPlay;
