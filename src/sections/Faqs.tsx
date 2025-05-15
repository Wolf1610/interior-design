"use client";
import { useState } from "react";
import { twMerge } from "tailwind-merge";
import { AnimatePresence, motion } from "framer-motion";

const faqs = [
  {
    question: "1. What kind of design services do you offer?",
    answer:
      "We offer both interior and exterior design services for residential and commercial spaces. Whether you're building from scratch, renovating, or just looking to refresh a single room or outdoor area, we can help bring your vision to life.",
  },
  {
    question: "2. Can I work with you just for interiors or just exteriors?",
    answer:
      "Yes, definitely. While we love working on full projects that include both, many of our clients come to us for just one — and we’re happy to tailor our services to what you need.",
  },
  {
    question: "3. How do you usually start a project?",
    answer:
      "It all starts with a conversation. We’ll meet to understand your style, needs, and goals. Then we’ll move into the design phase — where we share ideas, mood boards, layouts, and materials — before finalizing the plan and beginning implementation.",
  },
  {
    question: "4. What’s your typical timeline for a project?",
    answer:
      "It really depends on the size and scope. Smaller interior projects might take 4–6 weeks, while larger renovations or exterior makeovers could take several months. We always give a realistic timeline upfront and keep you updated throughout.",
  },
  {
    question: "5. Can you work with my budget?",
    answer:
      "Yes — we’re very transparent about costs and can scale the design to fit within your budget. During our first meetings, we’ll talk openly about what’s possible and how we can make the most of your investment.",
  },
  {
    question: "6. Do you help with project execution too, or just the design?",
    answer:
      "We do both. Some clients hire us just for design concepts, but most choose our full-service option — where we manage everything from sourcing materials to coordinating with contractors and overseeing installation.",
  },
];

const containerVariants = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0 },
};

export default function Faqs() {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setSelectedIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <section className="py-20 bg-gray-100">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-14 md:mb-20"
        >
          <h2 className="text-4xl md:text-6xl text-center mb-10">
            FAQs? We've got <span className="text-red-orange-500">answers</span>
          </h2>
        </motion.div>

        <motion.div
          className="flex flex-col gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
        >
          {faqs.map((faq, index) => (
            <motion.div
              key={faq.question}
              variants={itemVariants}
              layout
              className="bg-white rounded-md border border-gray-200 shadow-md p-6"
              transition={{ layout: { duration: 1 } }}
            >
              <div
                className="flex justify-between items-center cursor-pointer"
                onClick={() => toggleFAQ(index)}
              >
                <h3 className="font-medium text-lg">{faq.question}</h3>
                <motion.svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className={twMerge(
                    "transition-transform duration-300 w-6 h-6 min-w-[24px] min-h-[24px]",
                    selectedIndex === index && "rotate-45"
                  )}
                >
                  <line x1="12" y1="5" x2="12" y2="19"></line>
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                </motion.svg>
              </div>

              <AnimatePresence>
                {selectedIndex === index && (
                  <motion.div
                    key="content"
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden mt-4 text-gray-700"
                  >
                    <p>{faq.answer}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
