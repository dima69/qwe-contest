module.exports = {
  mode: "jit",
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      gridTemplateColumns: {
        '666': 'repeat(3, 1fr)'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
