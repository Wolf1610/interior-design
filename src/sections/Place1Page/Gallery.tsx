"use client";

import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { useRouter } from "next/navigation";
import { ChevronLeft, ChevronRight, X } from "lucide-react";

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
import { useState } from "react";

const images = [
  {
    src: i1,
    link: "project/PlaceTitle1",
    title: "Entry Gate",
    desc: "Location | Plot | sq. ft.",
  },
  {
    src: i2,
    link: "PlaceTitle2",
    title: "Varanda",
    desc: "Location | Plot | sq. ft.",
  },
  {
    src: i3,
    link: "PlaceTitle2",
    title: "Mandir",
    desc: "Location | Plot | sq. ft.",
  },
  {
    src: i4,
    link: "PlaceTitle2",
    title: "Corner",
    desc: "Location | Plot | sq. ft.",
  },
  {
    src: i5,
    link: "PlaceTitle2",
    title: "Living Room",
    desc: "Location | Plot | sq. ft.",
  },
  {
    src: i6,
    link: "PlaceTitle2",
    title: "Living Room",
    desc: "Location | Plot | sq. ft.",
  },
  {
    src: i7,
    link: "PlaceTitle2",
    title: "Kitchen",
    desc: "Location | Plot | sq. ft.",
  },
  {
    src: i8,
    link: "PlaceTitle2",
    title: "Kitchen",
    desc: "Location | Plot | sq. ft.",
  },
  {
    src: i9,
    link: "PlaceTitle2",
    title: "Living Room",
    desc: "Location | Plot | sq. ft.",
  },
  {
    src: i10,
    link: "PlaceTitle2",
    title: "Dining",
    desc: "Location | Plot | sq. ft.",
  },
  {
    src: i11,
    link: "PlaceTitle2",
    title: "Home Office",
    desc: "Location | Plot | sq. ft.",
  },
  {
    src: i12,
    link: "PlaceTitle2",
    title: "Home Office",
    desc: "Location | Plot | sq. ft.",
  },
  {
    src: i13,
    link: "PlaceTitle2",
    title: "Master Room",
    desc: "Location | Plot | sq. ft.",
  },
  {
    src: i14,
    link: "PlaceTitle2",
    title: "Son's Room",
    desc: "Location | Plot | sq. ft.",
  },
];

export default function GalleryPage() {
  const router = useRouter();
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const showImage = (index: number) => setSelectedIndex(index);
  const closeModal = () => setSelectedIndex(null);
  const prevImage = () =>
    setSelectedIndex((prev) => (prev! > 0 ? prev! - 1 : images.length - 1));
  const nextImage = () =>
    setSelectedIndex((prev) => (prev! < images.length - 1 ? prev! + 1 : 0));

  return (
    <section className="pt-10 pb-20 bg-gray-100">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="text-center mb-10 pb-8 md:pb-10"
        >
          <h2 className="text-4xl md:text-5xl font-medium mt-6">
            Transforming <span className="text-red-500">Amit Verma’s</span>{" "}
            vision into a space of beauty and modern sophistication.
          </h2>
        </motion.div>

        {/* Masonry Grid */}
        <div className="columns-1 lg:columns-2  gap-5 space-y-4">
          {images.map((img, i) => (
            <motion.div
              key={i}
              className="break-inside-avoid overflow-hidden rounded-xl shadow-md cursor-pointer group"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: i * 0.05 }}
              whileHover={{ scale: 1.02 }}
              onClick={() => showImage(i)}
            >
              <Image
                src={img.src}
                alt={img.title}
                width={800}
                height={500}
                layout="responsive"
                className="object-cover transition-transform duration-500 ease-out group-hover:scale-110 active:scale-110 active:duration-300 active:transition-all"
              />
            </motion.div>
          ))}
        </div>

        {/* Fullscreen Modal */}
        <AnimatePresence>
          {selectedIndex !== null && (
            <motion.div
              className="fixed inset-0 z-50 bg-black bg-opacity-90 flex items-center justify-center p-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <button
                onClick={closeModal}
                className="absolute top-6 right-6 text-white text-3xl cursor-pointer"
              >
                <X size={36} />
              </button>

              <button
                onClick={prevImage}
                className="absolute left-4 md:left-10 top-1/2 transform -translate-y-1/2 text-white cursor-pointer"
              >
                <ChevronLeft size={48} />
              </button>

              <div className="max-w-5xl w-full hover:scale-110 active:scale-110">
                <Image
                  src={images[selectedIndex].src}
                  alt={images[selectedIndex].title}
                  width={1200}
                  height={800}
                  className="w-full h-auto object-contain rounded-lg hover:scale-110 active:scale-110"
                />
                <p className="text-white text-center mt-4 text-lg">
                  {images[selectedIndex].title}
                </p>
              </div>

              <button
                onClick={nextImage}
                className="absolute right-4 md:right-10 top-1/2 transform -translate-y-1/2 text-white"
              >
                <ChevronRight size={48} className="cursor-pointer" />
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
