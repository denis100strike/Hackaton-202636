/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      colors: {
        profi: {
          green: '#009640',
          yellow: '#FFDE00',
          dark: '#0B1315',
        },
        deeptech: {
          dark: '#060D0A',
          surface: '#0B1712',
          emerald: '#10B981',
          mint: '#34D399',
          glow: '#00E599',
        }
      }
    },
  },
  plugins: [],
}
