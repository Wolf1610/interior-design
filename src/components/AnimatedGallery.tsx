"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import i1 from "@/assets/hero-1.jpg";
import i2 from "@/assets/hero-2.jpg";
import i3 from "@/assets/hero-3.jpg";
import i4 from "@/assets/hero-4.jpg";
import i5 from "@/assets/hero-5.jpg";

const images = [
  {
    src: i1,
    title: "Modern Living Room",
    desc: "Sleek and elegant design with natural light.",
  },
  {
    src: i2,
    title: "Luxury Bathroom",
    desc: "Marble finishes with ambient lighting.",
  },
  {
    src: i3,
    title: "Cozy Bedroom",
    desc: "Warm tones for a restful atmosphere.",
  },
  { src: i4, title: "Stylish Kitchen", desc: "Functional meets fashionable." },
  {
    src: i5,
    title: "Home Office",
    desc: "Minimal design with creative inspiration.",
  },
];

export default function AnimatedImageGallery() {
  const router = useRouter();

  return (
    <section className="px-4 py-12 bg-gray-100">
      <div className="mb-10">
        <h2 className="text-3xl font-bold text-center">
          Inspiration for home interior designs
        </h2>
        <p className="text-md text-center py-2">
          Give your home a new look with these interior design ideas curated for
          you
        </p>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
        {images.map((img, i) => (
          <motion.div
            key={i}
            className="relative group overflow-hidden rounded-lg shadow-lg"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            <Image
              src={img.src}
              alt={img.title}
              width={500}
              height={300}
              className="w-full h-72 object-cover group-hover:scale-110 transition-transform duration-500"
            />

            {/* Bottom-left overlay info */}
            <div
              className="absolute bottom-0 left-0 w-full text-left bg-black/60 p-4 text-white opacity-100 md:opacity-0 md:group-hover:opacity-100 transition duration-300"
            >
              <motion.h3
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.1 }}
                className="text-lg font-semibold"
              >
                {img.title}
              </motion.h3>
              <motion.p
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="text-sm"
              >
                {img.desc}
              </motion.p>
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="text-sm cursor-pointer mt-2"
              >
                <button
                  onClick={() => router.push("/i1")}
                  className="bg-transparent border border-white text-white px-3 py-1.5 font-medium text-xs rounded-sm transition duration-300 shadow-md hover:scale-105 hover:bg-[#f45c2d] active:bg-[#f45c2d]"
                >
                  VIEW PROJECT
                </button>
              </motion.div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
