/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}",],
  theme: {
    fontFamily: {
      sans: ["LeagueSpartan"],
    },
    fontSize: {
      sm: ["0.8125rem", {
        lineHeight: "18px",
        fontWeight: "300",
      }],
      body: ["1rem", {
        lineHeight: "18px",
        fontWeight: "300",
      }],
      md: ["1.5rem", {
        lineHeight: "22px",
        fontWeight: "700",
      }],
      lg: ["2.25rem", {
        lineHeight: "33px",
        fontWeight: "700",
      }],
    },
    colors: {
      "dark-violet": "#7C5DFA",
      "light-violet": "#9277FF",
      "dark-blue-gray": "#1E2139",
      "light-blue-gray": "#252945",
      "dark-blue": "#7E88C3",
      "light-blue": "#DFE3FA",
      "gray": "#888EB0",
      "black": "#0C0E16",
      "light-black": "#141625",
      red: "#EC5757",
      rose: "#FF9797",
      beige: "#F8F8FB",
      green: "#33D69F",
      orange: "#FF8F00",
      white: "#FFFFFF",
    },
  },
  plugins: [],
}