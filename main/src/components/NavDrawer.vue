<script setup lang="ts">
import {useTheme} from 'vuetify'
import {computed} from 'vue'

const theme = useTheme()

const isDarkTheme = computed({
    get: () => theme.global.current.value.dark,
    set: (value) => {
        theme.global.name.value = value ? 'dark' : 'light'
    }
})
</script>

<template>
    <v-navigation-drawer
        color="#151617"
        opacity='0.4'
        permanent="true"
    >
        <v-list>
            <v-list-item
                prepend-avatar="https://randomuser.me/api/portraits/women/85.jpg"
                title="Sandra Adams"
                subtitle="sandra_a88@gmailcom"
            ></v-list-item>
        </v-list>

        <v-list density="compact" class="d-flex pa-2 flex-column h100">
            <v-list-item prepend-icon="mdi-dots-grid" title="Dashboard" value="dashboard"></v-list-item>
            <v-list-item prepend-icon="mdi-account-multiple" title="User" value="account"></v-list-item>
            <v-list-item prepend-icon="mdi-wallet" title="Wallet" value="wallet"></v-list-item>
        </v-list>


        <template v-slot:append>
            <div class="pa-2">
                <v-list density="compact" class="d-flex flex-column">
                    <v-switch
                        v-model="isDarkTheme"
                        hide-details
                        inset="true"
                        false-icon="mdi-white-balance-sunny"
                        true-icon="mdi-weather-night"
                        id="dark-mode-switch"
                        class="mx-auto">
                    </v-switch>
                    <v-list-item prepend-icon="mdi-logout" title="Logout" value="logout"></v-list-item>
                </v-list>
            </div>
        </template>
    </v-navigation-drawer>


</template>

<style scoped>

</style>

