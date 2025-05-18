"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";

import i1 from "@/assets/home-design.jpg";
import i2 from "@/assets/home-design-1.jpg";
import i3 from "@/assets/home-design-2.jpg";
import i4 from "@/assets/home-design-3.jpg";
import i5 from "@/assets/home-design-4.jpg";
import i6 from "@/assets/home-design-5.jpg";
import i7 from "@/assets/home-design-10.jpg";
import i8 from "@/assets/home-design-11.jpg";

const images = [i1, i2, i3, i4, i5, i6, i7, i8];

export default function ImageTicker() {
  return (
    <section className="overflow-hidden py-20 bg-[#f8f8f8] overflow-x-hidden">
      <div className="">
        <motion.div
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 35, ease: "linear", repeat: Infinity }}
          className="flex w-max gap-6 md:gap-10"
        >
          {[...images, ...images].map((img, index) => (
            <div
              key={index}
              className="relative h-45 md:h-74 w-auto aspect-[3/2] rounded-lg overflow-hidden shadow-lg"
            >
              <Image
                src={img}
                alt={`Image ${index + 1}`}
                fill
                className="object-cover"
              />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
