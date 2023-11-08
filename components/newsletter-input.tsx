import React from "react";
import { Button } from "./ui/button";

const NewsletterInput = () => {
  return (
    <div className="flex px-0 items-center border-gray-300 border-2  rounded-full">
      <input
        type="text"
        placeholder="Email Address"
        className="w-3/5 px-4 rounded-full sm:w-2/3 focus:outline-none"
      />
      <Button className="w-2/5 h-full bg-accent hover:text-accent hover:bg-white hover:shadow-lg cursor-pointer  p-3  rounded-full sm:w-1/3 text-white">
        Subscribe
      </Button>
    </div>
  );
};

export default NewsletterInput;
