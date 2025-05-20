"use client";

import { motion } from "framer-motion";
import TestimonialCard from "@/components/Testimonial";
import thumbnail2 from "@/assets/family-2.jpg";
import thumbnail3 from "@/assets/family-3.jpg";
import thumbnail5 from "@/assets/family-5.png";
import { useRouter } from "next/navigation";

const testimonials = [
  {
    thumbnail: thumbnail5,
    videoUrl: "https://www.youtube.com/embed/LlN8MPS7KQs",
    name: "Rohit Paul & Shveta",
    location: "Gurugram",
    testimonial:
      "Hats off to the entire team at Intrach Studio. They finished the project ahead of time.",
  },
  {
    thumbnail: thumbnail2,
    videoUrl: "https://www.youtube.com/embed/LlN8MPS7KQs",
    name: "Amit Verma",
    location: "Delhi",
    testimonial:
      "Absolutely professional and creative. The space looks fantastic!",
  },
  {
    thumbnail: thumbnail3,
    videoUrl: "https://www.youtube.com/embed/LlN8MPS7KQs",
    name: "Sara Mehta",
    location: "Pune",
    testimonial:
      "They brought our vision to life beautifully. Highly recommended!",
  },
];

export default function TestimonialsSection() {
  const router = useRouter();

  return (
    <section className="py-12 bg-gray-100">
      <div className="container">
        {/* Heading Animation */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="pb-18 md:pb-24"
        >
          <h2 className="text-4xl md:text-6xl font-medium mt-6 text-center">
            Check out some of our{" "}
            <span className="text-red-orange-500">customer reviews</span>
          </h2>
        </motion.div>

        {/* Testimonials Animation */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            visible: {
              transition: {
                staggerChildren: 0.2,
              },
            },
          }}
        >
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <TestimonialCard {...t} />
            </motion.div>
          ))}
        </motion.div>

        {/* View All Link */}
        {/* <motion.div
          className="flex justify-end mt-6 px-7 md:px-10 lg:px-9"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <span
            onClick={() => router.push("/testimonial")}
            className="text-[#f45c2d] text-sm font-medium cursor-pointer hover:underline hover:opacity-90 transition duration-200"
          >
            View All &gt;
          </span>
        </motion.div> */}
      </div>
    </section>
  );
}
