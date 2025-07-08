import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./containers/**/*.{js,ts,jsx,tsx,mdx}",
    "./constants/**/*.{js,ts,jsx,tsx,mdx}",
    "./utils/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        newyork: ['"NewYork"', 'serif'],
        playfair: ['"Playfair Display"', 'serif'],
      },
      colors: {
        // Custom Colors (adds to default colors)
        "dark-gray": "#2F2F2F",
        "light-blue": "#0EAADB",
        yellow: "#FFC90B",
        "light-yellow": "#FFEDC3",
        "dark-blue": "#06779B",
        black: "#000000",
        "light-gray": "#8C8C8C",
        white: "#FFFFFF",
      },
    },
  },
  plugins: [],
};

export default config;
