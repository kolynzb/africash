import React from "react";
import NewsletterInput from "../newsletter-input";
import Socials from "../socials";
import { AnimatedSlide } from "../animations/slide";
import Balancer from "react-wrap-balancer";

const NewsletterSection = () => {
  return (
    <AnimatedSlide className="lg:h-36  flex flex-col  justify-between items-center lg:items-start px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-lg md:px-24 lg:px-2 lg:py-4 rounded-md my-10">
      <h2 className="text-sm  text-center lg:text-start font-bold lg:font-semibold sm:text-4xl">
        <Balancer>Keep up with us by signing up for our newsletter</Balancer>
      </h2>
      <div className="flex items-center  justify-center lg:justify-between  w-full">
        <NewsletterInput />
        <Socials />
      </div>
    </AnimatedSlide>
  );
};

export default NewsletterSection;
