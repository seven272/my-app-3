import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: 'app3',
  server: {
    host: true,
    port: 5173, // This is the port which we will use in docker
    // allowedHosts: ['prank-sound.ru'],
  },
  preview: {
    port: 6666,
    strictPort: true,
  },
})
