import tailwind from "@astrojs/tailwind";
import compress from "astro-compress";
import icon from "astro-icon";
import { defineConfig } from "astro/config";
import vercel from "@astrojs/vercel";

export default defineConfig({
  output: "server",

  adapter: vercel({
    runtime: "nodejs22.x"
  }),

  integrations: [
    tailwind(),
    icon(),
    compress()
  ]
});
