import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/',
  server: {
    watch: {
      // Add custom paths to watch for full page refreshes
      additionalPaths: (watcher) => {
        watcher.add('src/**');
        watcher.add('src/sections/*.*');
        watcher.add('src/css/*.*');
      }
    }
  }
})
