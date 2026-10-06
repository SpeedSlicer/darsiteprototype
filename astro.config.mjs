// @ts-check

import tailwindcss from "@tailwindcss/vite"
import { defineConfig } from "astro/config"
import react from "@astrojs/react"

// https://astro.build/config
export default defineConfig({
  redirects: {
    "/you-can-help": "/support",
    "/sponsors": "/sponsor",
    "/fll-explore": "/fll",
    "/about-us": "/about",
    "/event-calendar": "/calendar",
    "/blog-standard": "/news",
    "/event-carousel": "/calendar",
  },
  vite: {
    plugins: [tailwindcss()],
  },
  integrations: [react()],
})
