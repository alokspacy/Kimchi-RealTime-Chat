import daisyui from "daisyui";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        kimchi: {
          50: "#fff3f0",
          100: "#ffe4dd",
          200: "#ffcebe",
          300: "#ffa792",
          400: "#ff775d",
          500: "#e64a2e", // Spicy Kimchi red-orange
          600: "#d0341b",
          700: "#af2411",
          800: "#8e1c0f",
          900: "#751910",
        },
        onggi: {
          50: "#f8f7f5",
          100: "#efebdf",
          200: "#ded5bf",
          300: "#c7b795",
          400: "#ae976f",
          500: "#967b54",
          600: "#7e6244",
          700: "#644d37",
          800: "#3c3027", // Earthenware dark warm gray-brown
          900: "#231b14", // Deep earthenware base dark background
          950: "#15100c",
        },
        sprout: {
          300: "#86efac",
          400: "#4ade80",
          500: "#22c55e",
          600: "#16a34a",
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
