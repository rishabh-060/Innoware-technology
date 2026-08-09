import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    tailwindcss(),
    react()
  ],
  server: {
    host: '0.0.0.0',
    port: 5173,

    allowedHosts: [
      'ec2-3-111-40-26.ap-south-1.compute.amazonaws.com'
    ],

    hmr: {
      host: 'ec2-3-111-40-26.ap-south-1.compute.amazonaws.com',
      protocol: 'ws',
      port: 5173
    }
  }
})
