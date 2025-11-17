import { defineConfig } from "vite";
import glsl from "vite-plugin-glsl";
import { glob } from "glob";
import { resolve } from "path";
import path from "path";
import { fileURLToPath } from "url";

// Get the directory name of the current module
const __dirname = path.dirname(fileURLToPath(import.meta.url));

// Find all .js files in the src directory
const jsFiles = glob.sync("src/**/*.js").reduce((acc, file) => {
  const name = path.basename(file, ".js");
  acc[name] = fileURLToPath(new URL(file, import.meta.url));
  return acc;
}, {});

export default defineConfig({
  base: "./",
  plugins: [glsl()],
  build: {
    outDir: "dist",
    minify: "terser",
    rollupOptions: {
      input: {
        main: resolve(__dirname, "src/main.js"),
        ...jsFiles,
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
  },
  preview: {
    port: 4173,
    cors: true,
  },
});
