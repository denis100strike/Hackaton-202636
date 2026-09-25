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
        eco: {
          bg: '#F4F7F4',
          card: 'rgba(255, 255, 255, 0.88)',
          mist: '#E8EFE9',
        },
        pine: {
          light: '#2D6A4F',
          DEFAULT: '#1B4D36',
          dark: '#123827',
        },
        sage: {
          light: '#749C90',
          DEFAULT: '#52796F',
          dark: '#354F48',
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
