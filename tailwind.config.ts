import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      lineHeight:{
        'extra-tall': '4.75',
      },
      fontFamily:{
        title:["Staatliches", "sans-serif"],
        raj : ["Rajdhani","sans-serif" ],
        coder: ['var(--font-coder)'],
        babes : ['Bebas Neue','sans-serif'],
        'coders-crux': ['var(--font-coders-crux)'],
      },
      
      animation: {
        'spin-slow': 'spin 300s linear infinite',
        marquee: "marquee var(--duration) linear infinite",
        "marquee-vertical": "marquee-vertical var(--duration) linear infinite",
      },
      keyframes: {
        'spin-slow': {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(10deg)' },
        },
        marquee: {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(calc(-100% - var(--gap)))" },
        },
        "marquee-vertical": {
          from: { transform: "translateY(0)" },
          to: { transform: "translateY(calc(-100% - var(--gap)))" },
        },
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
  },
  plugins: [   require('tailwind-scrollbar')({ nocompatible: true }),],
};
export default config;
