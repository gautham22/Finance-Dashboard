import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
export default defineConfig(({ command }) => ({
  base: '/Finance-Dashboard/',
  publicDir: command === 'serve' ? 'public' : false,
  plugins: [react(), tailwindcss()],
}))
