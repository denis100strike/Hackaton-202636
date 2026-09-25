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
        canopy: {
          dark: '#10261B',
          deep: '#163626',
          mid: '#1D4632',
        },
        mist: {
          light: '#F2F7F4',
          soft: '#E2ECE5',
        },
        pine: {
          deep: '#143D28',
          hover: '#1B5E3B',
          leaf: '#2E8B57',
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
