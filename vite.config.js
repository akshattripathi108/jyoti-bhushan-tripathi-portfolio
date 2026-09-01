import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(import.meta.dirname, "./src"),
      "@components": path.resolve(import.meta.dirname, "./src/components"),
      "@hooks": path.resolve(import.meta.dirname, "./src/hooks"),
      "@data": path.resolve(import.meta.dirname, "./src/data"),
    },
  },
  build: {
    // Generate source maps for production debugging
    sourcemap: false,
    // Optimise chunk splitting — must be a function, not a plain object
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes("node_modules/react") || id.includes("node_modules/react-dom")) {
            return "react";
          }
          if (id.includes("node_modules/lucide-react")) {
            return "icons";
          }
        },
      },
    },
    // Warn if individual chunks exceed 500 kB
    chunkSizeWarningLimit: 500,
  },
  server: {
    host: true,
    port: 5173,
    open: true,
  },
});
