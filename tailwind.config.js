/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "rgb(15, 23, 42)",
        menubar: "rgb(15, 23, 42)",
        primaryText: "#FFFFFF",
        line: "rgb(229, 231, 235)",
      },
    },
  },
  plugins: [],
};
