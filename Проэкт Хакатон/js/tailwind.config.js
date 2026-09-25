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
        butter: {
          light: '#FFFDF5',
          DEFAULT: '#FAF4E2',
          dark: '#F0E7D0',
        },
        forest: {
          deep: '#123524',
          surface: 'rgba(18, 53, 36, 0.94)',
        },
        leaf: {
          emerald: '#15803D',
          vibrant: '#22C55E',
          glow: '#4ADE80',
        },
        profi: {
          green: '#009640',
          yellow: '#FFDE00',
          dark: '#0B1315',
        }
      }
    },
  },
  plugins: [],
}
