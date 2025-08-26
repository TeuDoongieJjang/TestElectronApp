import { defineConfig } from 'vite'
import electron from 'vite-plugin-electron'

export default defineConfig({
  plugins: [
    electron({
      main: {
        entry: 'src/main.js',
      },
      preload: {
        input: 'src/preload.js',
      },
    }),
  ],
  build: {
    rollupOptions: {
      external: [
        'electron',
        'electron-updater',
      ],
    },
  },
})
