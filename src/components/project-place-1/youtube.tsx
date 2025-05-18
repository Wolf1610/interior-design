"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { FaPlay } from "react-icons/fa";
import Image, { StaticImageData } from "next/image";

type Props = {
  thumbnail: StaticImageData;
  videoUrl: string;
  name: string;
};

export default function YoutubeSectionCard({
  thumbnail,
  videoUrl,
  name,
}: Props) {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <section className="container py-6 md:py-12">
      <motion.div
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className="bg-white p-3 md:p-6 lg:p-8 shadow-lg rounded-sm overflow-hidden transition-all duration-300 cursor-pointer hover:shadow-2xl max-w-7xl w-full mx-auto"
      >
        <div className="relative group aspect-w-16 aspect-h-9 bg-white">
          {!isPlaying ? (
            <>
              <Image
                src={thumbnail}
                alt={name}
                fill
                className="object-cover w-full h-full rounded-sm"
                priority
              />
              <div className="absolute inset-0 bg-black/40 flex flex-col rounded-sm items-center justify-center transition-opacity duration-300">
                <button
                  onClick={() => setIsPlaying(true)}
                  className="bg-white text-black rounded-full p-3 shadow-md z-10"
                >
                  <FaPlay size={14} />
                </button>
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
      </motion.div>
    </section>
  );
}
