/* @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: {
          100: "#FDCCD2",
          200: "#868686",
          300: "#F56695",
          400: "#EC3F8A",
          500: "#ea5455", // previous colors
          600: "#bd4243", // previous colors
          700: "#A10376",
          800: "#81016C",
          900: "#6B0164",
        },
        secondary: {
          100: "#F3F3F3",
          200: "#E8E8E8",
          300: "#BBBBBB",
          400: "#787878",
          500: "#1F1F1F",
          600: "#1A1617",
          700: "#160F10",
          800: "#11090B",
          900: "#0E0509",
          1000: "#2B2B2B",
        },
        dark: {
          50: "#1a202c",
          100: "#333740",
          200: "#474b54",
          300: "#656975",
          400: "#868b94",
          500: "#a8adb5",
          600: "#c8ccd4",
          700: "#e8eee9",
          800: "#f5f5f5",
          900: "#ffffff",
        },
      },
    },
  },
  plugins: [],
};
