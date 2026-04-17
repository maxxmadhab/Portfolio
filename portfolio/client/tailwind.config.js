/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ["Syne", "sans-serif"],
        mono: ["JetBrains Mono", "monospace"],
        sans: ["DM Sans", "sans-serif"],
      },
      colors: {
        neon: "#00ff87",
        cyan: "#00d4ff",
        orange: "#ff6b2b",
      },
      animation: {
        "fade-up": "fadeUp 0.7s ease forwards",
        "blink": "blink 1s step-end infinite",
        "float": "float 4s ease-in-out infinite",
        "pulse-dot": "pulse-dot 2s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};