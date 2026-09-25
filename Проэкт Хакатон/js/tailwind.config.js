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
          light: '#FFFDF8',
          DEFAULT: '#FAF4E4',
          dark: '#F2EBD4',
        },
        deepgreen: {
          light: '#235E45',
          DEFAULT: '#184532',
          dark: '#123827',
        },
        chocolate: {
          light: '#42281D',
          DEFAULT: '#2B1810',
          dark: '#1A0F0A',
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
