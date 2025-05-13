"use client";

import Image from "next/image";
import { motion } from "framer-motion";

interface ImageCardProps {
  imageSrc: string;
  title: string;
  description: string;
}

export default function ImageCard({ imageSrc, title, description }: ImageCardProps) {
  return (
    <div className="relative overflow-hidden rounded-xl shadow-lg group w-full max-w-md mx-auto cursor-pointer">
      <Image
        src={imageSrc}
        alt={title}
        width={400}
        height={300}
        className="object-cover w-full h-72 transform group-hover:scale-110 transition duration-500 ease-in-out"
      />

      {/* Overlay */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileHover={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
        className="absolute inset-0 bg-black/60 text-white flex flex-col justify-center items-center text-center px-4"
      >
        <motion.h3 className="text-2xl font-bold mb-2" whileHover={{ scale: 1.05 }}>
          {title}
        </motion.h3>
        <motion.p className="text-sm" whileHover={{ scale: 1.02 }}>
          {description}
        </motion.p>
      </motion.div>
    </div>
  );
}
