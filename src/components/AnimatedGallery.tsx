"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import i1 from "@/assets/hero-1.jpg";
import i2 from "@/assets/hero-2.jpg";
import i3 from "@/assets/hero-3.jpg";
import i4 from "@/assets/hero-4.jpg";
import i5 from "@/assets/hero-5.jpg";
import i6 from "@/assets/hero.jpg";
import i7 from "@/assets/home-design.jpg";
import i8 from "@/assets/home-design-1.jpg";
import i9 from "@/assets/home-design-2.jpg";
import i10 from "@/assets/home-design-3.jpg";
import i11 from "@/assets/home-design-4.jpg";
import i12 from "@/assets/home-design-5.jpg";
import i13 from "@/assets/home-design-6.jpg";
import i15 from "@/assets/home-design-8.jpg";
import i16 from "@/assets/home-design-9.jpg";
import i17 from "@/assets/home-design-10.jpg";
import i18 from "@/assets/home-design-11.jpg";
import i19 from "@/assets/home-design-12.jpg";
import i20 from "@/assets/home-design-13.jpg";
import i21 from "@/assets/office.jpg";
import i22 from "@/assets/office-1.jpg";
import i23 from "@/assets/office-2.jpg";
import i24 from "@/assets/office-3.jpg";
import i25 from "@/assets/office-4.jpg";
import i26 from "@/assets/office-5.jpg";

const images = [
  {
    src: i1,
    link: "ModernLivingRoom",
    title: "Modern Living Room",
    desc: "Sleek and elegant design with natural light.",
  },
  {
    src: i2,
    link: "LuxuryBathroom",
    title: "Luxury Bathroom",
    desc: "Marble finishes with ambient lighting.",
  },
  {
    src: i3,
    title: "Cozy Bedroom",
    link: "CozyBedroom",
    desc: "Warm tones for a restful atmosphere.",
  },
  { src: i4, title: "Stylish Kitchen", desc: "Functional meets fashionable." },
  {
    src: i5,
    link: "HomeOffice",
    title: "Home Office",
    desc: "Minimal design with creative inspiration.",
  },
  {
    src: i7,
    link: "HomeOffice2",
    title: "Home-Office-2",
    desc: "Minimal design with creative inspiration.",
  },
  {
    src: i8,
    link: "HomeOffice3",
    title: "Home-Office-3",
    desc: "Minimal design with creative inspiration.",
  },
  {
    src: i9,
    link: "HomeOffice4",
    title: "Home-Office-4",
    desc: "Minimal design with creative inspiration.",
  },
  {
    src: i10,
    link: "HomeOffice5",
    title: "Home-Office-5",
    desc: "Minimal design with creative inspiration.",
  },
  {
    src: i11,
    link: "HomeOffice6",
    title: "Home-Office-6",
    desc: "Minimal design with creative inspiration.",
  },
  {
    src: i12,
    link: "HomeOffice7",
    title: "Home-Office-7",
    desc: "Minimal design with creative inspiration.",
  },
  {
    src: i13,
    link: "HomeOffice8",
    title: "Home-Office-8",
    desc: "Minimal design with creative inspiration.",
  },
  {
    src: i15,
    link: "HomeOffice9",
    title: "Home-Office-9",
    desc: "Minimal design with creative inspiration.",
  },
  {
    src: i16,
    link: "HomeOffice10",
    title: "Home-Office-10",
    desc: "Minimal design with creative inspiration.",
  },
  {
    src: i18,
    link: "HomeOffice12",
    title: "Home-Office-12",
    desc: "Minimal design with creative inspiration.",
  },
  {
    src: i19,
    link: "HomeOffice13",
    title: "Home-Office-13",
    desc: "Minimal design with creative inspiration.",
  },
  {
    src: i20,
    link: "HomeOffice14",
    title: "Home-Office-14",
    desc: "Minimal design with creative inspiration.",
  },
  {
    src: i22,
    link: "HomeOffice16",
    title: "Home-Office-16",
    desc: "Minimal design with creative inspiration.",
  },
  {
    src: i23,
    link: "HomeOffice17",
    title: "Home-Office-17",
    desc: "Minimal design with creative inspiration.",
  },
  {
    src: i24,
    link: "HomeOffice18",
    title: "Home-Office-18",
    desc: "Minimal design with creative inspiration.",
  },
];

export default function AnimatedImageGallery() {
  const router = useRouter();

  return (
    <section className="px-4 lg:px-5 py-8 bg-gray-100">
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
