/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        'gleo-blue': '#4287f5',
        'gleo-lime': '#c8ff00',
        'gleo-coral': '#ff7f7f'
      },
      fontFamily: {
        'space-grotesk': ['Space Grotesk', 'sans-serif'],
      },
      boxShadow: {
        'brutal': '4px 4px 0 0 rgba(0,0,0,1)',
        'brutal-lg': '8px 8px 0 0 rgba(0,0,0,1)',
      }
    },
  },
  plugins: [],
}