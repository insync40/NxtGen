import { defineConfig } from "vite";
import glsl from "vite-plugin-glsl";
import { resolve } from "path";
import { fileURLToPath } from "url";
import { dirname } from "path";
import fs from "fs";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Only include files that actually exist
const getValidInputs = () => {
  const entries = {
    main: resolve(__dirname, "src/main.js"),
    index: resolve(__dirname, "src/index.js"),
    home: resolve(__dirname, "src/pages/home.js"),
    startup: resolve(__dirname, "src/pages/startup.js"),
    student: resolve(__dirname, "src/pages/student.js"),
    contact: resolve(__dirname, "src/pages/contact.js"),
  };

  const validEntries = {};
  Object.entries(entries).forEach(([name, path]) => {
    if (fs.existsSync(path)) {
      validEntries[name] = path;
    }
  });

  return validEntries;
};

export default defineConfig({
  base: "./",
  plugins: [glsl()],
  build: {
    outDir: "dist",
    minify: "terser",
    rollupOptions: {
      input: getValidInputs(),
      output: {
        entryFileNames: "[name].js",
        chunkFileNames: "[name]-[hash].js",
        assetFileNames: "assets/[name]-[hash][extname]",
        format: "es",
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
    allowedHosts: ["*"],
  },
  preview: {
    port: 4173,
    cors: true,
  },
});
