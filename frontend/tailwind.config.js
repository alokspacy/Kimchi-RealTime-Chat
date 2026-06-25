import daisyui from "daisyui";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        forest: {
          50: "#f3f7f5",
          100: "#e2eff5",
          200: "#c6e2d6",
          300: "#9dcca7",
          400: "#6ca883",
          500: "#468b64",
          600: "#326f4f",
          700: "#25563c",
          800: "#1b3b2b", // Dark Forest card background
          900: "#102219", // Deep Forest pane background
          950: "#070f0b", // Deepest background
        },
        mint: {
          50: "#ecfdf5",
          100: "#d1fae5",
          200: "#a7f3d0",
          300: "#5ce19b", // Action green tea accent
          400: "#34d399",
          500: "#10b981", // Action green
          600: "#059669",
          700: "#047857",
          800: "#065f46",
          900: "#064e3b",
        },
        blossom: {
          50: "#fff5f6",
          100: "#ffebee",
          200: "#ffd6db",
          300: "#ffa3b1", // Soft Cherry Blossom Pink
          400: "#ff7089",
          500: "#f43f5e",
          600: "#e11d48",
          700: "#be123c",
        },
      },
      animation: {
        border: "border 4s linear infinite",
      },
      keyframes: {
        border: {
          to: { "--border-angle": "360deg" },
        },
      },
    },
  },
  plugins: [daisyui],
};
