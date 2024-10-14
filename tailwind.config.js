/** @type {import('tailwindcss').Config} */
export default {
  content: [],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'], // ฟอนต์ใหม่
        serif: ['Merriweather', 'serif'], // ฟอนต์ใหม่สำหรับ serif
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
  plugins: [
    require('@tailwindcss/forms'), // เพิ่มปลั๊กอิน forms
  ],
}

