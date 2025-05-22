
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import fs from 'fs';
import { componentTagger } from "lovable-tagger";

// Custom plugin to copy CNAME and .nojekyll files to dist
const copyFilesToDist = () => {
  return {
    name: 'copy-files-to-dist',
    closeBundle() {
      // Ensure the dist directory exists
      if (!fs.existsSync('dist')) {
        fs.mkdirSync('dist');
      }

      // Copy CNAME from public to dist
      if (fs.existsSync('public/CNAME')) {
        fs.copyFileSync('public/CNAME', 'dist/CNAME');
        console.log('CNAME file copied to dist/');
      }

      // Create .nojekyll file in dist
      fs.writeFileSync('dist/.nojekyll', '');
      console.log('.nojekyll file created in dist/');
      
      // Copy _headers file from public to dist if it exists
      if (fs.existsSync('public/_headers')) {
        fs.copyFileSync('public/_headers', 'dist/_headers');
        console.log('_headers file copied to dist/');
      }
    }
  };
};

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  base: './', // Using relative paths for asset loading
  server: {
    host: "::",
    port: 8080,
  },
  build: {
    outDir: 'dist',
    rollupOptions: {
      output: {
        // Ensure proper asset handling
        manualChunks: undefined,
        entryFileNames: 'assets/[name].[hash].js',
        chunkFileNames: 'assets/[name].[hash].js',
        assetFileNames: 'assets/[name].[hash].[ext]'
      }
    }
  },
  plugins: [
    react(),
    mode === 'development' &&
    componentTagger(),
    copyFilesToDist(),
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));
