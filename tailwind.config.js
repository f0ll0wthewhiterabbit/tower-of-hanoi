import daisyui from 'daisyui'

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {},
  },
  safelist: [
    {
      pattern: /w-(2|3|4|5|6|7|8|9)\/12/,
    },
    {
      pattern: /bg-(amber|lime|emerald|cyan|blue|indigo|violet|fuchsia)-(400|800)/,
    },
  ],
  plugins: [daisyui],
  daisyui: {
    themes: ['night'],
  },
}
