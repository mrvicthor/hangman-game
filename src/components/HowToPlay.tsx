import React from "react";
import Image from "next/image";
import Link from "next/link";

const HowToPlay = () => {
  return (
    <section className="container mx-auto px-6">
      <div className="flex items-center gap-64 mt-24">
        <div className="cursor-pointer h-[5.875rem] w-[5.875rem] rounded-full play-gradient relative flex items-center justify-center">
          <Link
            href="/"
            className="flex items-center justify-center h-[4.875rem] w-[4.875rem] rounded-full absolute top-0 play-gradient back-gradient "
          >
            <Image
              src="/assets/images/icon-back.svg"
              width={24}
              height={24}
              alt="back icon"
              className="animate-pulse"
            />
          </Link>
        </div>
        <h1 className="heading-gradient text-9xl font-bold">How to Play</h1>
      </div>
      <div>
        <Cards>
      </div>
    </section>
  );
};

export default HowToPlay;
