/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        left: "-8px 8px 10px rgba(0, 0, 0, 0.4)",
      },
      colors: {
        "custom-teal-light": "#59C3AA",
        "custom-teal-dark": "#015A48",
      },
      backgroundImage: {
        "custom-gradient": "linear-gradient(to bottom, #59C3AA, #015A48)",
        "gr-custom-gradient": "linear-gradient(to bottom, #EFB71E, #015A48)",
        "yel-custom-gradient": "linear-gradient(to bottom, #EFB71E, #896911)",
        // "yel-custom-gradient": "linear-gradient(to bottom, #EFB71E, #EFB71E)",
      },
    },
  },
  plugins: [],
};
