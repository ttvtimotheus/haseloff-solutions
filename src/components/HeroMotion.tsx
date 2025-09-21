"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function HeroMotion() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [0, -60]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0.6]);

  return (
    <motion.div
      ref={ref}
      style={{ y, opacity }}
      className="pointer-events-none absolute right-[-10%] top-1/4 h-[40vmin] w-[40vmin] rounded-full bg-gradient-to-br from-primary-600 to-secondary-500 blur-3xl opacity-30 will-change-transform motion-reduce:static motion-reduce:opacity-20"
      aria-hidden
      animate={{
        x: [0, 20, -10, 15, 0],
        y: [0, -15, 10, -8, 0],
        scale: [1, 1.05, 0.95, 1.02, 1],
        borderRadius: [
          "50% 50% 50% 50%",
          "60% 40% 30% 70%",
          "30% 60% 70% 40%",
          "40% 60% 60% 40%",
          "50% 50% 50% 50%"
        ],
        rotate: [0, 5, -3, 8, 0],
      }}
      transition={{
        duration: 25,
        ease: "easeInOut",
        repeat: Infinity,
        repeatType: "loop",
      }}
    />
  );
}
