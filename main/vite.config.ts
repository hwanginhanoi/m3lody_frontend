import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vuetify from 'vite-plugin-vuetify'

//export configs
export default defineConfig({
  plugins: [
    vue(),
    vuetify({ autoImport: true }),
  ]
})
