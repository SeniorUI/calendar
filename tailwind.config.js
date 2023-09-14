/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{html,tsx}"],
  theme: {
    extend: {
      gridTemplateRows: {
        calendar: "24px repeat(6, 1fr)",
      },
    },
  },
  plugins: [],
};
