import React from "react";
import { AnimatedSlide } from "../animations/slide";
import SectionTitle from "../common/section-title";
import TestimonialCard from "../cards/testimonial-card";
import testimonials from "@/data/testimonials.json";

const Testimonials = () => {
  return (
    <AnimatedSlide>
      <SectionTitle>
        Still on the fence, here’s what
        <span className="text-accent">our users</span> are saying
      </SectionTitle>
      {testimonials.map((testimonial, index: React.Key) => (
        <TestimonialCard
          key={index}
          testimonial={testimonial.testimonial}
          name={testimonial.name}
          designation={testimonial.designation}
          avatar={testimonial.avatar}
        />
      ))}
    </AnimatedSlide>
  );
};

export default Testimonials;
