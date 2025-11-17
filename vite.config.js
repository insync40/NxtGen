import { defineConfig } from "vite";
import glsl from "vite-plugin-glsl";
import { resolve } from "path";
import { glob } from "glob";
import { fileURLToPath } from "url";
import { dirname } from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Dynamically get all JS files in src directory
const getInputFiles = async () => {
  const files = await glob("src/**/*.js", { cwd: __dirname });
  const input = {};

  files.forEach((file) => {
    const name = file
      .replace("src/", "")
      .replace(".js", "")
      .replace(/\//g, "-");
    input[name] = resolve(__dirname, file);
  });

  return input;
};

export default defineConfig(async () => ({
  base: "./",
  plugins: [glsl()],
  build: {
    outDir: "dist",
    minify: "terser",
    rollupOptions: {
      input: await getInputFiles(),
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
    allowedHosts: ["*"],
  },
  preview: {
    port: 4173,
    cors: true,
  },
}));
