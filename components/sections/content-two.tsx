import React from "react";
import { AnimatedSlide } from "../animations/slide";
import Image from "next/image";
import { CheckCircle2, MoveRight } from "lucide-react";
import { Button } from "../ui/button";
import SquigglyLines from "../squiggly-lines";

const ContentTwo = () => {
  return (
    <AnimatedSlide className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <div className="flex flex-col max-w-screen-lg lg:overflow-hidden bg-white border rounded shadow-sm lg:flex-row-reverse sm:mx-auto">
        <figure className="relative w-full lg:w-1/2 bg-[#8AF1BA]">
          <Image
            src="/images/content-two.png"
            alt=""
            className="object-contain lg:object-cover w-full lg:absolute h-80 lg:h-full"
            height={320}
            width={320}
          />
        </figure>
        <div className="relative overflow-hidden flex flex-col justify-center p-8 bg-accent text-white lg:p-16 lg:pl-10 lg:w-1/2">
          {/* <div>
            <p className="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-teal-900 uppercase rounded-full bg-teal-accent-400">
              Brand new
            </p>
          </div> */}
          <SquigglyLines className="absolute inset-0 scale-[2] z-[1] h-full w-full opacity-[12%] rotate-12" />

          <h5 className="mb-4 text-3xl font-extrabold leading-none sm:text-4xl">
            Perks of using us?
          </h5>
          <ul className="my-5 list-style-none font-light">
            <li className="flex items-center  mb-2">
              <CheckCircle2 size={14} className="mr-2 " /> No monthly fees
            </li>
            <li className="flex items-center   mb-2">
              <CheckCircle2 size={14} className="mr-2 " /> Shop internationally,
              no fees added
            </li>
            <li className="flex items-center   mb-2 ">
              <CheckCircle2 size={14} className="mr-2 " /> Instant Reversals
            </li>
            <li className="flex items-center   mb-2">
              <CheckCircle2 size={14} className="mr-2 " /> Continental debit
              card
            </li>
          </ul>
          <div>
            <Button
              variant="ghost"
              className="w-auto hover:text-white duration-300 ease-in-out transition-all hover:font-normal hover:translate-x-2 hover:bg-transparent p-0 "
            >
              Learn More <MoveRight size={16} className=" font-light ml-2" />
            </Button>
          </div>
        </div>
      </div>
    </AnimatedSlide>
  );
};

export default ContentTwo;
