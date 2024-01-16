import 'vuetify/styles'
import {createVuetify, type ThemeDefinition} from 'vuetify'

const darkMode: ThemeDefinition = {
    dark: true,
    colors: {
        background: '#1A1D1E',
        surface: '#151718',
        primary: '#77ED91',
        secondary: '#FFFFFF',
        success: '#2DC24E',
        warning: '#F92C2C',
        error: '#b00020',
        'nav-drawer': '#151617',
    },
}

const lightMode: ThemeDefinition = {
    dark: false,
    colors: {
        background: '#FFFFFF',
        surface: '#F5F5F5',
        primary: '#333333',
        secondary: '#000000',
        success: '#2DC24E',
        warning: '#F92C2C',
        error: '#b00020',
        'nav-drawer': '#EEEEEE',
    },
}

const vuetify = createVuetify({
    theme: {
        defaultTheme: 'darkMode',
        themes: {
            darkMode,
            lightMode,
        },
    },
})

export default vuetify;