import { defineConfig } from 'vite'

export default defineConfig({
  // Relative base: the site works whatever the repo name is
  // (https://<user>.github.io/<repo>/)
  base: './',
  define: {
    __BUILD_DATE__: JSON.stringify(new Date().toLocaleString('en-US')),
  },
})
