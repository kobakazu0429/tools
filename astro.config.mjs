import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  site: "https://kobakazu0429.github.io",
  base: import.meta.env.PROD ? "/tools" : undefined,
  integrations: [tailwind()],
});
