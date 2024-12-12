import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  server: {
    host: '192.168.0.104', // Or '0.0.0.0' for access on all interfaces
    port: 5173, // Ensure this port is free
  },
  plugins: [react()],
})
