/* eslint-disable @next/next/no-img-element */
import React from "react";
import { Button } from "../ui/button";
import { Download } from "lucide-react";
import Balancer from "react-wrap-balancer";
import { AnimatedSlide } from "../animations/slide";

const Hero = () => {
  return (
    <AnimatedSlide className=" flex items-center mt-20 flex-col-reverse py-16 lg:pt-0 lg:flex-col lg:pb-0">
      <div className="inset-y-0 top-0 right-0 z-0 w-full max-w-xl px-4 mx-auto md:px-0 lg:pr-0 lg:mb-0 lg:mx-0 lg:w-7/12 lg:max-w-full lg:absolute xl:px-0">
        <img
          className="object-cover lg:object-contain w-full rounded  lg:rounded-none lg:shadow-none md:h-96 lg:h-full"
          src="https://res.cloudinary.com/kolynz-b/image/upload/v1699404130/Group_13_iwbp7o.png"
          alt="Hero Illustration"
          //   fill={true}
        />
      </div>
      <div className="relative flex flex-col items-start w-full max-w-xl px-4 mx-auto md:px-0 lg:px-8 lg:max-w-screen-xl">
        <div className="mb-16  lg:my-40  lg:pr-5">
          <h2 className="mb-5 text-center lg:text-start  text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none">
            <Balancer> Africa in one financial platform</Balancer>
          </h2>
          <p className="pr-5 mb-5 text-base text-center lg:text-start  lg:max-w-lg text-gray-700 md:text-lg">
            Africash is a digital ecosystem designed to make Africa one.
            It&apos;s goal is to bring the dream of financial inclusion to all
            people across the continent.
          </p>
          <div className="flex items-center justify-center lg:justify-start">
            <Button className="inline-flex space-x-4 items-center rounded-full justify-between  h-12 px-6 mb-3  tracking-wide text-white transition duration-200  shadow-md w-auto md:mr-4 md:mb-0 bg-accent hover:bg-white hover:text-accent  focus:shadow-outline focus:outline-none">
              <Download size={16} className=" font-light mr-2" /> Get started-
              it&apos;s free
            </Button>
          </div>
        </div>
      </div>
    </AnimatedSlide>
  );
};

export default Hero;
