"use client";

import { motion } from "framer-motion";
import i1 from "@/assets/new/ext.jpeg";
import i2 from "@/assets/commercial.jpg";
import Image from "next/image";
import { useRouter } from "next/navigation";

const teamMembers = [
  { id: 1, link: "/project-category/private-bunglows", name: "PRIVATE BUNGLOWS", image: i1 },
  { id: 2, link: "/project-category/commercial", name: "COMMERCIAL", image: i2 },
];

export default function Architectures() {
  const router = useRouter();

  return (
    <section className="py-24 overflow-x-hidden">
      <motion.div className="container mx-auto px-4 column-1 md:columns-2 space-y-6 md:space-x-6 max-w-8xl ">
        {teamMembers.map((member) => (
          <motion.div
            key={member.id}
            initial={{ opacity: 0, y: "100%" }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.5,
              delay: 0.5,
            }}
            className="rounded-lg overflow-hidden bg-white shadow-md transition-all duration-300 hover:scale-110 active:scale-110"
            
          >
            <div className="relative">
              <Image
                src={member.image}
                alt={member.name}
                className="w-full h-auto"
                loading="lazy"
                onClick={() => router.push(`${member.link}`)}
              />
            </div>
            <div className="p-4 text-center">
              <h3
                className="text-lg font-semibold text-gray-800"
              >
                <button>{member.name}</button>
              </h3>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
