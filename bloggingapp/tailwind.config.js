/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'profile-icon': "url('/src/assets/profile.jpg')",
      }
    },
  },
  plugins: [require('daisyui')],
}