import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: "/aurex-react/"   // <-- Ye line lazmi add karo
})
