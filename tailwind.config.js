/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./App.{js,ts,tsx}", "./src/**/*.{js,tsx,ts,jsx}"],

  presets: [require("nativewind/preset")],
  theme: {
    extend: {}
  },
  plugins: []
};
