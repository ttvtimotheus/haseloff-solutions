"use client";

import { motion } from "framer-motion";

export default function HeroBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden>
      {/* Signature diagonal gradient overlay */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-primary-500/10 via-transparent to-secondary-400/8"
        animate={{
          background: [
            "linear-gradient(135deg, rgb(99 102 241 / 0.1) 0%, transparent 50%, rgb(168 85 247 / 0.08) 100%)",
            "linear-gradient(125deg, rgb(79 70 229 / 0.12) 0%, transparent 45%, rgb(244 114 182 / 0.06) 100%)",
            "linear-gradient(145deg, rgb(129 140 248 / 0.08) 0%, transparent 55%, rgb(236 72 153 / 0.1) 100%)",
            "linear-gradient(135deg, rgb(99 102 241 / 0.1) 0%, transparent 50%, rgb(168 85 247 / 0.08) 100%)"
          ]
        }}
        transition={{
          duration: 25,
          ease: "easeInOut",
          repeat: Infinity,
        }}
      />

      {/* Animated noise/texture layer */}
      <motion.div
        className="absolute top-0 right-0 w-full h-full bg-gradient-to-bl from-primary-300/5 via-transparent to-accent-200/8"
        animate={{
          rotate: [0, 2, -1, 0],
          scale: [1, 1.02, 0.98, 1],
        }}
        transition={{
          duration: 40,
          ease: "easeInOut",
          repeat: Infinity,
        }}
      />

      {/* Enhanced gradient flows */}
      <motion.div
        className="absolute -right-20 top-0 w-96 h-96 bg-gradient-to-br from-primary-400/25 via-secondary-300/20 to-transparent rounded-full blur-3xl"
        animate={{
          x: [0, 30, -20, 0],
          y: [0, -20, 15, 0],
          scale: [1, 1.1, 0.9, 1],
          opacity: [0.6, 0.8, 0.4, 0.6],
        }}
        transition={{
          duration: 30,
          ease: "easeInOut",
          repeat: Infinity,
        }}
      />
      
      <motion.div
        className="absolute -right-40 top-1/3 w-72 h-72 bg-gradient-to-tl from-accent-300/20 via-primary-200/15 to-transparent rounded-full blur-2xl"
        animate={{
          x: [0, -25, 35, 0],
          y: [0, 25, -15, 0],
          scale: [1, 0.8, 1.2, 1],
          opacity: [0.5, 0.7, 0.3, 0.5],
        }}
        transition={{
          duration: 35,
          ease: "easeInOut",
          repeat: Infinity,
          delay: 5,
        }}
      />

      {/* Enhanced floating particles */}
      <motion.div
        className="absolute right-[15%] top-[20%] w-2 h-2 bg-primary-400/40 rounded-full shadow-sm"
        animate={{
          y: [0, -25, 5, 0],
          x: [0, 8, -5, 0],
          opacity: [0.4, 0.8, 0.2, 0.4],
          scale: [1, 1.2, 0.8, 1],
        }}
        transition={{
          duration: 12,
          ease: "easeInOut",
          repeat: Infinity,
        }}
      />
      
      <motion.div
        className="absolute right-[25%] top-[40%] w-1.5 h-1.5 bg-secondary-400/50 rounded-full shadow-sm"
        animate={{
          y: [0, -15, 10, 0],
          x: [0, 15, -8, 0],
          opacity: [0.5, 0.9, 0.3, 0.5],
          scale: [1, 1.3, 0.7, 1],
        }}
        transition={{
          duration: 16,
          ease: "easeInOut",
          repeat: Infinity,
          delay: 2,
        }}
      />
      
      <motion.div
        className="absolute right-[35%] top-[60%] w-1 h-1 bg-accent-400/60 rounded-full shadow-sm"
        animate={{
          y: [0, -12, 8, 0],
          x: [0, -6, 12, 0],
          opacity: [0.6, 1, 0.3, 0.6],
          scale: [1, 1.4, 0.6, 1],
        }}
        transition={{
          duration: 14,
          ease: "easeInOut",
          repeat: Infinity,
          delay: 4,
        }}
      />

      {/* Additional signature elements */}
      <motion.div
        className="absolute right-[10%] top-[80%] w-3 h-3 bg-gradient-to-br from-primary-300/30 to-secondary-400/40 rounded-full blur-sm"
        animate={{
          y: [0, -30, 0],
          rotate: [0, 180, 360],
          opacity: [0.3, 0.6, 0.3],
        }}
        transition={{
          duration: 20,
          ease: "easeInOut",
          repeat: Infinity,
          delay: 1,
        }}
      />
    </div>
  );
}
