"use client";

import mobileHeroImage from "@/assets/aboutus-hero-i.jpg"; // mobile-specific image
import desktopHeroImage from "@/assets/aboutus-hero.jpg"; // desktop-specific image
import Button from "@/components/Button";
import Image from "next/image";
import { ChevronsDown } from "lucide-react";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <div className="w-full overflow-x-hidden">
      <div className="relative h-[93vh] md:h-screen overflow-hidden">
        {/* Desktop Image */}
        <Image
          src={desktopHeroImage}
          alt="Desktop Hero"
          fill
          className="object-cover opacity-95 hidden sm:block"
          priority
          sizes="100vw"
        />

        {/* Mobile Image */}
        <Image
          src={mobileHeroImage}
          alt="Mobile Hero"
          fill
          className="object-cover opacity-95 sm:hidden"
          priority
          sizes="100vw"
        />

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
            <h2 className="text-4xl md:text-7xl font-semibold text-center">
              About Us
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
            <h1 className="text-4xl md:text-7xl font-bold max-w-6xl hover:scale-110 duration-200 hover:text-[#f45c2d]">
              <span className="text-red-orange-500 font-bold">Interior</span>{" "}
              Design Architecture Construction
            </h1>
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

        {/* Scroll Indicator */}
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
