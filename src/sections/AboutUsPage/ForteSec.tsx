"use client";

import { motion } from "framer-motion";

export default function ForteSec() {
  // Variants for left and right columns
  const leftVariants = {
    hidden: { opacity: 0, x: -40 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { type: "spring", stiffness: 100, damping: 20, duration: 0.8 },
    },
  };

  const rightVariants = {
    hidden: { opacity: 0, x: 40 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 20,
        duration: 0.8,
        when: "beforeChildren",
        staggerChildren: 0.2,
      },
    },
  };

  // Variants for each content block in the right column
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 120, damping: 20, duration: 0.5 },
    },
  };

  return (
    <section className="py-20 bg-white overflow-x-hidden">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Left Column - Headline */}
        <motion.div
          className="flex justify-center md:block gap-2 md:text-left px-4  hover:scale-110 active:scale-110 transition-all duration-200"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.6 }}
          variants={leftVariants}
        >
          <h2 className="text-4xl md:text-4xl font-semibold text-black">Our</h2>
          <h2 className="text-4xl md:text-8xl font-semibold text-red-orange-500">Forte</h2>
        </motion.div>

        {/* Right Column - Scrollable Text */}
        <motion.div
          className="max-h-80 md:max-h-96 overflow-y-scroll pr-2 sm:pr-4"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.6 }}
          variants={rightVariants}
        >
          <motion.div className="text-base sm:text-lg text-gray-700 leading-relaxed">
            <motion.div className="py-4" variants={itemVariants}>
              <h1 className="text-xl md:text-3xl py-2 text-black font-bold tracking-wide">Our Goal.</h1>
              <p>
                Client satisfaction is our top priority in every project, which has earned us a place among the leading architects and interior designers in Bangalore.
              </p>
            </motion.div>
            <motion.div className="py-4" variants={itemVariants}>
              <h1 className="text-xl md:text-3xl text-black py-2 font-bold tracking-wide">Key Of Focus.</h1>
              <p>
                Our core focus is on designing built environments that enrich and transform lives. We create timeless yet contemporary designs tailored to our clients’ budgets, delivering each project within the committed timeline through effective management and planning.
              </p>
            </motion.div>
            <motion.div className="py-4" variants={itemVariants}>
              <h1 className="text-xl md:text-3xl text-black py-2 font-bold tracking-wide">What we trust in.</h1>
              <p>
                The firm believes in transparent dealings, meticulous pre-planning, and exceptional craftsmanship in execution.
              </p>
            </motion.div>
            <motion.div className="py-4" variants={itemVariants}>
              <h1 className="text-xl md:text-3xl text-black py-2 font-bold tracking-wide">Range of Clients We Serve.</h1>
              <p>
                The firm efficiently manages projects for clients across the full spectrum of budgets, from modest to high-end.
              </p>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
