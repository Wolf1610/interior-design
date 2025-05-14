"use client";

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
      "Hats off to the entire team at Elegence. They finished the project ahead of time.",
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
        <div>
          <div className="pb-18 md:pb-24">
            <h2 className="text-4xl md:text-6xl lg:text-6 font-medium mt-6 text-center">
            Check out some of our{" "}
              <span className="text-red-orange-500">customer reviews</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <TestimonialCard key={i} {...t} />
            ))}
          </div>
        </div>
        {/* View All Link */}
        <div className="flex justify-end mt-6 px-7 md:px-10 lg:px-9">
          <span
            onClick={() => router.push("/testimonial")}
            className="text-[#f45c2d] text-sm font-medium cursor-pointer hover:underline hover:opacity-90 transition duration-200"
          >
            View All &gt;
          </span>
        </div>
      </div>
    </section>
  );
}
