"use client";

import { useRef, useState } from "react";
import { motion } from "framer-motion";

export default function VinylPlayer() {
  const audioRef =
    useRef<HTMLAudioElement>(null);

  const [playing, setPlaying] =
    useState(false);

  const toggle = () => {
    if (!audioRef.current) return;

    if (playing) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }

    setPlaying(!playing);
  };

  return (
    <>
      <audio
        ref={audioRef}
        src="/music/song.mp3"
        loop
      />

      <motion.button
        onClick={toggle}
        className="
        fixed
        bottom-8
        right-8
        z-[999]
        "
        whileTap={{
          scale: .9,
        }}
      >
        <motion.div
          animate={
            playing
              ? {
                  rotate: 360,
                }
              : {}
          }
          transition={{
            repeat: Infinity,
            duration: 4,
            ease: "linear",
          }}
          className="
          w-20
          h-20
          rounded-full
          bg-black
          border-4
          border-gray-700
          flex
          items-center
          justify-center
          shadow-2xl
          "
        >
          <div
            className="
            w-5
            h-5
            rounded-full
            bg-[#d9a5a5]
            "
          />
        </motion.div>
      </motion.button>
    </>
  );
}