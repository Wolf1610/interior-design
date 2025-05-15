"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import i1 from "@/assets/hero-1.jpg";
import i2 from "@/assets/hero-2.jpg";
import i3 from "@/assets/hero-3.jpg";
import i4 from "@/assets/hero-4.jpg";
import i5 from "@/assets/hero-5.jpg";
import i7 from "@/assets/home-design.jpg";
import i8 from "@/assets/home-design-1.jpg";
import i9 from "@/assets/home-design-2.jpg";
import i10 from "@/assets/home-design-3.jpg";
import i11 from "@/assets/home-design-4.jpg";
import i12 from "@/assets/home-design-5.jpg";
import i13 from "@/assets/home-design-6.jpg";
import i15 from "@/assets/home-design-8.jpg";
import i16 from "@/assets/home-design-9.jpg";
import i17 from "@/assets/new/ext.jpeg";
import i18 from "@/assets/home-design-11.jpg";
import i19 from "@/assets/home-design-12.jpg";
import i20 from "@/assets/home-design-13.jpg";
import i21 from "@/assets/new/ext4.jpg";
import i22 from "@/assets/office-1.jpg";
import i23 from "@/assets/office-2.jpg";
import i24 from "@/assets/office-3.jpg";
import i25 from "@/assets/new/of2.jpg";
import i26 from "@/assets/new/of6.jpg";
import i27 from "@/assets/new/ext7.jpg";
import i28 from "@/assets/new/ext5.jpg";

const images = [
  {
    src: i1,
    link: "PlaceTitle1",
    title: "Modern Living Room",
    desc: "Location | Plot | sq. ft.",
  },
  {
    src: i2,
    link: "PlaceTitle2",
    title: "Place Title 2",
    desc: "Location | Plot | sq. ft.",
  },
  {
    src: i3,
    title: "Place Title 3",
    link: "PlaceTitle3",
    desc: "Location | Plot | sq. ft.",
  },
  { src: i4, title: "Stylish Kitchen", desc: "Location | Plot | sq. ft.", },
  {
    src: i5,
    link: "PlaceTitle4",
    title: "Place Title 4",
    desc: "Location | Plot | sq. ft.",
  },
  {
    src: i7,
    link: "PlaceTitle5",
    title: "Place Title 5",
    desc: "Location | Plot | sq. ft.",
  },
  {
    src: i8,
    link: "PlaceTitle6",
    title: "Place Title 6",
    desc: "Location | Plot | sq. ft.",
  },
  {
    src: i9,
    link: "PlaceTitle7",
    title: "Place Title 7",
    desc: "Location | Plot | sq. ft.",
  },
  {
    src: i10,
    link: "PlaceTitle8",
    title: "Place Title 8",
    desc: "Location | Plot | sq. ft.",
  },
  {
    src: i11,
    link: "PlaceTitle9",
    title: "Place Title 9",
    desc: "Location | Plot | sq. ft.",
  },
  {
    src: i12,
    link: "PlaceTitle10",
    title: "Place Title 110",
    desc: "Location | Plot | sq. ft.",
  },
  {
    src: i13,
    link: "PlaceTitle11",
    title: "Place Title 11",
    desc: "Location | Plot | sq. ft.",
  },
  {
    src: i15,
    link: "PlaceTitle12",
    title: "Place Title 12",
    desc: "Location | Plot | sq. ft.",
  },
  {
    src: i16,
    link: "PlaceTitle13",
    title: "Place Title 13",
    desc: "Location | Plot | sq. ft.",
  },
  {
    src: i17,
    link: "PlaceTitle20",
    title: "Place Title 20",
    desc: "Location | Plot | sq. ft.",
  },
  {
    src: i18,
    link: "PlaceTitle14",
    title: "Place Title 14",
    desc: "Location | Plot | sq. ft.",
  },
  {
    src: i19,
    link: "PlaceTitle15",
    title: "Place Title 15",
    desc: "Location | Plot | sq. ft.",
  },
  {
    src: i20,
    link: "PlaceTitle16",
    title: "Place Title 16",
    desc: "Location | Plot | sq. ft.",
  },
  {
    src: i21,
    link: "PlaceTitle21",
    title: "Place Title 21",
    desc: "Location | Plot | sq. ft.",
  },
  {
    src: i22,
    link: "PlaceTitle17",
    title: "Place Title 17",
    desc: "Location | Plot | sq. ft.",
  },
  {
    src: i23,
    link: "PlaceTitle18",
    title: "Place Title 18",
    desc: "Location | Plot | sq. ft.",
  },
  {
    src: i24,
    link: "PlaceTitle19",
    title: "Place Title 19",
    desc: "Location | Plot | sq. ft.",
  },
  {
    src: i25,
    link: "PlaceTitle22",
    title: "Place Title 22",
    desc: "Location | Plot | sq. ft.",
  },
  {
    src: i26,
    link: "PlaceTitle22",
    title: "Place Title 22",
    desc: "Location | Plot | sq. ft.",
  },
  {
    src: i27,
    link: "PlaceTitle23",
    title: "Place Title 23",
    desc: "Location | Plot | sq. ft.",
  },
  {
    src: i28,
    link: "PlaceTitle23",
    title: "Place Title 23",
    desc: "Location | Plot | sq. ft.",
  },
];

export default function AnimatedImageGallery() {
  const router = useRouter();

  return (
    <section className="py-8 bg-gray-100">
      <div className="mb-10">
        <div className="pb-4 md:pb-6 lg:pb-8">
          <h2 className="text-4xl md:text-6xl lg:text-6 font-medium mt-6 text-center">
            Get a glimpse of Elegance{" "}
            <span className="text-red-orange-500">homes</span>
          </h2>
        </div>
        <p className="text-md md:text-xl text-center pb-10">
          Latest dream home interiors delivered the hassle-free way
        </p>
      </div>

      <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
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
      <div className="flex justify-end mt-6 px-1">
        <span
          onClick={() => router.push("/projects")}
          className="text-[#f45c2d] text-sm font-medium cursor-pointer hover:underline hover:opacity-90 transition duration-200"
        >
          View All &gt;
        </span>
      </div>
    </section>
  );
}
