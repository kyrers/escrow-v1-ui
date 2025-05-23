import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import svgr from "vite-plugin-svgr";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), svgr()],
  resolve: {
    alias: {
      components: "/src/components",
      context: "/src/context",
      hooks: "/src/hooks",
      theme: "/src/theme",
      assets: "/src/assets",
      config: "/src/config",
      layout: "/src/layout",
    },
  },
});
