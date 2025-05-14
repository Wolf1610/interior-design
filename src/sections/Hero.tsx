"use client";

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
          <div className="">
            <h2 className="text-5xl max-w-6xl md:text-7xl  font-medium mt-6 text-center">
              A haven of beautiful{" "}
              <span className="text-red-orange-500 font-bold">interior and exterior </span> {" "}design
            </h2>
          </div>
          <p className="mt-4 text-md md:text-2xl max-w-3xl">
            Elevate your living experience with our bespoke interior and exterior design
            services. We bring your vision to life with a perfect blend of
            aesthetics and functionality.
          </p>
          <div className="py-5">
            <Button variant="primary" className="px-2">
              <a href="tel:9178941241" className="text-sm">
                Contact us
              </a>
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
