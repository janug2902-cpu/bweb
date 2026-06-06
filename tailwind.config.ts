// tailwind.config.ts
import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        champagne: '#F7E7CE',
        rose: '#C08081',
        'deep-wine': '#722F37',
        midnight: '#0A0A0F',
        'soft-gold': '#D4AF37',
        pearl: '#F5F0EB',
        velvet: '#1A0A1A',
        blush: '#E8C4C4',
        ivory: '#FFFFF0',
        charcoal: '#1C1C1E',
        'muted-rose': '#B5838D',
        'warm-taupe': '#A0937D',
      },
      fontFamily: {
        display: ['Playfair Display', 'Georgia', 'serif'],
        body: ['Cormorant Garamond', 'Georgia', 'serif'],
        hand: ['Dancing Script', 'cursive'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
} satisfies Config;