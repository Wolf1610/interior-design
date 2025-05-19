"use client";

import { motion } from "framer-motion";
import {
  FaHouzz,
  FaLinkedinIn,
  FaPinterestP,
  FaYoutube,
  FaInstagram,
  FaTwitter,
  FaFacebookF,
  FaArtstation,
} from "react-icons/fa";

const icons = [
  { icon: FaLinkedinIn, url: "https://www.linkedin.com" },
  { icon: FaPinterestP, url: "https://www.pinterest.com" },
  { icon: FaYoutube, url: "https://www.youtube.com" },
  { icon: FaInstagram, url: "https://www.instagram.com" },
  { icon: FaTwitter, url: "https://www.x.com" },
  { icon: FaFacebookF, url: "https://www.facebook.com" },
];

const SocialIcons = () => {
  return (
    <motion.div
      className="container flex flex-wrap justify-center gap-4 pt-24 md:pt-34 px-4"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
    >
      {icons.map(({ icon: Icon, url }, index) => (
        <a
          key={index}
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="w-12 h-12 border border-black rounded-full flex items-center justify-center text-black duration-300 ease-in-out hover:bg-[#f45c2d] active:bg-[#f45c2d] hover:border-[#f45c2d] active:border-[#f45c2d] hover:text-white active:text-white hover:scale-110 transition active:scale-110"
        >
          <Icon className="text-lg" />
        </a>
      ))}
    </motion.div>
  );
};

export default SocialIcons;
