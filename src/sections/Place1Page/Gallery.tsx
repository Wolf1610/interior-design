"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";

import i1 from "../../../public/place-1/place-1.jpg";
import i2 from "../../../public/place-1/place-2.jpg";
import i3 from "../../../public/place-1/place-3.jpg";
import i4 from "../../../public/place-1/place-4.jpg";
import i5 from "../../../public/place-1/place-5.jpg";
import i6 from "../../../public/place-1/place-6.jpg";
import i7 from "../../../public/place-1/place-7.jpg";
import i8 from "../../../public/place-1/place-8.jpg";
import i9 from "../../../public/place-1/place-9.jpg";
import i10 from "../../../public/place-1/place-10.jpg";
import i11 from "../../../public/place-1/place-11.jpg";
import i12 from "../../../public/place-1/place-12.jpg";
import i13 from "../../../public/place-1/place-13.jpg";
import i14 from "../../../public/place-1/place-14.jpg";

const images = [
  {
    src: i1,
    link: "project/PlaceTitle1",
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
    link: "PlaceTitle2",
    title: "Place Title 2",
    desc: "Location | Plot | sq. ft.",
  },
  {
    src: i4,
    link: "PlaceTitle2",
    title: "Place Title 2",
    desc: "Location | Plot | sq. ft.",
  },
  {
    src: i5,
    link: "PlaceTitle2",
    title: "Place Title 2",
    desc: "Location | Plot | sq. ft.",
  },
  {
    src: i6,
    link: "PlaceTitle2",
    title: "Place Title 2",
    desc: "Location | Plot | sq. ft.",
  },
  {
    src: i7,
    link: "PlaceTitle2",
    title: "Place Title 2",
    desc: "Location | Plot | sq. ft.",
  },
  {
    src: i8,
    link: "PlaceTitle2",
    title: "Place Title 2",
    desc: "Location | Plot | sq. ft.",
  },
  {
    src: i9,
    link: "PlaceTitle2",
    title: "Place Title 2",
    desc: "Location | Plot | sq. ft.",
  },
  {
    src: i10,
    link: "PlaceTitle2",
    title: "Place Title 2",
    desc: "Location | Plot | sq. ft.",
  },
  {
    src: i11,
    link: "PlaceTitle2",
    title: "Place Title 2",
    desc: "Location | Plot | sq. ft.",
  },
  {
    src: i12,
    link: "PlaceTitle2",
    title: "Place Title 2",
    desc: "Location | Plot | sq. ft.",
  },
  {
    src: i13,
    link: "PlaceTitle2",
    title: "Place Title 2",
    desc: "Location | Plot | sq. ft.",
  },
  {
    src: i14,
    link: "PlaceTitle2",
    title: "Place Title 2",
    desc: "Location | Plot | sq. ft.",
  },
];

export default function GalleryPage() {
  const router = useRouter();

  return (
    <section className="pt-10 bg-gray-100">
      <div className="container">
        <section className="py-8 bg-gray-100">
          <div className="mb-10">
            <div className="pb-4 md:pb-6 lg:pb-8">
              <h2 className="text-4xl md:text-6xl lg:text-6 font-medium mt-6 text-center">
                Get a glimpse of Elegance{" "}
                <span className="text-red-orange-500">interior</span>
              </h2>
            </div>
            <p className="text-md md:text-xl text-center pb-10">
              Latest dream home interiors delivered the hassle-free way
            </p>
          </div>

          {/* Masonry Grid */}
          <div className="columns-1  lg:columns-2 gap-4 space-y-6 space-x-2">
            {images.map((img, i) => (
              <motion.div
                key={i}
                className="break-inside-avoid overflow-hidden rounded-lg shadow-md cursor-pointer group"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6, delay: i * 0.05 }}
                whileHover={{ scale: 1.03 }}
              >
                <Image
                  src={img.src}
                  alt={img.title}
                  layout="responsive"
                  className="object-cover w-full transition-transform duration-700 ease-out group-hover:scale-110"
                />
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
      </div>
    </section>
  );
}
