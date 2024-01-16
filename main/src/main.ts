import './style.css'

import {createApp} from 'vue'
import App from './App.vue'
import router from './router';
import VueApexCharts from "vue3-apexcharts";


// Vuetify
import 'vuetify/styles'
import {createVuetify} from 'vuetify'

const vuetify = createVuetify({
    theme: {
        defaultTheme: 'dark',
    },
})

createApp(App).use(vuetify).use(router).use(VueApexCharts).mount('#app');
