"use client";

import { motion } from "framer-motion";

const flies = [
  { x: "10%", y: "20%" },
  { x: "80%", y: "30%" },
  { x: "25%", y: "70%" },
  { x: "70%", y: "15%" },
  { x: "55%", y: "80%" },
  { x: "90%", y: "50%" },
  { x: "15%", y: "60%" },
  { x: "45%", y: "25%" },
];

export default function Fireflies() {
  return (
    <>
      {flies.map((fly, i) => (
        <motion.div
          key={i}
          className="
          fixed
          w-2
          h-2
          rounded-full
          bg-yellow-200
          z-10
          pointer-events-none
          "
          style={{
            left: fly.x,
            top: fly.y,
          }}
          animate={{
            y: [0, -40, 0],
            opacity: [0.3, 1, 0.3],
          }}
          transition={{
            repeat: Infinity,
            duration: 5 + i,
          }}
        />
      ))}
    </>
  );
}