import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import { resolve } from "path";
import cssInjectedByJsPlugin from "vite-plugin-css-injected-by-js";
import dts from "vite-plugin-dts";

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      components: "/src/components",
      hooks: "/src/hooks",
    },
  },
  build: {
    lib: {
      entry: resolve(__dirname, "src/components/index.ts"),
      name: "AsterixUi",
      fileName: "asterixui",
    },
    rollupOptions: {
      external: ["react"],
      output: {
        globals: {
          react: "React",
        },
      },
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@use "components/variables";`,
        api: "modern-compiler",
      },
    },
  },
  plugins: [
    react(),
    cssInjectedByJsPlugin({ useStrictCSP: true, relativeCSSInjection: false }),
    dts({
      tsconfigPath: resolve(__dirname, "tsconfig.app.json"),
      insertTypesEntry: true,
    }),
  ],
});
