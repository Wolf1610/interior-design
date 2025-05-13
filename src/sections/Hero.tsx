"use client"

import heroImage from "@/assets/hero-5.jpg";
import Button from "@/components/Button";
import Image from "next/image";
import { ChevronsDown } from "lucide-react";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <div className="w-full">
      <div className="relative h-[93vh] md:h-screen overflow-hidden">
        {/* Background Image */}
        <Image
          src={heroImage}
          alt="interior image"
          fill
          className="object-cover opacity-85"
          priority
          sizes="100vw"
        />

        {/* Text Overlay */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center px-4 bg-black/40">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
            A haven of beautiful{" "}
            <span className="text-red-orange-500">interior design</span>
          </h1>
          <p className="mt-4 text-base sm:text-lg md:text-xl max-w-2xl">
            Elevate your living experience with our bespoke interior design
            services. We bring your vision to life with a perfect blend of
            aesthetics and functionality.
          </p>
          <div className="py-5">
            <Button variant="primary" className="px-2">
              <a href="tel:9178941241" className="text-sm">Contact us</a>
            </Button>
          </div>
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
