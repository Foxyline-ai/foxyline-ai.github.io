/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        forest: '#1B3A2F',
        'deep-sage': '#4A6157',
        copper: '#B87A5C',
        'warm-stone': '#D4C4AC',
        'natural-beige': '#E8DCC4',
        'warm-white': '#F9F7F4',
      },
      fontFamily: {
        outfit: ['Outfit', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      maxWidth: {
        '3xl': '48rem',
        '4xl': '56rem',
        '6xl': '72rem',
      },
    },
  },
  plugins: [],
};
