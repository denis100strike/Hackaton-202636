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
        forest: {
          deep: '#06110A',
          canopy: '#0D281A',
          sunbeam: '#19462F',
        },
        moss: {
          glass: 'rgba(11, 28, 19, 0.82)',
          border: 'rgba(74, 222, 128, 0.22)',
        },
        leaf: {
          emerald: '#15803D',
          forest: '#22C55E',
          glow: '#4ADE80',
          dew: '#E8FDF0',
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
