/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ivory: {
          DEFAULT: '#FAF8F5',
          light: '#FDFBF7',
          dark: '#F3EFEA',
          card: '#F6F2EC',
        },
        charcoal: {
          DEFAULT: '#1A1C1E',
          light: '#2B2E33',
          muted: '#525861',
          deep: '#121415',
        },
        sage: {
          DEFAULT: '#5B7065',
          light: '#EBF0EC',
          soft: '#7E9488',
          dark: '#3B4A42',
        },
        gold: {
          DEFAULT: '#C8A97E',
          light: '#F2E8DB',
          accent: '#D4AF37',
          dark: '#A18256',
        },
        beige: {
          DEFAULT: '#EFEBE4',
          dark: '#DFD8CC',
          light: '#FAF6F0',
        }
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        sans: ['"Plus Jakarta Sans"', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        'soft': '0 20px 40px -15px rgba(26, 28, 30, 0.05)',
        'card': '0 10px 30px -10px rgba(0, 0, 0, 0.04)',
        'floating': '0 25px 50px -12px rgba(26, 28, 30, 0.12)',
        'modal': '0 35px 70px -15px rgba(0, 0, 0, 0.25)',
      },
      borderRadius: {
        '2xl': '1rem',
        '3xl': '1.5rem',
        '4xl': '2rem',
      }
    },
  },
  plugins: [],
}
