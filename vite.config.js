import { defineConfig } from "vite";
import glsl from "vite-plugin-glsl";
import { resolve } from "path";
import { glob } from "glob";
import { fileURLToPath } from "url";
import { dirname } from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export default defineConfig({
  base: "./",
  plugins: [glsl()],
  build: {
    outDir: "dist",
    minify: "terser",
    rollupOptions: {
      input: {
        main: resolve(__dirname, "src/main.js"),
        index: resolve(__dirname, "src/index.js"),
        home: resolve(__dirname, "src/pages/home.js"),
        startup: resolve(__dirname, "src/pages/startup.js"),
        student: resolve(__dirname, "src/pages/student.js"),
        contact: resolve(__dirname, "src/pages/contact.js"),
      },
      output: {
        entryFileNames: "[name].js",
        chunkFileNames: "[name].js",
        assetFileNames: "[name].[ext]",
        format: "iife",
      },
    },
    reportCompressedSize: true,
  },
  server: {
    port: 5173,
    host: true,
    cors: true,
    hmr: {
      protocol: "ws",
      host: "localhost",
      port: 5173,
    },
    watch: {
      usePolling: true,
    },
    allowedHosts: ["*"],
  },
  preview: {
    port: 4173,
    cors: true,
  },
});
