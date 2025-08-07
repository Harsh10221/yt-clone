import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: true, // 👈 this makes the dev server accessible from LAN (your mobile)
    port: 5173
  }
  
})
