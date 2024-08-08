// vite.config.ts
import { defineConfig } from "file:///D:/projects/personal/asterix-ui/node_modules/vite/dist/node/index.js";
import react from "file:///D:/projects/personal/asterix-ui/node_modules/@vitejs/plugin-react/dist/index.mjs";
import { resolve } from "path";
import dts from "file:///D:/projects/personal/asterix-ui/node_modules/vite-plugin-dts/dist/index.mjs";
import cssInjectedByJsPlugin from "file:///D:/projects/personal/asterix-ui/node_modules/vite-plugin-css-injected-by-js/dist/esm/index.js";
var __vite_injected_original_dirname = "D:\\projects\\personal\\asterix-ui";
var vite_config_default = defineConfig({
  resolve: {
    alias: {
      components: "/src/components",
      hooks: "/src/hooks"
    }
  },
  build: {
    lib: {
      entry: resolve(__vite_injected_original_dirname, "src/components/index.ts"),
      name: "AsterUi",
      fileName: "asterui"
    },
    rollupOptions: {
      external: ["react"],
      output: {
        globals: {
          react: "React"
        }
      }
    }
  },
  plugins: [
    react(),
    cssInjectedByJsPlugin({ useStrictCSP: true, relativeCSSInjection: false }),
    dts({
      insertTypesEntry: true
    })
  ]
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJEOlxcXFxwcm9qZWN0c1xcXFxwZXJzb25hbFxcXFxhc3Rlcml4LXVpXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCJEOlxcXFxwcm9qZWN0c1xcXFxwZXJzb25hbFxcXFxhc3Rlcml4LXVpXFxcXHZpdGUuY29uZmlnLnRzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9EOi9wcm9qZWN0cy9wZXJzb25hbC9hc3Rlcml4LXVpL3ZpdGUuY29uZmlnLnRzXCI7aW1wb3J0IHsgZGVmaW5lQ29uZmlnIH0gZnJvbSBcInZpdGVcIjtcbmltcG9ydCByZWFjdCBmcm9tIFwiQHZpdGVqcy9wbHVnaW4tcmVhY3RcIjtcbmltcG9ydCB7IHJlc29sdmUgfSBmcm9tIFwicGF0aFwiO1xuaW1wb3J0IGR0cyBmcm9tIFwidml0ZS1wbHVnaW4tZHRzXCI7XG5pbXBvcnQgY3NzSW5qZWN0ZWRCeUpzUGx1Z2luIGZyb20gXCJ2aXRlLXBsdWdpbi1jc3MtaW5qZWN0ZWQtYnktanNcIjtcblxuLy8gaHR0cHM6Ly92aXRlanMuZGV2L2NvbmZpZy9cbmV4cG9ydCBkZWZhdWx0IGRlZmluZUNvbmZpZyh7XG4gIHJlc29sdmU6IHtcbiAgICBhbGlhczoge1xuICAgICAgY29tcG9uZW50czogXCIvc3JjL2NvbXBvbmVudHNcIixcbiAgICAgIGhvb2tzOiBcIi9zcmMvaG9va3NcIixcbiAgICB9LFxuICB9LFxuICBidWlsZDoge1xuICAgIGxpYjoge1xuICAgICAgZW50cnk6IHJlc29sdmUoX19kaXJuYW1lLCBcInNyYy9jb21wb25lbnRzL2luZGV4LnRzXCIpLFxuICAgICAgbmFtZTogXCJBc3RlclVpXCIsXG4gICAgICBmaWxlTmFtZTogXCJhc3RlcnVpXCIsXG4gICAgfSxcbiAgICByb2xsdXBPcHRpb25zOiB7XG4gICAgICBleHRlcm5hbDogW1wicmVhY3RcIl0sXG4gICAgICBvdXRwdXQ6IHtcbiAgICAgICAgZ2xvYmFsczoge1xuICAgICAgICAgIHJlYWN0OiBcIlJlYWN0XCIsXG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgIH0sXG4gIH0sXG4gIHBsdWdpbnM6IFtcbiAgICByZWFjdCgpLFxuICAgIGNzc0luamVjdGVkQnlKc1BsdWdpbih7IHVzZVN0cmljdENTUDogdHJ1ZSwgcmVsYXRpdmVDU1NJbmplY3Rpb246IGZhbHNlIH0pLFxuICAgIGR0cyh7XG4gICAgICBpbnNlcnRUeXBlc0VudHJ5OiB0cnVlLFxuICAgIH0pLFxuICBdLFxufSk7XG4iXSwKICAibWFwcGluZ3MiOiAiO0FBQXVSLFNBQVMsb0JBQW9CO0FBQ3BULE9BQU8sV0FBVztBQUNsQixTQUFTLGVBQWU7QUFDeEIsT0FBTyxTQUFTO0FBQ2hCLE9BQU8sMkJBQTJCO0FBSmxDLElBQU0sbUNBQW1DO0FBT3pDLElBQU8sc0JBQVEsYUFBYTtBQUFBLEVBQzFCLFNBQVM7QUFBQSxJQUNQLE9BQU87QUFBQSxNQUNMLFlBQVk7QUFBQSxNQUNaLE9BQU87QUFBQSxJQUNUO0FBQUEsRUFDRjtBQUFBLEVBQ0EsT0FBTztBQUFBLElBQ0wsS0FBSztBQUFBLE1BQ0gsT0FBTyxRQUFRLGtDQUFXLHlCQUF5QjtBQUFBLE1BQ25ELE1BQU07QUFBQSxNQUNOLFVBQVU7QUFBQSxJQUNaO0FBQUEsSUFDQSxlQUFlO0FBQUEsTUFDYixVQUFVLENBQUMsT0FBTztBQUFBLE1BQ2xCLFFBQVE7QUFBQSxRQUNOLFNBQVM7QUFBQSxVQUNQLE9BQU87QUFBQSxRQUNUO0FBQUEsTUFDRjtBQUFBLElBQ0Y7QUFBQSxFQUNGO0FBQUEsRUFDQSxTQUFTO0FBQUEsSUFDUCxNQUFNO0FBQUEsSUFDTixzQkFBc0IsRUFBRSxjQUFjLE1BQU0sc0JBQXNCLE1BQU0sQ0FBQztBQUFBLElBQ3pFLElBQUk7QUFBQSxNQUNGLGtCQUFrQjtBQUFBLElBQ3BCLENBQUM7QUFBQSxFQUNIO0FBQ0YsQ0FBQzsiLAogICJuYW1lcyI6IFtdCn0K
