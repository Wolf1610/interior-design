"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import i7 from "@/assets/home-design.jpg";
import i9 from "@/assets/home-design-2.jpg";
import i12 from "@/assets/home-design-5.jpg";
import i13 from "@/assets/home-design-6.jpg";
import i15 from "@/assets/home-design-8.jpg";
import i17 from "@/assets/new/ext.jpeg";
import i18 from "@/assets/home-design-11.jpg";
import i21 from "@/assets/new/ext4.jpg";


const images = [
  {
    src: i7,
    link: "project/PlaceTitle5",
    title: "Place Title 5",
    desc: "Location | Plot | sq. ft.",
  },
  {
    src: i9,
    link: "project/PlaceTitle7",
    title: "Place Title 7",
    desc: "Location | Plot | sq. ft.",
  },
  {
    src: i12,
    link: "project/PlaceTitle10",
    title: "Place Title 10",
    desc: "Location | Plot | sq. ft.",
  },
  {
    src: i13,
    link: "project/PlaceTitle11",
    title: "Place Title 11",
    desc: "Location | Plot | sq. ft.",
  },
  {
    src: i15,
    link: "project/PlaceTitle12",
    title: "Place Title 12",
    desc: "Location | Plot | sq. ft.",
  },
  {
    src: i17,
    link: "project/PlaceTitle13",
    title: "Place Title 20",
    desc: "Location | Plot | sq. ft.",
  },
  {
    src: i18,
    link: "project/PlaceTitle14",
    title: "Place Title 14",
    desc: "Location | Plot | sq. ft.",
  },
  {
    src: i21,
    link: "project/PlaceTitle21",
    title: "Place Title 21",
    desc: "Location | Plot | sq. ft.",
  },
];

export default function Corporate_page() {
  const router = useRouter();

  return (
    <section className="py-24 container">
      <div className="columns-1  lg:columns-2 gap-4 space-y-6 space-x-2">
        {images.map((img, i) => (
          <motion.div
            key={i}
            className="relative w-full object-cover group overflow-hidden rounded-lg shadow-md cursor-pointer"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: i * 0.05 }}
            whileHover={{ scale: 1.03 }}
          >
            <div className="overflow-hidden">
              <Image
                src={img.src}
                alt={img.title}
                width={300}
                height={300}
                layout="responsive"
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
              />
            </div>

            {/* Bottom overlay content */}
            <div className="absolute bottom-0 left-0 w-full text-left bg-black/40 px-4 py-2 text-white opacity-100 md:opacity-0 md:group-hover:opacity-100 transition duration-300">
              <motion.h3
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2 }}
                className=" text-sm md:text-lg font-semibold"
              >
                {img.title}
              </motion.h3>
              <motion.p
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="text-sm font-light"
              >
                {img.desc}
              </motion.p>
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="text-sm cursor-pointer mt-2"
              >
                <button
                  onClick={() => router.push(`/${img.link}`)}
                  className="bg-transparent border border-white text-white px-3 py-1.5 font-medium text-xs rounded-sm transition duration-300 shadow-md hover:scale-105 hover:bg-[#f45c2d] active:bg-[#f45c2d]"
                >
                  VIEW PROJECT
                </button>
              </motion.div>
            </div>
          </motion.div>
        ))}
      </div>
      {/* View All Link */}
      {/* <div className="flex justify-end mt-6 px-1">
        <span
          onClick={() => router.push("/projects")}
          className="text-[#f45c2d] text-sm font-medium cursor-pointer hover:underline hover:opacity-90 transition duration-200"
        >
          View All &gt;
        </span>
      </div> */}
    </section>
  );
}
