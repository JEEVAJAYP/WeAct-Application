/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: Update this to include the paths to all of your component files.
  content: ["./app/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        primary: "#F28645",
        grey: "#949191",
        lightblue: "#348CD7",
        lightgrey: "#D9D9D9",
      },
    },
  },
  plugins: [],
};
