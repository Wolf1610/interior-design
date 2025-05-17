"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import homePlan from "@/assets/home-plan.jpg";

export default function HomePlan() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section className="py-4 pb-24 bg-gray-100">
      <div className="container mx-auto px-4">
        {/* Heading with animation */}
        <motion.div
          className="text-center mb-10 pb-8 md:pb-10"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-medium mt-6">
            Home Plan <span className="text-red-500">Drawing</span>
          </h2>
        </motion.div>

        {/* Clickable Image */}
        <motion.div
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="p-3 md:p-6 lg:p-8 shadow-lg rounded-md overflow-hidden transition-all duration-300 cursor-pointer hover:shadow-2xl max-w-7xl w-full mx-auto object-cover"
          onClick={() => setIsOpen(true)}
        >
          <Image
            src={homePlan}
            alt="Home Plan Drawing"
            className="w-full h-auto rounded-md"
            placeholder="blur"
          />
        </motion.div>

        {/* Fullscreen Modal */}
        {isOpen && (
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-80 flex flex-col items-center justify-center z-50 p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            {/* Close Button Outside the Image */}
            <div className="w-full max-w-5xl mx-auto flex justify-end mb-4 ">
              <button
                onClick={() => setIsOpen(false)}
                className="text-white p-2 hover:scale-110 transition cursor-pointer"
                aria-label="Close"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>

            {/* Animated Image */}
            <motion.div
              className="w-full max-w-5xl mx-auto"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.4 }}
            >
              <Image
                src={homePlan}
                alt="Fullscreen Home Plan"
                className="w-full h-auto rounded-lg"
              />
            </motion.div>
          </motion.div>
        )}
      </div>
    </section>
  );
}
