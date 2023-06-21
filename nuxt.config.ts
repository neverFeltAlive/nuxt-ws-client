import { fileURLToPath } from 'url'
import { dirname, join } from 'path'

const currentDir = dirname(fileURLToPath(import.meta.url))

export default defineNuxtConfig({
  modules: ['@nuxtjs/stylelint-module', '@nuxtjs/eslint-module'],
  devtools: { enabled: true },
  css: [
      join(currentDir, "./assets/styles/main.scss")
  ],
})
