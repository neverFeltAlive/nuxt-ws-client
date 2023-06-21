import { dirname, join } from 'path';
import { fileURLToPath } from 'url';

const currentDir = dirname(fileURLToPath(import.meta.url));

export default defineNuxtConfig({
  runtimeConfig: {
    public: {
      serverSocket: process.env.SERVER_SOCKET || 'localhost:8080',
    },
  },
  modules: ['@nuxtjs/stylelint-module', '@nuxtjs/eslint-module', '@pinia/nuxt'],
  devtools: { enabled: true },
  css: [join(currentDir, './assets/styles/main.scss')],
});
