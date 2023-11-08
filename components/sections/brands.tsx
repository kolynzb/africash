import React from "react";
import { Button } from "../ui/button";
import Image from "next/image";
import { AnimatedSlide } from "../animations/slide";
import Container from "../layout/container";

const Brands = () => {
  return (
    <AnimatedSlide className="bg-[#EDF0F5] my-4">
      <Container className="mt-12 grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 ">
        <figure className="p-4 grayscale transition duration-200 hover:grayscale-0">
          <Image
            src="./images/clients/microsoft.svg"
            className="h-12 w-auto mx-auto"
            loading="lazy"
            alt="client logo"
            width={50}
            height={50}
          />
        </figure>
        <figure className="p-4 grayscale transition duration-200 hover:grayscale-0">
          <Image
            src="./images/clients/airbnb.svg"
            className="h-12 w-auto mx-auto"
            loading="lazy"
            alt="client logo"
            width={50}
            height={50}
          />
        </figure>
        <figure className="p-4 flex grayscale transition duration-200 hover:grayscale-0">
          <Image
            src="./images/clients/google.svg"
            className="h-9 w-auto m-auto"
            loading="lazy"
            alt="client logo"
            width={50}
            height={50}
          />
        </figure>
        <figure className="p-4 grayscale transition duration-200 hover:grayscale-0">
          <Image
            src="./images/clients/ge.svg"
            className="h-12 w-auto mx-auto"
            loading="lazy"
            alt="client logo"
            width={50}
            height={50}
          />
        </figure>
        <figure className="p-4 flex grayscale transition duration-200 hover:grayscale-0">
          <Image
            src="./images/clients/netflix.svg"
            className="h-8 w-auto m-auto"
            loading="lazy"
            alt="client logo"
            width={50}
            height={50}
          />
        </figure>
        <figure className="p-4 grayscale transition duration-200 hover:grayscale-0">
          <Image
            src="./images/clients/google-cloud.svg"
            className="h-12 w-auto mx-auto"
            loading="lazy"
            alt="client logo"
            width={50}
            height={50}
          />
        </figure>
      </Container>
    </AnimatedSlide>
  );
};

export default Brands;
