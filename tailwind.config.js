/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  safelist: [
    "animate-float",
    "animate-burst",
    "animate-fadeIn",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
