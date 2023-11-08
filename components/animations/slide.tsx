"use client";
import { cn } from "@/lib/utils";
import { motion, useInView, useAnimation } from "framer-motion";
import { useRef, useEffect } from "react";

type props = {
  children: React.ReactNode;
  className?: string;
  delay?: number;
};

export const AnimatedSlide = ({ children, className, delay }: props) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start("stop");
    }
  }, [isInView]);

  return (
    <motion.section
      ref={ref}
      variants={{
        start: { opacity: 0, y: 50 },
        stop: { opacity: 1, y: 0 },
      }}
      initial="start"
      animate={controls}
      transition={{
        ease: "linear",
        delay: delay,
        duration: 0.2,
      }}
      className={cn(className)}
    >
      {children}
    </motion.section>
  );
};

// https://victoreke.com/blog/scroll-reveal-animation-in-react-using-framer-motion
