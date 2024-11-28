import React from "react";
import Cards from "./Cards";
import GradientCircle from "./GradientCircle";
import Heading from "./Heading";

const HowToPlay = () => {
  return (
    <section className="container mx-auto px-6">
      <div className="flex items-center gap-16 md:gap-64  mt-16">
        <GradientCircle imageSrc="/assets/images/icon-back.svg" />
        <Heading
          text="How to Play"
          classes="text-4xl md:text-6xl lg:text-9xl"
        />
      </div>
      <div className="flex flex-col gap-y-4 lg:flex-row lg:gap-x-4 mt-8">
        <Cards />
      </div>
    </section>
  );
};

export default HowToPlay;
