import type { Config } from 'tailwindcss';
import forms from '@tailwindcss/forms';

export default {
  content: [],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        serif: ['Merriweather', 'serif'],
      },
      colors: {
        brand: {
          light: '#3fbaeb',
          DEFAULT: '#0fa9e6',
          dark: '#0c87b8',
        },
      },
    },
  },
  plugins: [forms],
} satisfies Config;
