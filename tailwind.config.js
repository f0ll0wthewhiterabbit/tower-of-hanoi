import daisyui from 'daisyui'

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {},
  },
  safelist: [
    {
      pattern: /bg-(amber|lime|emerald|cyan|blue|indigo|violet|fuchsia)-(400|800)/,
    },
    'bottom-[32px]',
    'bottom-[56px]',
    'bottom-[80px]',
    'bottom-[104px]',
    'bottom-[128px]',
    'bottom-[152px]',
    'bottom-[176px]',
    'bottom-[200px]',
  ],
  plugins: [daisyui],
  daisyui: {
    themes: ['night'],
  },
}
