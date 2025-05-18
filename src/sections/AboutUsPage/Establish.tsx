"use client";

import { useInView } from "react-intersection-observer";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function CounterSection() {
  const { ref, inView } = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });

  const [startCount, setStartCount] = useState(false);

  useEffect(() => {
    if (inView && !startCount) {
      setStartCount(true);
    }
  }, [inView, startCount]);

  // Container animation - scale + fade + slight bounce on appear
  const containerVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 120,
        damping: 15,
        mass: 0.7,
        duration: 1,
        when: "beforeChildren",
        staggerChildren: 0.15,
        ease: "easeOut",
      },
    },
  };

  // Children animation - fade + slide up with slight bounce
  const childVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 120,
        damping: 20,
      },
    },
  };

  return (
    <section
      ref={ref}
      className="flex items-center justify-center py-20 bg-gray-100 overflow-x-hidden"
    >
      <motion.div
        className="container flex flex-col gap-8 max-w-4xl mx-auto text-center items-center"
        variants={containerVariants}
        initial="hidden"
        animate={startCount ? "visible" : "hidden"}
      >
        <motion.div
          className="flex items-center gap-5"
          variants={childVariants}
        >
          <h2 className="text-3xl md:text-5xl font-bold text-black">
            Established in
          </h2>
          <div className="flex items-center gap-5">
            <p className="text-2xl font-bold text-black mb-2">year</p>
            <span className="text-red-orange-500 text-4xl md:text-6xl font-extrabold leading-tight">
              2017
            </span>
          </div>
        </motion.div>

        <motion.p
          className="text-md tracking-wide md:text-xl text-gray-700 max-w-xl"
          variants={childVariants}
        >
          Intarch Studio Consultant is one of the most renowned architectural and
          interior design firms in Ranchi.
          <br />
          <br />
          With over 8 years of experience, we have consistently delivered innovative
          design solutions across a wide range of projects, backed by our
          multidisciplinary expertise in architecture and interiors.
        </motion.p>
      </motion.div>
    </section>
  );
}
