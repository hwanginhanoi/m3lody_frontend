import './style.css'

//import all components
import {createApp} from 'vue'
import App from './App.vue'
import { createPinia } from 'pinia';
import VueApexCharts from "vue3-apexcharts";
import router from './plugins/router.ts';
import vuetify from "./plugins/vuetify.ts";
import Particles from "@tsparticles/vue3";
import { loadFull } from "tsparticles"

createApp(App).use(createPinia()).use(vuetify).use(router).use(VueApexCharts).use(Particles, {
  init: async (engine: any) => {
    await loadFull(engine);
  }}).mount('#app');

