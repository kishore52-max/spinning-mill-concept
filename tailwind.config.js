
export default {
  content: [
  './index.html',
  './src/**/*.{js,ts,jsx,tsx}'
],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: '#0A1628',
          light: '#112240',
          dark: '#050B14'
        },
        beige: {
          DEFAULT: '#E8DCC4',
          dark: '#D4C4A8',
          light: '#F4EFE6'
        },
        'off-white': '#FAFAF7',
        silver: {
          DEFAULT: '#8B8B8B',
          light: '#C9C9C9'
        },
        charcoal: '#1A1A1A',
        gold: '#B89968',
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'serif'],
        sans: ['Inter', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      }
    },
  },
  plugins: [],
}
