import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [
    react({
      fastRefresh: process.env.NODE_ENV !== 'test',
    }),
  ],
  server: {
    proxy: {
      '/api/v1': {
        target: 'https://happy-doggy-bqya.vercel.app',
        changeOrigin: true,
      },
    },
  },
})
