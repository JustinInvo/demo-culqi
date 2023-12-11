/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
    },
    colors: {
      'gray-1' : '#e2e0e0',
      'gray-2' : '#f4f5f6',
      'green-1' : '#08a49e',
      'black-1' : '#080808',
      'orange-1' : '#eb6f25'
    }
  },
  plugins: [],
}