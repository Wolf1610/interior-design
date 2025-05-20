"use client";

import Button from "@/components/Button";
import { ChevronsDown } from "lucide-react";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <div className="bg-linear-to-r from-zinc-500 via-stone-600 to-zinc-900 w-full">
      <div className="containe relative h-[94vh] md:h-screen overflow-hidden">

        {/* Text Overlay */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center px-4 bg-black/40">
          <motion.div
            initial={{ opacity: 0, y: "100%" }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.5,
              delay: 0.5,
            }}
            className="pb-3"
          >
            <h2 className="text-5xl max-w-6xl md:text-8xl tracking-wider font-medium mt-6 text-center">
              <span className="text-red-orange-500 font-bold uppercase">
                Corpotate
              </span>
            </h2>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: "100%" }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.5,
              delay: 1,
            }}
            className="pb-3"
          >
            <p className="mt-4 text-md font-medium md:text-2xl max-w-3xl">
            Future-Ready Corporate Interiors Designed for Growth and Collaboration
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: "100%" }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.5,
              delay: 1.75,
            }}
            className="py-5"
          >
            {/* Vibration effect on the button */}
            <motion.div
              animate={{ y: [0, -2, 2, -2, 2, 0] }}
              transition={{
                duration: 1,
                repeat: Infinity,
                repeatType: "mirror",
                ease: "easeInOut",
              }}
            >
              <Button variant="primary" className="px-2">
                <a href="tel:7979010425" className="text-md">
                  Contact Us
                </a>
              </Button>
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll to Explore */}
        <motion.div
          initial={{ y: 0 }}
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex flex-col items-center text-white"
        >
          <span className="text-sm mb-1">Scroll to Explore</span>
          <ChevronsDown className="w-6 h-6 animate-bounce" />
        </motion.div>
      </div>
    </div>
  );
}
