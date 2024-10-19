import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import dotenv from 'dotenv'
dotenv.config()
console.log("listining port ", process.env.DOMAIN)
// https://vitejs.dev/config/
export default defineConfig({
  server: {
    proxy: {
      '/api':`${process.env.DOMAIN}`
    },
    port: 3000
  },
  plugins: [react()],
})
