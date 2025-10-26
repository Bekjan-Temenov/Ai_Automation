/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        'primary-black': '#0a0a0a',
        'accent-orange': '#ff6b35',
        'warm-white': '#f8f8f8',
        'charcoal': '#2a2a2a',
      },
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
