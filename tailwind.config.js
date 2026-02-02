/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        lime: "#E8FF3F",
        dark: "#0F0F0F",
        muted: "#6B7280",
      },
    },
  },
  plugins: [],
}
