// tailwind.config.js
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        navy: "#101B32",
        deepNavy: "#0B1428",
        gold: "#F5C328",
        magenta: "#D50068",
        green: "#16834A",
        lightBg: "#F6F8FB",
      },
    },
  },
  plugins: [],
};
