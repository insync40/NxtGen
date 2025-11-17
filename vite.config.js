// ...existing code...
import { defineConfig } from "vite";
import glsl from "vite-plugin-glsl";
import { resolve, relative, dirname } from "path";
import { readdirSync, statSync } from "fs";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));

function collectEntries(dir, baseDir = dir) {
  const entries = {};
  for (const name of readdirSync(dir)) {
    const full = resolve(dir, name);
    const stat = statSync(full);
    if (stat.isDirectory()) {
      Object.assign(entries, collectEntries(full, baseDir));
    } else if (/\.(js|css)$/.test(name)) {
      // keep relative path (without extension) so output preserves folder structure, e.g. pages/contact -> dist/pages/contact.js
      const rel = relative(baseDir, full)
        .replace(/\\+/g, "/")
        .replace(/\.(js|css)$/, "");
      entries[rel] = full;
    }
  }
  return entries;
}

const srcDir = resolve(__dirname, "src");
const inputEntries = collectEntries(srcDir);

export default defineConfig({
  base: "./",
  plugins: [glsl()],
  build: {
    outDir: "dist",
    minify: "terser",
    rollupOptions: {
      // include every .js and .css file under src as an entry
      input: inputEntries,
      output: {
        // preserve names and folder structure from the input keys
        entryFileNames: "[name].js",
        chunkFileNames: "[name].js",
        assetFileNames: "[name].[ext]",
        // format: "iife",
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
// ...existing code...
