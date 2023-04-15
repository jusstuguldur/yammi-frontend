/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        pacifico: ["Pacifico"],
      },
      colors: {
        primary: "#ff4141",
        beige: "#FAEFE0",
        vegetable: "#39dd00",
        meat: "ff3333",
      },
    },
  },
  plugins: [],
};
