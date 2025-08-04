import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss(), [await import('@tailwindcss/line-clamp')]],
  base: "/webBasedHabitTracker",
})
