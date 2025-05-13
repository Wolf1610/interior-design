"use client";

import { motion } from "framer-motion";
import React from "react";

const cities = [
  { name: "Mumbai" },
  { name: "Delhi" },
  { name: "Bangalore" },
  { name: "Chennai" },
  { name: "Kolkata" },
  { name: "Hyderabad" },
  { name: "Pune" },
  { name: "Ahmedabad" },
];

export default function LogoTicker() {
  return (
    <section className="overflow-x-clip">
      <div className="container">
        <h3 className="text-center text-white/50 text-xl">
          Already chosen by these market leaders
        </h3>
        <div className="flex overflow-hidden mt-12 mb-5 [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
          <motion.div
            animate={{
              x: "-50%",
            }}
            transition={{ duration: 26, ease: "linear", repeat: Infinity }}
            className="flex flex-none gap-8 pr-10 pb-2"
          >
            {Array.from({ length: 2 }).map((_, i) => (
              <React.Fragment key={i}>
                {cities.map(({ name }) => (
                  <div
                    key={name}
                    className="flex items-center group cursor-pointer font-bold"
                  >
                    <span className="text-red-orange-500 text-3xl mr-5">&#10038;</span>
                    <h2 className="text-4xl md:text-5xl lg:text-6xl transition duration-300 ease-in-out group-hover:text-[#f45c2d] active:text-[#f45c2d] active:duration-200 active:transition-all group-hover:scale-105">
                      {name}
                    </h2>
                  </div>
                ))}
              </React.Fragment>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
