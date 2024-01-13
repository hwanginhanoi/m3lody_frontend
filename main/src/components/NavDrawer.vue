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
        width="210"
        color="#151617"
        opacity='0.4'
        permanent="true"
    >
        <v-img src="https://api.logo.com/api/v2/images?logo=logo_3944e7bb-b80e-45e5-adea-a7224f19746a&u=1705131932218&format=svg&margins=166&width=1000&height=750&fit=contain"
        ></v-img>
        <v-list density="compact" class="d-flex pa-2 flex-column h100 rounded-list">
            <v-list-item prepend-icon="mdi-dots-grid" title="Dashboard" value="dashboard"></v-list-item>
            <v-list-item prepend-icon="mdi-account-multiple" title="User" value="account"></v-list-item>
            <v-list-item prepend-icon="mdi-eye" title="Watchlist" value="watchlist"></v-list-item>
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
.rounded-list .v-list-item:hover,
.rounded-list .v-list-item.v-list-item--active {
    border-radius: 20px;
    padding: 0 16px;
    margin: 4px;
}

.v-list-item {
    margin: 4px 0;
}


</style>

