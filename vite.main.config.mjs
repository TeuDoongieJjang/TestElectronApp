import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    outDir: '.vite/build',
    emptyOutDir: true,
    lib: {
      entry: 'src/main.js',
      formats: ['cjs'],
    },
    rollupOptions: {
      external: ['electron'], // don’t bundle electron
    },
  },
});