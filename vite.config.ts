import { defineConfig } from "vite";
import { tanstackStart } from "@tanstack/react-start/plugin/vite";
import viteReact from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import tsConfigPaths from "vite-tsconfig-paths";

export default defineConfig({
  plugins: [
    tsConfigPaths({ projects: ["./tsconfig.json"] }),
    tailwindcss(),
    tanstackStart({
      customViteReactPlugin: true,
      // Build target for hosting. Change to "cloudflare-module" if you deploy
      // to Cloudflare Workers instead of Vercel.
      target: "vercel",
    }),
    viteReact(),
  ],
});
