import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  // Relative paths work both locally and on a GitHub Pages project site.
  base: './',
  plugins: [react(), tailwindcss()],
})