import { cn } from "@/lib/utils";
import React from "react";
import Balancer from "react-wrap-balancer";

type Props = {
  children: React.ReactNode;
  className?: string;
};

const SectionTitle = ({ children, className }: Props) => {
  return (
    <h1
      className={cn(
        "text-4xl md:text-4xl text-center  dark:text-white font-extrabold",
        className
      )}
    >
      <Balancer className="max-w-xl">{children}</Balancer>{" "}
    </h1>
  );
};

export default SectionTitle;
