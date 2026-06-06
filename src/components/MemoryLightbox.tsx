"use client";

import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";

interface Props {
  open: boolean;
  image: string;
  title: string;
  caption: string;
  onClose: () => void;
}

export default function MemoryLightbox({
  open,
  image,
  title,
  caption,
  onClose,
}: Props) {
  return (
    <AnimatePresence>
      {open && (
        <>
          <motion.div
            className="
            fixed
            inset-0
            bg-black/90
            backdrop-blur-xl
            z-[9998]
            "
            onClick={onClose}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          />

          <motion.div
            className="
            fixed
            inset-0
            z-[9999]
            flex
            items-center
            justify-center
            p-4
            md:p-8
            "
            initial={{
              opacity: 0,
              scale: 0.9,
            }}
            animate={{
              opacity: 1,
              scale: 1,
            }}
            exit={{
              opacity: 0,
              scale: 0.9,
            }}
          >
            <div
              className="
              bg-[#faf7f0]
              max-w-5xl
              w-full
              rounded-[32px]
              overflow-hidden
              border
              border-black/5
              shadow-[0_30px_100px_rgba(0,0,0,.45)]
              "
            >
              <div className="relative">
                <Image
                  src={image}
                  alt={title}
                  width={1200}
                  height={900}
                  className="
                  w-full
                  h-[60vh]
                  max-h-[700px]
                  object-cover
                  "
                />

                <button
                  onClick={onClose}
                  className="
                  absolute
                  top-4
                  right-4
                  w-12
                  h-12
                  rounded-full
                  bg-black/50
                  text-white
                  text-xl
                  backdrop-blur-md
                  "
                >
                  ✕
                </button>
              </div>

              <div className="p-8 md:p-12 text-[#5f4030]">

                <p
                  className="
                  uppercase
                  tracking-[0.3em]
                  text-xs
                  text-[#d9a5a5]
                  "
                >
                  A Memory Worth Keeping
                </p>

                <h2
                  className="
                  font-display
                  text-4xl
                  md:text-6xl
                  mt-3
                  "
                >
                  {title}
                </h2>

                <p
                  className="
                  mt-6
                  font-hand
                  text-2xl
                  md:text-4xl
                  "
                >
                  {caption}
                </p>

              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}