"use client";

import { useState } from "react";
import Image from "next/image";
import { twMerge } from "tailwind-merge";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import logoImage from "@/assets/intarch-edit.png";

const navLinks = [
  { label: "Home", href: "/" },
  {
    label: "Design Ideas",
    href: "#design-ideas",
    submenu: [
      { label: "Living Room", href: "#living-room" },
      { label: "Bedroom", href: "#bedroom" },
      { label: "Kitchen", href: "#kitchen" },
    ],
  },
  { label: "Portfolio", href: "#portfolio" },
  { label: "About Us", href: "#about" },
  { label: "Contact Us", href: "#contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  return (
    <>
      <section className="fixed w-full lg:py-2 top-0 z-50 bg-white shadow-xl">
        <div className="container">
          <div className="">
            <div className="flex justify-between py-3 md:py-3 md:pr-2 items-center">
              <div className="flex items-center gap-1">
                <div className="mb-1"> 
                  <Image
                    src={logoImage}
                    alt="logo"
                    className="h-4 w-auto md:h-4 cursor-pointer"
                  />
                </div>
                <div>
                  <a
                    href="#"
                    className="font-bold tracking-wide text-sm md:text-md lg:text-lg"
                  >
                    INTARCH STUDIO
                  </a>
                </div>
              </div>
              <div className="flex justify-between">
                <div className="lg:flex justify-center items-center hidden">
                  <nav className="flex gap-6 text-sm md:text-md lg:text-md relative">
                    {navLinks.map((link) => (
                      <div key={link.label} className="relative">
                        {link.submenu ? (
                          <>
                            <button
                              onClick={() =>
                                setOpenDropdown(
                                  openDropdown === link.label
                                    ? null
                                    : link.label
                                )
                              }
                              className="tracking-wide flex items-center gap-1"
                            >
                              {link.label}
                              <ChevronDown
                                className={`w-4 h-4 transition-transform duration-300 ${
                                  openDropdown === link.label
                                    ? "rotate-180"
                                    : ""
                                }`}
                              />
                            </button>
                            {openDropdown === link.label && (
                              <div className="absolute left-0 mt-2 w-48 bg-white border border-gray-200 rounded-sm shadow-md z-50">
                                {link.submenu.map((sublink) => (
                                  <a
                                    key={sublink.label}
                                    href={sublink.href}
                                    className="block px-4 py-2 text-sm hover:scale-110 transition-all duration-300"
                                  >
                                    {sublink.label}
                                  </a>
                                ))}
                              </div>
                            )}
                          </>
                        ) : (
                          <a href={link.href} className="tracking-wide">
                            {link.label}
                          </a>
                        )}
                      </div>
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
                        "origin-left ",
                        isOpen && "rotate-45 -translate-y-1"
                      )}
                    ></line>
                    <line
                      x1="3"
                      y1="18"
                      x2="21"
                      y2="18"
                      className={twMerge(
                        "origin-left ",
                        isOpen && "-rotate-45 translate-y-1"
                      )}
                    ></line>
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="flex flex-col justify-center"
            >
              {navLinks.map((link) => (
                <div key={link.label} className="border-b border-gray-300">
                  {link.submenu ? (
                    <>
                      <button
                        onClick={() =>
                          setOpenDropdown(
                            openDropdown === link.label ? null : link.label
                          )
                        }
                        className="w-full flex justify-between items-center px-8 py-5 text-md md:text-xl transition-all"
                      >
                        {link.label}
                        <ChevronDown
                          className={`w-5 h-5 transition-transform ${
                            openDropdown === link.label ? "rotate-180" : ""
                          }`}
                        />
                      </button>
                      <AnimatePresence>
                        {openDropdown === link.label && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            className="flex flex-col px-10 pb-3"
                          >
                            {link.submenu.map((sublink) => (
                              <a
                                href={sublink.href}
                                key={sublink.label}
                                onClick={() => setIsOpen(false)}
                                className="py-2 text-sm md:text-md hover:underline border-t border-gray-300"
                              >
                                {sublink.label}
                              </a>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </>
                  ) : (
                    <a
                      href={link.href}
                      onClick={() => setIsOpen(false)}
                      className="flex justify-between text-md items-center px-8 py-5 md:text-xl hover:bg-white/5 hover:scale-105 transition-all"
                    >
                      {link.label}
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-5 h-5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M17 8l4 4m0 0l-4 4m4-4H3"
                        />
                      </svg>
                    </a>
                  )}
                </div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </section>
    </>
  );
}
