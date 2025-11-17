import { defineConfig } from "vite";
import glsl from "vite-plugin-glsl";
import { resolve } from "path";

export default defineConfig({
  base: "./",
  plugins: [glsl()],
  build: {
    outDir: "dist",
    minify: "terser",
    rollupOptions: {
      input: {
        main: resolve(__dirname, "src/main.js"),
        home: resolve(__dirname, "src/pages/home.js"),
        contact: resolve(__dirname, "src/pages/contact.js"),
        startup: resolve(__dirname, "src/pages/startup.js"),
        student: resolve(__dirname, "src/pages/student.js"),
      },
      output: {
        entryFileNames: "[name].js",
        chunkFileNames: "[name].js",
        assetFileNames: "[name].[ext]",
        // format: "iife",
        inlineDynamicImports: false,
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
    allowedHosts: ["*.loca.lt", "abila-it.loca.lt", "dev.indrampd.web.id"],
  },
  preview: {
    port: 4173,
    cors: true,
  },
});
