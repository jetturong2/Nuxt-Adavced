/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')
export default {
  ode: 'jit',
  content: [
      "./components/**/*.{js,vue,ts}",
      "./layouts/**/*.vue",
      "./pages/**/*.vue",
      "./plugins/**/*.{js,ts}",
      "./nuxt.config.{js,ts}",
      "./app.vue",
    ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['IBM Plex Sans Thai Looped', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
}

