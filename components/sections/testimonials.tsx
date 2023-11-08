import React from "react";
import { AnimatedSlide } from "../animations/slide";
import SectionTitle from "../common/section-title";
import TestimonialCard from "../cards/testimonial-card";
import testimonials from "@/data/testimonials.json";

const Testimonials = () => {
  return (
    <>
      <SectionTitle>
        Still on the fence, here’s what
        <span className="text-accent">our users</span> are saying
      </SectionTitle>
      <div
        className="flex overflow-x-scroll pb-10 hide-scroll-bar"
      >
      <div className=" flex flex-nowrap lg:ml-40 md:ml-20 ml-10 ">
        {testimonials.map((testimonial, index: React.Key) => (
          <div className="inline-block px-3"key={index}>
      
            <TestimonialCard
              testimonial={testimonial.testimonial}
              name={testimonial.name}
              designation={testimonial.designation}
              avatar={testimonial.avatar}
            />
          </div>
        ))}
      </div>
      </div>
    </>
  );
};

export default Testimonials;
