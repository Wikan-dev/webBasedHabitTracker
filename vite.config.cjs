const { defineConfig } = require('vite')
const react = require('@vitejs/plugin-react')
const lineClamp = require('@tailwindcss/line-clamp')

module.exports = defineConfig({
  plugins: [react(), lineClamp],
  base: "/webBasedHabitTracker", // untuk GitHub Pages
})
