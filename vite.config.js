import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import ViteEnvLoader from 'vite-env-loader';



// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(),ViteEnvLoader({envPath:'.env' })]
})
