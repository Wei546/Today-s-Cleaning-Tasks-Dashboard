
export default {content: [
  './index.html',
  './src/**/*.{js,ts,jsx,tsx}'
],
  theme: {
    extend: {
      colors: {
        cream: '#FEFCF3',
        forest: {
          DEFAULT: '#2D6A4F',
          light: '#40916C',
          dark: '#1B4332',
        },
        'amber-warm': '#D4A373',
        'amber-light': '#E9C89B',
        tan: {
          DEFAULT: '#E8DCC8',
          light: '#F0E8D8',
        },
      },
      fontFamily: {
        sans: ['"DM Sans"', 'system-ui', 'sans-serif'],
      },
    },
  },
}
