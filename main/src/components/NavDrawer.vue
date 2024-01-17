<script setup lang="ts">
import {useTheme, useDisplay} from 'vuetify'
import {ref, computed} from 'vue'

const theme = useTheme()

const isDarkTheme = computed({
    get: () => theme.global.current.value.dark,
    set: (value) => {
        theme.global.name.value = value ? 'darkMode' : 'lightMode'
    }
})
const rail = ref(false)
const drawer = ref(false)
const { mdAndUp } = useDisplay()

let username : string = "Jane Doe"
let avatar : string = "https://randomuser.me/api/portraits/women/85.jpg"
</script>

<template>
    <v-navigation-drawer
        v-if="mdAndUp"
        width="210"
        color="nav-drawer"
        opacity='0.4'
        :rail="mdAndUp ? rail : false"
        permanent="true"
    >
        <div class="d-flex">
            <v-app-bar-nav-icon @click.stop="rail=!rail" class="ml-1 mt-6"></v-app-bar-nav-icon>
            <v-img v-if="mdAndUp && !rail" src="src/assets/trade-dark.png" max-height="30" class="mt-8 mr-5"
            ></v-img>
        </div>
        <v-list density="compact" class="d-flex flex-column h100 rounded-list mt-5">
            <v-list-item to="/index" prepend-icon="mdi-dots-grid" title="Dashboard" value="dashboard"
                         class="py-2 mb-2 mr-5 rounded-button customPrepend"></v-list-item>
            <v-list-item to="/exchange" prepend-icon="mdi-cash-multiple" title="Exchange" value="exchange"
                         class="py-2 mb-4 mr-2 rounded-button customPrepend"></v-list-item>
            <v-list-item to="/account" prepend-icon="mdi-account-multiple" title="User" value="account"
                         class="py-2 mb-4 mr-2 rounded-button customPrepend"></v-list-item>
            <v-list-item to="/watchlist" prepend-icon="mdi-eye" title="Watchlist" value="watchlist"
                         class="py-2 mb-4 mr-2 rounded-button customPrepend"></v-list-item>
            <v-list-item to="/wallet" prepend-icon="mdi-wallet" title="Wallet" value="wallet"
                         class="py-2 mb-4 mr-2 rounded-button customPrepend"></v-list-item>
            <v-list-item to="/marketplace" prepend-icon="mdi-store" title="Marketplace" value="marketplace"
                         class="py-2 mb-4 mr-2 rounded-button customPrepend"></v-list-item>
            <v-list-item to="/exchange" prepend-icon="mdi-cash-multiple" title="Exchange" value="exchange"
                         class="py-2 mb-4 mr-2 rounded-button customPrepend"></v-list-item>
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
                    <v-btn variant="plain" v-if="mdAndUp && rail" prepend-icon="mdi-logout" title="Logout" value="logout"></v-btn>
                </v-list>
            </div>
        </template>
    </v-navigation-drawer>

    <v-navigation-drawer
        v-model="drawer"
        v-if="!mdAndUp"
        width="210"
        color="nav-drawer"
        opacity='0.4'
    >
        <div class="d-flex">
            <v-img src="src/assets/trade-dark.png" max-height="30" class="mt-8"
            ></v-img>
        </div>
        <v-list density="compact" class="d-flex flex-column h100 rounded-list">
            <v-list-item to="/index" prepend-icon="mdi-dots-grid" title="Dashboard" value="dashboard" class="py-2 mb-4 mr-2 rounded-button customPrepend"></v-list-item>
            <v-list-item to="/account" prepend-icon="mdi-account-multiple" title="User" value="account" class="py-2 mb-4 mr-2 rounded-button customPrepend"></v-list-item>
            <v-list-item to="/watchlist" prepend-icon="mdi-eye" title="Watchlist" value="watchlist" class="py-2 mb-4 mr-2 rounded-button customPrepend"></v-list-item>
            <v-list-item to="/wallet" prepend-icon="mdi-wallet" title="Wallet" value="wallet" class="py-2 mb-4 mr-2 customPrepend"></v-list-item>
            <v-list-item to="/marketplace" prepend-icon="mdi-store" title="Marketplace" value="marketplace" class="py-2 mb-4 mr-2 rounded-button customPrepend"></v-list-item>
            <v-list-item to="/exchange" prepend-icon="mdi-cash-multiple" title="Exchange" value="exchange" class="py-2 mb-4 mr-2 rounded-button customPrepend"></v-list-item>
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
                    <v-btn variant="plain" rounded="xl" prepend-icon="mdi-logout" title="Logout" value="logout">Logout</v-btn>
                </v-list>
            </div>
        </template>
    </v-navigation-drawer>

    <v-app-bar elevation="0" color="background" height="85">
        <v-app-bar-nav-icon v-if="!mdAndUp" @click.stop="drawer=!drawer" class="ml-1"></v-app-bar-nav-icon>
        <v-app-bar-title>
            Application
        </v-app-bar-title>
        <v-text-field
            clearable="true"
            class="pt-6"
            rounded
            bg-color="background"
            label="Search"
            prepend-inner-icon="mdi-magnify"
            variant="solo-filled"
            style="max-width: 250px;"
        ></v-text-field>
        <v-list-item
            :prepend-avatar= avatar
            :title= username>
        </v-list-item>
    </v-app-bar>
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

.rounded-button {
    border-top-right-radius: 25px;
    border-bottom-right-radius: 25px;
}

.customPrepend :deep(.v-list-item__prepend .v-list-item__spacer) {
    width: 15px;
}

.v-list-item {
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
}

</style>

