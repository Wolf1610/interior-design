"use client";

import { useState } from "react";
import Image from "next/image";
import { twMerge } from "tailwind-merge";
import { AnimatePresence, motion } from "framer-motion";
import logoImage from "@/assets/logo.svg";

const navLinks = [
  { label: "Interiors", href: "#interiors" },
  { label: "Design Ideas", href: "#design-ideas" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "About Us", href: "#about" },
  { label: "Contact Us", href: "#contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <section className="fixed w-full top-0 z-50 bg-white shadow-xl">
        <div className="container">
          <div className="">
            <div className="flex justify-between p-2 md:pr-2 items-center">
              <div className="flex items-center gap-1">
                <div>
                  <Image
                    src={logoImage}
                    alt="logo"
                    className="h-9 w-auto md:h-auto cursor-pointer"
                  />
                </div>
                <div>
                  <a href="#" className="font-bold tracking-wide md:text-md lg:text-lg">Elegance Architect</a>
                </div>
              </div>
              <div className="flex justify-between">
                <div className="lg:flex justify-center items-center hidden">
                  <nav className="flex gap-6 font-medium text-sm md:text-md lg:text-md">
                    {navLinks.map((link) => (
                      <a href={link.href} key={link.label} className="tracking-wide">
                        {link.label}
                      </a>
                    ))}
                  </nav>
                </div>
                <div className="flex justify-end gap-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="feather feather-menu lg:hidden cursor-pointer"
                    onClick={() => setIsOpen(!isOpen)}
                  >
                    <line
                      x1="3"
                      y1="12"
                      x2="21"
                      y2="12"
                      className={twMerge(isOpen && "opacity-0")}
                    ></line>
                    <line
                      x1="3"
                      y1="6"
                      x2="21"
                      y2="6"
                      className={twMerge(
                        "origin-left transition-all",
                        isOpen && "rotate-45 -translate-y-1"
                      )}
                    ></line>
                    <line
                      x1="3"
                      y1="18"
                      x2="21"
                      y2="18"
                      className={twMerge(
                        "origin-left transition-all",
                        isOpen && "-rotate-45 translate-y-1"
                      )}
                    ></line>
                  </svg>
                </div>
              </div>
            </div>
            <AnimatePresence>
              {isOpen && (
                <motion.div
                  initial={{ height: 0 }}
                  animate={{ height: "auto" }}
                  exit={{ height: 0 }}
                  className="overflow-hidden"
                >
                  <div className="flex flex-col items-center cursor-pointer gap-4 py-4 ">
                    {navLinks.map((link) => (
                      <a href={link.href} key={link.label} className="py-2 tracking-wide">
                        {link.label}
                      </a>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </section>
    </>
  );
}
