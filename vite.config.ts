import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import { resolve } from "path";
import dts from "vite-plugin-dts";
import cssInjectedByJsPlugin from "vite-plugin-css-injected-by-js";

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
      name: "AsterUi",
      fileName: "asterui",
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
      },
    },
  },
  plugins: [
    react(),
    cssInjectedByJsPlugin({ useStrictCSP: true, relativeCSSInjection: false }),
    dts({
      insertTypesEntry: true,
    }),
  ],
});
