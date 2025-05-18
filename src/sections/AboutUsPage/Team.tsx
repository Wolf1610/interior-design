"use client";

import { motion } from "framer-motion";
import i1 from "@/assets/team5.jpg";
import i2 from "@/assets/team-2.jpg";
import i3 from "@/assets/team-3.jpg";
import i4 from "@/assets/team-4.jpg";
import Image from "next/image";

const teamMembers = [
  { id: 1, name: "Ar. name 1 <br/> Principal Architect & Founder", image: i1 },
  { id: 2, name: "Ar. name 2 <br/> Senior Architect", image: i2 },
  { id: 3, name: "Ar. name 3 <br/> Creative Head", image: i3 },
  { id: 4, name: "Ar. name 4 <br/> Architect", image: i4 },
];

export default function MeetOurTeam() {
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const headlineVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const memberVariants = {
    hidden: { opacity: 0, scale: 0.95, y: 20 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
    hover: { scale: 1.02 },
    tap: { scale: 0.98 },
  };

  return (
    <section className="py-24 bg-gray-50 overflow-x-hidden">
      <motion.h2
        className="text-4xl md:text-6xl md:pb-10 font-semibold text-center mb-12 text-gray-800"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.6 }}
        variants={headlineVariants}
      >
        Meet Our <span className="text-red-orange-500">Team</span>
      </motion.h2>

      <motion.div
        className="container mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8 max-w-7xl"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.4 }}
      >
        {teamMembers.map((member) => (
          <motion.div
            key={member.id}
            className="rounded-lg overflow-hidden bg-white shadow-md transition-all duration-300"
            variants={memberVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }} // ensures scroll works on mobile
            whileHover="hover"
            whileTap="tap"
          >
            <div className="relative">
              <Image
                src={member.image}
                alt={member.name}
                className="w-full h-auto"
                loading="lazy"
              />
            </div>
            <div className="p-4 text-center">
              <h3
                className="text-lg font-semibold text-gray-800"
                dangerouslySetInnerHTML={{ __html: member.name }}
              ></h3>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
