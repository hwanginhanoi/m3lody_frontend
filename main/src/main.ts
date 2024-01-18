import './style.css'

import {createApp} from 'vue'
import App from './App.vue'
import router from './plugins/router.ts';
import vuetify from "./plugins/vuetify.ts";
import Particles from "@tsparticles/vue3";
import { loadFull } from "tsparticles"

createApp(App).use(vuetify).use(router).use(Particles, {
  init: async (engine: any) => {
    await loadFull(engine);
  }}).mount('#app');
