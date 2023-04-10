import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    proxy: {
      '/api/register-user': "http://localhost:3800",
      '/api/login-user': "http://localhost:3800",
      '/api/get-products': "http://localhost:3800",
      '/api/upload-product': "http://localhost:3800",
      '/api/create-payment': "http://localhost:3800"
    }
  },
  plugins: [react()],
  test: {
    environment: "jsdom",
    globals: true
  }
})
