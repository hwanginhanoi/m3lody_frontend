import './style.css'

import {createApp} from 'vue'
import App from './App.vue'
import router from './router';


// Vuetify
import 'vuetify/styles'
import {createVuetify} from 'vuetify'

const vuetify = createVuetify({
    theme: {
        defaultTheme: 'dark',
    },
})

createApp(App).use(vuetify).use(router).mount('#app');
