"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function CustomCursor() {
  const [position, setPosition] = useState({
    x: 0,
    y: 0,
  });

  useEffect(() => {
    document.body.classList.add("custom-cursor");

    const move = (e: MouseEvent) => {
      setPosition({
        x: e.clientX,
        y: e.clientY,
      });
    };

    window.addEventListener(
      "mousemove",
      move
    );

    return () => {
      document.body.classList.remove(
        "custom-cursor"
      );

      window.removeEventListener(
        "mousemove",
        move
      );
    };
  }, []);

  return (
    <motion.div
      className="
      fixed
      pointer-events-none
      z-[99999]
      hidden
      md:flex
      items-center
      justify-center
      "
      animate={{
        x: position.x - 12,
        y: position.y - 12,
      }}
      transition={{
        type: "spring",
        damping: 20,
        stiffness: 300,
      }}
    >
      <div
        className="
        text-pink-300
        text-xl
        drop-shadow-[0_0_10px_rgba(255,182,193,.8)]
        "
      >
        ❤️
      </div>
    </motion.div>
  );
}