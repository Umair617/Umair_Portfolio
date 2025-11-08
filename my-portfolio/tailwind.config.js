/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    // Add any other directories where you use Tailwind classes
  ],
  theme: {
    extend: {
      keyframes: {
        rotate3d: {
          '0%': { transform: 'rotateY(0deg)' },
          '100%': { transform: 'rotateY(360deg)' },
        },
      },
      animation: {
        rotate3d: 'rotate3d 15s linear infinite',
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        '.preserve-3d': { transformStyle: 'preserve-3d' },
        '.perspective': { perspective: '1000px' },
      });
    },
  ],
  darkMode: 'media',
}