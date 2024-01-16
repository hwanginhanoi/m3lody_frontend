import './style.css'

import {createApp} from 'vue'
import App from './App.vue'
import router from './plugins/router.ts';
import vuetify from "./plugins/vuetify.ts";

createApp(App).use(vuetify).use(router).mount('#app');
