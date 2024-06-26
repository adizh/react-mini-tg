import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { nodePolyfills } from "vite-plugin-node-polyfills";
const htmlImport = {
  name: "htmlImport",
  /**
   * Checks to ensure that a html file is being imported.
   * If it is then it alters the code being passed as being a string being exported by default.
   * @param {string} code The file as a string.
   * @param {string} id The absolute path.
   * @returns {{code: string}}
   */
  // transform(code, id) {
  //   if (/^.*\.html$/g.test(id)) {
  //     code = `export default \`${code}\``;
  //   }
  //   return { code };
  // },
};
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), htmlImport],
  base: "/react-mini-tg/",

  build: {
    minify: "terser",
    terserOptions: {
      compress: {
        // drop_console: true,
        // drop_debugger: true,
      },
    },
    rollupOptions: {
      output: {
        entryFileNames: `assets/[name].js`,
        chunkFileNames: `assets/[name].js`,
      },
    },
  },
});
