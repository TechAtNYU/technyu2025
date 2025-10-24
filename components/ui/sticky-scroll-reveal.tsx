//ts
"use client";
import React, { useRef } from "react";
import { useMotionValueEvent, useScroll } from "motion/react";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";

export const StickyScroll = ({
  content,
  contentClassName,
  containerClassName,
}: {
  content: {
    title: string;
    description: string;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    content?: React.ReactNode | any;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    mobileContent?: React.ReactNode | any;
  }[];
  contentClassName?: string;
  containerClassName?: string;
}) => {
  const [activeCard, setActiveCard] = React.useState(0);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const ref = useRef<any>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start center", "end center"], // Changed to trigger when sections hit center of viewport
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

  // const backgroundColors = [
  //   "#000000",
  //   "#000000",
  //   "#000000", 
  // ];
  // const linearGradients = [
  //   "linear-gradient(to bottom right, #06b6d4, #10b981)", // cyan-500 to emerald-500
  //   "linear-gradient(to bottom right, #ec4899, #6366f1)", // pink-500 to indigo-500
  //   "linear-gradient(to bottom right, #f97316, #eab308)", // orange-500 to yellow-500
  // ];

  // const [backgroundGradient, setBackgroundGradient] = useState(
  //   linearGradients[0],
  // );

  // useEffect(() => {
  //   setBackgroundGradient(linearGradients[activeCard % linearGradients.length]);
  // }, [activeCard]);

  return (
    <motion.div
      className={`flex justify-center md:space-x-10 rounded-md p-10 py-0 px-[5vw] ${containerClassName ? containerClassName : 'min-h-[100vh]'}`}
      ref={ref}
    >
      <div className="div relative flex items-start">
        <div className="w-full lg:w-[50vw]">
          {content.map((item, index) => (
            <div key={item.title + index} className={`${index === 0 ? ' my-20 md:my-40' : 'mt-20 md:mt-40'} ${index == content.length - 1 ? 'pb-[20vh]' : 'min-h-[30vh]'}`}>
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
                className="text-lg mt-5 max-w-sm lg:max-w-xl text-slate-300"
              >
                {item.description}
              </motion.p>
              {/* Mobile content display */}
              {item.mobileContent && (
                <div className="mt-8 md:hidden w-full rounded-lg overflow-hidden">
                  {item.mobileContent}
                </div> 
              )}
            </div>
          ))}
          
        </div>
      </div>
      <motion.div
        
        className={cn(
          "sticky top-[60vh] hidden h-[30vh] -translate-y-1/2 mt-[30vh] w-[50vw] overflow-hidden sm:block",
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