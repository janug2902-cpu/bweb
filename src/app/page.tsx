"use client";

import { useState } from "react";

import LoadingScreen from "@/components/LoadingScreen";

import HeroSection from "@/components/HeroSection";
import StoryIntro from "@/components/StoryIntro";
import ScrapbookSection from "@/components/ScrapbookSection";
import LetterSection from "@/components/LetterSection";
import ThreeLettersSection from "@/components/ThreeLettersSection";
import GiftBoxSection from "@/components/GiftBoxSection";
import BirthdayWishSection from "@/components/BirthdayWishSection";
import FooterSection from "@/components/FooterSection";
import CustomCursor from "@/components/CustomCursor";
import Fireflies from "@/components/Fireflies";
import VinylPlayer from "@/components/VinylPlayer";
import BackgroundMusic from "@/components/BackgroundMusic";

export default function HomePage() {
const [unlocked, setUnlocked] =
useState(false);

const [musicStarted, setMusicStarted] =
useState(false);

return (
<> <BackgroundMusic
     startMusic={musicStarted}
   />

  {!unlocked && (
    <LoadingScreen
      onComplete={() => {
        setMusicStarted(true);

        setUnlocked(true);
      }}
    />
  )}

  {unlocked && (
    <>
      <CustomCursor />

      <Fireflies />

      <VinylPlayer />

      <main className="relative overflow-hidden">
        <HeroSection />

        <StoryIntro />

        <ScrapbookSection />

        <LetterSection />

        <ThreeLettersSection />

        <GiftBoxSection />

        <BirthdayWishSection />

        <FooterSection />
      </main>
    </>
  )}
</>


);
}
