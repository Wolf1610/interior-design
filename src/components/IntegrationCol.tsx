"use client";

import { type IntegrationType } from "@/sections/LogoTicker"; 
import Image from "next/image";
import { twMerge } from "tailwind-merge";
import { motion } from "framer-motion";
import { Fragment } from "react";

export default function IntegrationCol(props: {
  integrations: IntegrationType;
  className?: string;
  reverse?: boolean;
}) {
  const { integrations, className, reverse } = props;
  return (
    <motion.div
    initial={{
      x: reverse ? "-50%" : 0
    }}
      animate={{
        x: reverse ? 0 : "-50%"
      }}
      transition={{
        duration: 15,
        repeat: Infinity,
        ease: "linear"
      }}
      className={twMerge("flex flex-col gap-4 pb-4", className)}
    >
      {Array.from({ length: 2 }).map((_, i) => (
        <Fragment key={i}>
          {integrations.map((integration) => (
            <div
              key={integration.name}
              className="bg-neutral-900 border-white/10 rounded-3xl p-6"
            >
              <div className="flex justify-center">
                <h2>{integration.name}</h2>
              </div>
            </div>
          ))}
        </Fragment>
      ))}
    </motion.div>
  );
}
