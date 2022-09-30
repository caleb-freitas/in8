/** @type {import("tailwindcss").Config} */

// eslint-disable-next-line @typescript-eslint/no-var-requires
const defaultTheme = require("tailwindcss/defaultTheme")

module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    fontFamily: {
      "helvetica": ["Helvetica", ...defaultTheme.fontFamily.sans],
      "roboto-light": ["'Roboto Light'", ...defaultTheme.fontFamily.sans],
      "roboto-regular": ["'Roboto Regular'", ...defaultTheme.fontFamily.sans],
    },
    colors: {
      "transparent": "transparent",
      "current": "currentColor",

      "mid-blue": "#29abe2",
      "dark-blue": "#012d51",
      "light-gray": "#808080"
    }
  },
  plugins: [],
};
