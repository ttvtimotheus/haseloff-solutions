"use client";

import { motion } from "framer-motion";

export default function HeroBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden>
      {/* Subtle gradient flows */}
      <motion.div
        className="absolute -right-20 top-0 w-96 h-96 bg-gradient-to-br from-primary-400/20 via-secondary-300/15 to-transparent rounded-full blur-3xl"
        animate={{
          x: [0, 30, -20, 0],
          y: [0, -20, 15, 0],
          scale: [1, 1.1, 0.9, 1],
        }}
        transition={{
          duration: 30,
          ease: "easeInOut",
          repeat: Infinity,
        }}
      />
      
      <motion.div
        className="absolute -right-40 top-1/3 w-72 h-72 bg-gradient-to-tl from-accent-300/15 via-primary-200/10 to-transparent rounded-full blur-2xl"
        animate={{
          x: [0, -25, 35, 0],
          y: [0, 25, -15, 0],
          scale: [1, 0.8, 1.2, 1],
        }}
        transition={{
          duration: 35,
          ease: "easeInOut",
          repeat: Infinity,
          delay: 5,
        }}
      />

      {/* Floating particles with subtle movement */}
      <motion.div
        className="absolute right-[15%] top-[20%] w-2 h-2 bg-primary-400/30 rounded-full"
        animate={{
          y: [0, -20, 0],
          opacity: [0.3, 0.6, 0.3],
        }}
        transition={{
          duration: 8,
          ease: "easeInOut",
          repeat: Infinity,
        }}
      />
      
      <motion.div
        className="absolute right-[25%] top-[40%] w-1.5 h-1.5 bg-secondary-400/40 rounded-full"
        animate={{
          y: [0, -15, 0],
          x: [0, 10, 0],
          opacity: [0.4, 0.7, 0.4],
        }}
        transition={{
          duration: 12,
          ease: "easeInOut",
          repeat: Infinity,
          delay: 2,
        }}
      />
      
      <motion.div
        className="absolute right-[35%] top-[60%] w-1 h-1 bg-accent-400/50 rounded-full"
        animate={{
          y: [0, -10, 0],
          opacity: [0.5, 0.8, 0.5],
        }}
        transition={{
          duration: 10,
          ease: "easeInOut",
          repeat: Infinity,
          delay: 4,
        }}
      />
    </div>
  );
}
