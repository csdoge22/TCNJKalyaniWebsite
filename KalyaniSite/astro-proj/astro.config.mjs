import { defineConfig } from 'astro/config';

import react from "@astrojs/react";

// this is how we manage automatic page routing on AWS

// https://astro.build/config
export default defineConfig({
  prefetch: true,
  experimental: {
    clientPrerender: true,
    globalRoutePriority: true
  },
  integrations: [react()]
});