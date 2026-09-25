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
          light: '#F2F7F4',
          mist: '#E2ECE5',
          deep: '#14281E',
        },
        pine: {
          deep: '#174D34',
          medium: '#1B5E3B',
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
