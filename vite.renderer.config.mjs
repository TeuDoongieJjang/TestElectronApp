import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    outDir: '.vite/renderer',
    emptyOutDir: true,
  },
});