import type { Metadata } from "next";
import {
  Playfair_Display,
  Cormorant_Garamond,
  Dancing_Script,
  Inter,
} from "next/font/google";

import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-cormorant",
});

const dancing = Dancing_Script({
  subsets: ["latin"],
  variable: "--font-dancing",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Happy Birthday Kuku ❤️",
  description: "A collection of memories, letters and wishes.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`
          ${playfair.variable}
          ${cormorant.variable}
          ${dancing.variable}
          ${inter.variable}
        `}
      >
        {children}
      </body>
    </html>
  );
}