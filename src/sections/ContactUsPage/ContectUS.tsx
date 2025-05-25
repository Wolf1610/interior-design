"use client";

import { motion } from "framer-motion";
import Button from "@/components/Button";
import { useState } from "react";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaClock,
  FaMapMarkerAlt,
} from "react-icons/fa";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section className="py-14 md:py-20 px-4">
      <div className="container max-w-7xl mx-auto bg-white rounded-md shadow-lg overflow-hidden flex flex-col md:flex-row md:gap-10">
        {/* Left Side - Contact Info */}
        <motion.div
          className="bg-red-orange-500 text-white p-9 w-full md:w-80 rounded-md mt-10 mb-8 space-y-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
        >
          <h2 className="text-2xl font-bold tracking-wide">CONTACT US</h2>

          <div className="space-y-2">
            <div className="flex items-start gap-3">
              <FaMapMarkerAlt className="mt-1" />
              <div>
                <h4 className="font-semibold tracking-wide">Address</h4>
                <p className="text-sm leading-snug">
                  4th Floor, 701/702, The Capital 2, City Road, Ranchi, 834001.
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <FaPhoneAlt />
              <div>
                <h4 className="font-semibold tracking-wide">Call Us</h4>
                <button className="mt-1 bg-transparent border border-white px-3 py-1 rounded text-sm hover:bg-white active:bg-white hover:text-[#f45c2d] active:text-[#f45c2d] hover:scale-110 transition active:scale-110">
                  <a href="tel: +91 79790 10425">+91 79790 10425</a>
                </button>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <FaEnvelope />
              <div>
                <h4 className="font-semibold tracking-wide">Email</h4>
                <button className="mt-1 px-3 py-2 bg-transparent border border-white rounded text-sm hover:bg-white active:bg-white hover:text-[#f45c2d] active:text-[#f45c2d] hover:scale-110 transition active:scale-110">
                  <a href="mailto:intarchstudio01@gmail.com">
                    intarchstudio01@gmail.com
                  </a>
                </button>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <FaClock />
              <div>
                <h4 className="font-semibold tracking-wide">Office Time</h4>
                <p className="text-sm mt-1">10.00 am – 07.00 pm</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Right Side - Form */}
        <motion.div
          className="p-8 w-full md:w-2/3"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
        >
          <h3 className="text-2xl font-semibold text-red-orange-500 mb-6 tracking-wide">
            GET IN TOUCH
          </h3>
          <form className="space-y-5">
            <div className="grid md:grid-cols-2 gap-4">
              <input
                type="text"
                name="name"
                placeholder="Your name *"
                value={formData.name}
                onChange={handleChange}
                className="border rounded w-full p-3 focus:outline-[#f45c2d]"
              />
              <input
                type="email"
                name="email"
                placeholder="Your email *"
                value={formData.email}
                onChange={handleChange}
                className="border rounded w-full p-3 focus:outline-[#f45c2d]"
              />
            </div>
            <input
              type="tel"
              name="phone"
              placeholder="Your Phone Number *"
              value={formData.phone}
              onChange={handleChange}
              className="border rounded w-full p-3 focus:outline-[#f45c2d]"
            />
            <textarea
              name="message"
              placeholder="Message"
              rows={5}
              value={formData.message}
              onChange={handleChange}
              className="border rounded w-full p-3 focus:outline-[#f45c2d]"
            ></textarea>

            <Button
              variant="primary"
              type="submit"
              className="text-white px-6 py-2 hover:bg-[#f45c2d] transition"
            >
              SUBMIT
            </Button>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
