import { defineStore } from 'pinia'
import {ref} from 'vue'

export const useNavStore = defineStore('nav', () => {
    const drawer = ref(true)
    const rail = ref(false)
    function toggleDrawer(){
        drawer.value = !drawer.value
    }
    function toggleRail(){
        rail.value = !rail.value
    }

    return {
        drawer,
        rail,
        toggleDrawer,
        toggleRail
    }
})