"use client";
import React, { useEffect, useRef, useState } from "react";
import { useMotionValueEvent, useScroll } from "motion/react";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";

export const StickyScroll = ({
  content,
  contentClassName,
  containerClassName,
  grad_bck = false
}: {
  content: {
    title: string;
    description: string;
    content?: React.ReactNode | any;
  }[];
  contentClassName?: string;
  containerClassName?: string;
  grad_bck?: boolean;
}) => {
  const [activeCard, setActiveCard] = React.useState(0);
  const ref = useRef<any>(null);
  const { scrollYProgress } = useScroll({
    // Use the main page scroll instead of container scroll
    target: ref,
    // container: ref,
    offset: ["start start", "end start"],
  });
  const cardLength = content.length;

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    const cardsBreakpoints = content.map((_, index) => index / cardLength);
    const closestBreakpointIndex = cardsBreakpoints.reduce(
      (acc, breakpoint, index) => {
        const distance = Math.abs(latest - breakpoint);
        if (distance < Math.abs(latest - cardsBreakpoints[acc])) {
          return index;
        }
        return acc;
      },
      0,
    );
    setActiveCard(closestBreakpointIndex);
  });

  const backgroundColors = [
    "#000000",
    "#000000",
    "#000000", 
  ];
  const linearGradients = [
    "linear-gradient(to bottom right, #06b6d4, #10b981)", // cyan-500 to emerald-500
    "linear-gradient(to bottom right, #ec4899, #6366f1)", // pink-500 to indigo-500
    "linear-gradient(to bottom right, #f97316, #eab308)", // orange-500 to yellow-500
  ];

  const [backgroundGradient, setBackgroundGradient] = useState(
    linearGradients[0],
  );

  useEffect(() => {
    setBackgroundGradient(linearGradients[activeCard % linearGradients.length]);
  }, [activeCard]);

  return (
    <motion.div
      // animate={{
      //   backgroundColor: backgroundColors[activeCard % backgroundColors.length],
      // }}
      className={`flex justify-center md:space-x-10 rounded-md p-4 md:p-10 py-0 px-[5vw] w-full overflow-hidden ${containerClassName ? containerClassName : 'md:min-h-[200vh]'}`}
      ref={ref}
    >
      <div className="relative flex items-start w-full">
        <div className="w-full lg:w-[50vw]">
          {content.map((item, index) => (
            <div key={item.title + index} className={`my-20 lg:my-40 ${index == content.length - 1 ? 'pb-[20vh]' : 'md:min-h-[40vh]'}`}>
              <motion.h2
                initial={{
                  opacity: 0,
                }}
                animate={{
                  opacity: activeCard === index ? 1 : 0.3,
                }}
                className="text-2xl font-bold text-slate-100"
              >
                {item.title}
              </motion.h2>
              <motion.p
                initial={{
                  opacity: 0,
                }}
                animate={{
                  opacity: activeCard === index ? 1 : 0.3,
                }}
                className="text-lg mt-5 max-w-full lg:max-w-xl text-slate-300 pr-4 lg:pr-0"
              >
                {item.description}
              </motion.p>
              {/* Mobile image - shows below text on small screens */}
              <motion.div
              initial={{
                  opacity: 0,
                }}
                animate={{
                  opacity: activeCard === index ? 1 : 0.3,
                }}
              className="md:hidden mt-6 w-full min-h-[30vh] relative rounded-lg overflow-hidden">
                {item.content}
              </motion.div>
            </div>
          ))}
          
        </div>
      </div>
      <motion.div
        
        className={cn(
          "sticky top-[20vh] hidden h-[40vh] mt-[10vh] w-[40vw] lg:w-[50vw] overflow-hidden md:block",
          contentClassName,
        )}
      >
        <motion.div
          key={activeCard}
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 1.05 }}
          transition={{ 
            duration: 0.5, 
            ease: [0.25, 0.46, 0.45, 0.94],
            opacity: { duration: 0.4 },
            scale: { duration: 0.5 }
          }}
          className="w-full h-full flex items-center justify-center"
        >
          {content[activeCard].content ?? null}
        </motion.div>
      </motion.div>
    </motion.div>
  );
};
