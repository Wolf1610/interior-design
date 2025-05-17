"use client";

import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import { useState, useEffect } from "react";

export default function EndCounterSection() {
  const { ref, inView } = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });

  const [startCount, setStartCount] = useState(false);

  useEffect(() => {
    if (inView && !startCount) {
      setStartCount(true);
    }
  }, [inView, startCount]);
  // bg-[#f9f9fb]
  return (
    <section ref={ref} className="mt-10 md:mt-15 lg:mt-20 px-4 pb-20">
      <div className="max-w-4xl mx-auto text-center">
        <div className="flex px-29 md:px-90">
          <div>
            <p className="text-2xl md:text-2xl lg: text-black mb-2">with</p>
          </div>
          <div className="text-red-orange-500 text-5xl sm:text-6xl md:text-7xl font-extrabold leading-tight">
            {startCount && <CountUp end={8} duration={3} />}+
          </div>{" "}
          <div>
            <p className="text-2xl md:text-3xl lg:text-4xl text-black mt-8">
              Years
            </p>
          </div>
        </div>
        <div>
          <h2 className="text-2xl md:text-4xl font-semibold italic text-black mb-2 ml-30 md:ml-60 lg:ml-80">
            Exeperience
          </h2>
        </div>
      </div>
    </section>
  );
}
