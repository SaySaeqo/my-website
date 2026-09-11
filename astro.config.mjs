// @ts-check
import { defineConfig } from 'astro/config';
import VueI18n from "@intlify/unplugin-vue-i18n/vite";
import path from "node:path";
import vue from '@astrojs/vue';

// https://astro.build/config
export default defineConfig({
  integrations: [vue()],
  vite: {
    plugins: [
      VueI18n({
        include: path.resolve(import.meta.url, './src/components/vue-app/**'),
        strictMessage: false
      })
    ],
    resolve: {
      alias: {
        '@alias': path.resolve(import.meta.url, './src/assets')
      }
    }
  }
});