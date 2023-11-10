/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        gray: {
          light: "F6F6FB",
        },
        primary: {
          main: "7166F9",
        },
      },
    },
  },
  plugins: [],
};
