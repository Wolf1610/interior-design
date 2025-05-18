"use client";

import { motion } from "framer-motion";
import YoutubeSectionCard from "@/components/project-place-1/youtube";
import thumbnail2 from "@/assets/family-2.jpg";
import { useRouter } from "next/navigation";

const testimonials = [
  {
    thumbnail: thumbnail2,
    videoUrl: "https://www.youtube.com/embed/LlN8MPS7KQs",
    name: "place1"
  },
];

export default function YoutubeSection() {
  const router = useRouter();

  return (
    <section className="py-12">
      <div className="container">
        {/* Testimonials Animation */}
        <motion.div
          className="grid grid-cols-1"
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
              <YoutubeSectionCard {...t} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
