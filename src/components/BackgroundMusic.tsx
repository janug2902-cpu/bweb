"use client";

import { useEffect, useRef } from "react";

interface Props {
startMusic: boolean;
}

export default function BackgroundMusic({
startMusic,
}: Props) {
const audioRef =
useRef<HTMLAudioElement>(null);

useEffect(() => {
if (!startMusic) return;


const audio = audioRef.current;

if (!audio) return;

audio.volume = 0;

audio.play().catch((err) => {
  console.log("Autoplay blocked:", err);
});

let volume = 0;

const fade = setInterval(() => {
  volume += 0.03;

  if (volume >= 0.4) {
    volume = 0.4;
    clearInterval(fade);
  }

  audio.volume = volume;
}, 180);

return () => clearInterval(fade);


}, [startMusic]);

return ( <audio
   ref={audioRef}
   src="/music/background.mp3"
   loop
 />
);
}
