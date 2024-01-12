import './style.css'

import {createApp} from 'vue'
import App from './App.vue'

// Vuetify
import 'vuetify/styles'
import {createVuetify} from 'vuetify'

const vuetify = createVuetify({
    theme: {
        defaultTheme: 'dark',
    },
})

createApp(App).use(vuetify).mount('#app')