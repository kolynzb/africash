import { Quote } from "lucide-react";
import Image from "next/image";
import React from "react";

type Props = {
  testimonial: string;
  name: string;
  designation: string;
  avatar: string;
};

const TestimonialCard = (props: Props) => {
  return (
    <div className="w-[400px] h-[300px] mx-auto mt-8 rounded-lg shadow max-w-md px-10 py-2 border border-gray-200 font-light leading-snug flex flex-col justify-between">
      <div className="mt-2 relative ">
        <div className="-ml-4">
          <Quote className="w-4 opacity-70 text-accent fill-accent" />
        </div>
        {props.testimonial}
        <div className="-mr-4 absolute right-4">
          <Quote className="w-4 opacity-70 text-accent fill-accent" />
        </div>
      </div>

      <div>
        <div className="mx-auto w-full border  my-8"></div>
        <div className="flex items-center">
          <figure className="relative">
            <Image
              className="w-12 h-12 rounded-full "
              src={props.avatar}
              width={50}
              height={50}
              alt={`${props.name}'s name`}
            />
          </figure>
          <div className="ml-4">
            <div className="font-bold">{props.name}</div>
            <div className="text-sm text-gray-600 mt-1">
              {props.designation}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
