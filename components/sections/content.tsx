import { MoveRight } from "lucide-react";
import { Button } from "../ui/button";
import { AnimatedSlide } from "../animations/slide";
import Image from "next/image";
import SectionTitle from "../common/section-title";

const Content = () => {
  return (
    <section className="lg:max-w-5xl mx-auto">
      <SectionTitle className="mt-20">
        Trusted by <span className="text-accent">200 Million+</span> active
        users across 54 countries
      </SectionTitle>
      <AnimatedSlide className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
        <div className="grid gap-5 row-gap-10 lg:grid-cols-2">
          <figure className="relative sm:h-[500px]">
            <Image
              className="object-contain w-full object-left "
              src="/images/phone1.png"
              alt=""
              fill={true}
            />
          </figure>
          <div className="flex flex-col justify-center">
            <div className="max-w-xl mb-6">
              <h2 className="max-w-lg mb-6  text-base font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none">
                Travel every country in Africa without hopping on a plane
              </h2>
              <p className="text-sm text-gray-700  mb-6">
                We are building a digital community that will empower you to
                take control of your money and make it work for you.
              </p>
              <Button
                variant="ghost"
                className="w-auto hover:text-accent hover:bg-transparent p-0 "
              >
                Learn More <MoveRight size={16} className=" font-light ml-2" />
              </Button>
            </div>
          </div>
        </div>
      </AnimatedSlide>
      <AnimatedSlide className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
        <div className="grid gap-5 row-gap-10 lg:grid-cols-2">
          <div className="flex flex-col justify-center">
            <div className="max-w-xl mb-6">
              <h2 className="max-w-lg mb-6  text-base font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none">
                Earn rewards as you spend
              </h2>
              <p className="text-sm text-gray-700  mb-6">
                We are building a digital community that will empower you to
                take control of your money and make it work for you.
              </p>
              <Button
                variant="ghost"
                className="w-auto hover:text-accent hover:bg-transparent p-0"
              >
                Learn More <MoveRight size={16} className=" font-light ml-2" />
              </Button>
            </div>
          </div>
          <figure className="relative sm:h-[500px]">
            <Image
              className="object-contain w-full object-right "
              src="/images/phone2.png"
              alt=""
              fill={true}
            />
          </figure>
        </div>
      </AnimatedSlide>
    </section>
  );
};

export default Content;
