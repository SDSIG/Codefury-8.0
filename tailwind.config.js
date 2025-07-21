/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",  // ✅ FIXED: correct glob pattern
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
