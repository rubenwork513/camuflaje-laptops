import image from "@astrojs/image";
import tailwind from "@astrojs/tailwind";
import { defineConfig } from "astro/config";

export default defineConfig({
  vite: {
    optimizeDeps: {
      exclude: ["@resvg/resvg-js"]
    },
    ssr: {
      external: ["svgo"]
    }
  },
  integrations: [
    tailwind(),
    image({
      serviceEntryPoint: "@astrojs/image/sharp"
    }),
  ]
});
