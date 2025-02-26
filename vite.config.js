import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000, // You can change this port number if needed
    open: true, // Automatically opens the browser when you start the server
  },
  build: {
    outDir: 'dist', // The folder where the build files will be output
  },
});
