const { defineConfig } = require('vite')
const react = require('@vitejs/plugin-react')
const tailwindcss = require('tailwindcss')
const lineClamp = require('@tailwindcss/line-clamp')

module.exports = defineConfig({
  plugins: [react(), tailwindcss(), lineClamp],
  base: "/webBasedHabitTracker", // untuk GitHub Pages
})
