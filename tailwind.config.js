/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#FFC107",
          50: "#FFF9E5",
          100: "#FFF0BF",
          500: "#FFC107",
          600: "#F2A900",
          700: "#BF7F00",
        },
        ink: "#171717",
      },
      boxShadow: {
        soft: "0 18px 45px rgba(23, 23, 23, 0.09)",
        card: "0 12px 28px rgba(23, 23, 23, 0.08)",
      },
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};
