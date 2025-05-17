"use client";

import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import { useState, useEffect } from "react";

export default function CounterSection() {
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
    <section ref={ref} className="mt-10 md:mt-15 lg:mt-20 px-4 ">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold italic text-black mb-2">
          Executed
        </h2>
        <div className="flex px-24 md:px-100">
          <div>
            <p className="text-2xl md:text-2xl text-black mb-2">
              over
            </p>
          </div>
          <div className="text-red-orange-500 text-5xl sm:text-6xl md:text-7xl font-extrabold leading-tight">
            {startCount && <CountUp end={1289} duration={3} />}+
          </div>
        </div>{" "}
        <p className="text-3xl md:text-4xl md:ml-30 lg:ml-40 text-black mt-2">
          Projects
        </p>
      </div>
    </section>
  );
}
