import { cn } from "@/lib/utils";
import React from "react";

type Props = {
  className?: string;
  children: React.ReactNode;
};

const Container = (props: Props) => {
  return (
    <div
      className={cn(
        "mx-auto max-w-7xl w-full px-5 sm:px-8 md:px-14 lg:px-5",
        props.className
      )}
    >
      {props.children}
    </div>
  );
};

export default Container;
