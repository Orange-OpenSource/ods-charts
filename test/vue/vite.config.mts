import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), vueJsx()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  // Import UMD package from file system (see https://github.com/vitejs/vite/issues/5566#issuecomment-965760008)
  optimizeDeps: {
    include: ['ods-charts']
  },
  build: {
    commonjsOptions: {
      include: [/ods-charts/, /node_modules/]
    }
  }
})
