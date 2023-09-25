import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

import path from 'path'
import dotenv from 'dotenv'

dotenv.config()

export default defineConfig({
  server: {
    port: Number(process.env.CLIENT_PORT) || 3000,
  },
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
})
