import { resolve } from 'path';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
  ],
  build: {
    outDir: 'docs',
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        courseware: resolve(__dirname, 'courseware/index.html'),
        synctask: resolve(__dirname, 'synctask/index.html'),
        synctaskPrivacy: resolve(__dirname, 'synctask/privacy/index.html'),
      },
    },
  },
});

