// @ts-check
import { defineConfig } from 'astro/config';
import VueI18n from "@intlify/unplugin-vue-i18n/vite";
import path from "node:path";
import vue from '@astrojs/vue';

// https://astro.build/config
export default defineConfig({
   i18n: {
    locales: ["en", "pl"],
    defaultLocale: "pl",
    routing: {
      prefixDefaultLocale: true,
    },
  },
  integrations: [vue()],
  vite: {
    plugins: [
      VueI18n({
        include: path.resolve(import.meta.url, './src/components/vue-app/**'),
        strictMessage: false
      })
    ],
  }
});