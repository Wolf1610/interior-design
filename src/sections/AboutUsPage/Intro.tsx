"use client";

import { motion } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.025,
    },
  },
};

const letterVariants = {
  hidden: { y: "100%", opacity: 0 },
  visible: {
    y: "0%",
    opacity: 1,
    transition: { duration: 0.3, ease: "easeOut" },
  },
};

const text =
  "Himanshu Sahu is an award-winning architect and interior designer, renowned for his visionary leadership & iconic designs that inspire across the globe.";

const Intro = () => {
  return (
    <section
      className="py-24 md:py-32 lg:py-40 mt-12 md:mt-16 lg:mt-20 overflow-x-hidden"
      id="intro"
    >
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-4xl md:text-6xl lg:text-7xl font-semibold lg:w-[85%] leading-snug flex flex-wrap overflow-hidden overflow-x-hidden" 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.6 }}
        >
          {text.split(" ").map((word, wordIndex) => (
            <motion.span
              key={wordIndex}
              className="mr-2 whitespace-nowrap hover:scale-110 active:scale-100"
              whileHover={{ scale: 1.1 }}
            >
              {word.split("").map((char, charIndex) => (
                <motion.span
                  key={charIndex}
                  variants={letterVariants}
                  className="inline-block"
                >
                  {char}
                </motion.span>
              ))}
            </motion.span>  
          ))}
        </motion.h2>
      </div>
    </section>
  );
};

export default Intro;
