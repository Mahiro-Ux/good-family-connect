import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

export default defineConfig({
  plugins: [react()],

  server: {
    host: "0.0.0.0",
    port: 5173,

    // Tambah security header waktu development
    headers: {
      "X-Frame-Options": "DENY",              // anti clickjacking
      "Content-Security-Policy": "frame-ancestors 'none';",
      "X-Content-Type-Options": "nosniff",    // anti MIME sniffing
    },
  },

  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
