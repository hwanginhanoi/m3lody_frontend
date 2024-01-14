<script setup lang="ts">
import {useTheme, useDisplay} from 'vuetify'
import {ref, computed} from 'vue'

const theme = useTheme()

const isDarkTheme = computed({
    get: () => theme.global.current.value.dark,
    set: (value) => {
        theme.global.name.value = value ? 'dark' : 'light'
    }
})

const rail = ref(false)
const rail2 = ref(true)
const { mdAndUp } = useDisplay()
</script>

<template>
    <v-navigation-drawer
        width="210"
        color="#151617"
        opacity='0.4'
        :rail="mdAndUp ? rail : rail2"
        permanent="true"
    >
        <div class="d-flex">
            <v-app-bar-nav-icon v-if="mdAndUp" @click.stop="rail=!rail" class="ml-1 mt-6"></v-app-bar-nav-icon>
            <v-app-bar-nav-icon v-if="!mdAndUp" @click.stop="rail2=!rail2" class="ml-1 mt-6"></v-app-bar-nav-icon>
            <v-img v-if="mdAndUp && !rail" src="src/assets/trade-dark.png" max-height="30" class="mt-8"
            ></v-img>
            <v-img v-if="!mdAndUp && !rail2" src="src/assets/trade-dark.png" max-height="30" class="mt-8"
            ></v-img>
        </div>
        <v-list density="compact" class="d-flex flex-column h100 rounded-list">
            <v-list-item rounded="lg" prepend-icon="mdi-dots-grid" title="Dashboard" value="dashboard" class="py-4 mb-2"></v-list-item>
            <v-list-item rounded="lg" prepend-icon="mdi-account-multiple" title="User" value="account" class="py-4 mb-2"></v-list-item>
            <v-list-item rounded="lg" prepend-icon="mdi-eye" title="Watchlist" value="watchlist" class="py-4 mb-2"></v-list-item>
            <v-list-item rounded="lg" prepend-icon="mdi-wallet" title="Wallet" value="wallet" class="py-4 mb-2"></v-list-item>
        </v-list>


        <template v-slot:append>
            <div>
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
                    <v-btn variant="plain" v-if="mdAndUp && !rail" rounded="xl" prepend-icon="mdi-logout" title="Logout" value="logout">Logout</v-btn>
                    <v-btn variant="plain" v-if="!mdAndUp && !rail2" rounded="xl" prepend-icon="mdi-logout" title="Logout" value="logout">Logout</v-btn>
                    <v-btn variant="plain" v-if="mdAndUp && rail" prepend-icon="mdi-logout" title="Logout" value="logout"></v-btn>
                    <v-btn variant="plain" v-if="!mdAndUp && rail2" prepend-icon="mdi-logout" title="Logout" value="logout"></v-btn>
                </v-list>
            </div>
        </template>
    </v-navigation-drawer>
</template>

<style scoped>
.rounded-list .v-list-item {
    padding: 0 16px;
}

.rounded-list .v-list-item:hover,
.rounded-list .v-list-item.v-list-item--active {
    padding: 0 16px;
}

.v-list-item {
    margin: 4px 0;
}
</style>

