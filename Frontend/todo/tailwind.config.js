/** @type {import('tailwindcss').Config} */
export default {
  content: [
    // "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        spin: 'spin 2s linear infinite', // Change '2s' to desired duration
        ping: 'ping 3s cubic-bezier(0, 0, 0.2, 1) infinite', // Change '3s' as needed
        pulse: 'pulse 5s cubic-bezier(0.4, 0, 0.6, 1) infinite', // Changed
        bounce: 'bounce 1.5s infinite', // Change '1.5s'
      },
    },
  },
  plugins: [],
}