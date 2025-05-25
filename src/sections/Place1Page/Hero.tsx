"use client";

import heroImage from "@/assets/hero-1.jpg";
import i1 from "../../../public/place-1/place-1.jpg";
import Image from "next/image";
import { ChevronsDown } from "lucide-react";
import { motion } from "framer-motion";
import Button from "@/components/Button";

export default function Hero() {
  return (
    <div className="w-full">
      <div className="relative h-[93vh] md:h-screen overflow-hidden">
        {/* Background Image */}
        <Image
          src={i1}
          alt="interior image"
          fill
          className="object-cover opacity-95"
          priority
          sizes="100vw"
        />

        {/* Text Overlay */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center px-4 bg-black/40">
          <motion.div

            className=""
          >
            <h2 className="text-5xl max-w-6xl md:text-7xl  font-medium mt-6 text-center">
              A haven of beautiful{" "}
              <span className="text-red-orange-500 font-semibold">House 1 </span>{" "}
            </h2>
          </motion.div>
          <motion.div

            className="pt-4 md:pt-6"
          >
            <p className="mt-4 text-md font-medium md:text-2xl max-w-3xl">
              PROJECT LOCATION: PLACE-1
              <br />
              PLOT AREA: SQ. FT.
              <br />
              BUILT UP AREA: SQ. FT.
            </p>
          </motion.div>
          <motion.div

            className="pt-8 py-5 md:pt-10"
          >
            <Button variant="primary" className="px-2">
              <a href="tel:7979010425" className="text-md">
                Contact Us
              </a>
            </Button>
          </motion.div>
        </div>

        {/* Scroll to Explore */}
        <motion.div
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
