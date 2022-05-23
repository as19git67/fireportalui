const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    ["./src/**/*.{html,js}"],
  ],
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter var', ...defaultTheme.fontFamily.sans],
      },
  },
  },
}
