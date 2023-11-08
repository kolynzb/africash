import React from "react";
import Container from "../layout/container";
import Image from "next/image";
import { AnimatedSlide } from "../animations/slide";
import SquigglyLines from "../squiggly-lines";

const CTA = () => {
  return (
    <AnimatedSlide className="relative bg-accent px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-lg md:px-24 lg:px-2 lg:py-4 rounded-md my-20 overflow-hidden">
      <SquigglyLines className="absolute inset-0 scale-[2] z-[1] h-full w-full opacity-[12%] rotate-12" />
      <SquigglyLines className="absolute -right-[601px] scale-[2] z-[1] h-full w-full opacity-[12%] rotate-12" />
      <SquigglyLines className="absolute -left-[610px] scale-[2] z-[1] h-full w-full opacity-[12%] rotate-12" />
      <div className="text-center w-full mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 z-20">
        <h2 className="text-lg font-extrabold text-white   sm:text-4xl">
          Do business with the world
        </h2>

        <div className="lg:mt-0 lg:flex-shrink-0">
          <div className="relative mt-12 inline-flex   space-x-2">
            <Image
              src="/images/google-play-badge.png"
              alt=""
              className="object-contain"
              width={150}
              height={150}
            />
            <Image
              src="/images/app-store-badge.png"
              alt=""
              className="object-contain"
              width={150}
              height={150}
            />
          </div>
        </div>
      </div>
    </AnimatedSlide>
  );
};

export default CTA;
