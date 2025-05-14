"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { FaPlay } from "react-icons/fa";
import Image, { StaticImageData } from "next/image";

type Props = {
  thumbnail: StaticImageData;
  videoUrl: string;
  name: string;
  location: string;
  testimonial: string;
};

export default function TestimonialCard({
  thumbnail,
  videoUrl,
  name,
  location,
  testimonial,
}: Props) {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className="bg-white py-5 px-5 shadow-lg rounded-xl overflow-hidden transition-all duration-300 cursor-pointer hover:shadow-2xl max-w-sm w-full mx-auto"
    >
      <div className="relative group aspect-w-16 aspect-h-9 bg-white">
        {!isPlaying ? (
          <>
            <Image
              src={thumbnail}
              alt={name}
              fill
              className="object-cover w-full h-full rounded-2xl"
              priority
            />
            <div className="absolute inset-0 bg-black/40 flex flex-col rounded-2xl items-center justify-center transition-opacity duration-300">
              <button
                onClick={() => setIsPlaying(true)}
                className="bg-white text-black rounded-full p-3 shadow-md z-10"
              >
                <FaPlay size={14} />
              </button>
              <p className="text-white font-semibold mt-3 z-10">{name}</p>
              <p className="text-sm text-white/80 z-10">{location}</p>
            </div>
          </>
        ) : (
          <iframe
            className="w-full h-full absolute top-0 left-0"
            src={`${videoUrl}?autoplay=1&rel=0`}
            title={`${name} Testimonial`}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        )}
      </div>

      {/* Testimonial Text */}
      <div className="p-5 text-center relative">
        <div className="text-4xl text-gray-300 absolute left-2 top-2 leading-none">“</div>
        <p className="text-sm text-gray-700 font-medium italic z-10 relative">{testimonial}</p>
        <div className="text-4xl text-gray-300 absolute right-2 bottom-2 leading-none">”</div>
      </div>
    </motion.div>
  );
}
