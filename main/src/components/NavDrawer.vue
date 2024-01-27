<script setup lang="ts">
import {useTheme, useDisplay} from 'vuetify'
import {ref, computed} from 'vue'
import {useRoute} from 'vue-router'

const theme = useTheme()

const isDarkTheme = computed({
    get: () => theme.global.current.value.dark,
    set: (value) => {
        theme.global.name.value = value ? 'darkMode' : 'lightMode'
    }
})
const rail = ref(false)
const drawer = ref(false)
const {mdAndUp} = useDisplay()

let username: string = "Jane Doe"
let avatar: string = "https://randomuser.me/api/portraits/women/85.jpg"

const menu = ref(false)
const wallet = ref(false)
const cart = ref(false)

let balance = {coin: 500, usd: 100}

</script>

<template>
    <v-navigation-drawer
        v-model="drawer"
        v-if="!mdAndUp"
        width="230"
        color="nav-drawer"
        opacity='0.4'
    >
        <v-list density="compact" class="d-flex flex-column h100 rounded-list mt-5">
            <v-list-item to="/index" prepend-icon="mdi-dots-grid" title="Dashboard" value="dashboard"
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
                    <v-btn variant="plain" rounded="xl" prepend-icon="mdi-logout" title="Logout" value="logout">Logout
                    </v-btn>
                </v-list>
            </div>
        </template>
    </v-navigation-drawer>

    <v-app-bar elevation="0" color="nav-drawer" height="85" class="mx-auto">
        <v-app-bar-nav-icon v-if="!mdAndUp" @click.stop="drawer=!drawer" class="ml-1"></v-app-bar-nav-icon>
        <router-link to="/index" class="mx-4"><img
            src="../assets/trade-dark.png" height="30"></router-link>
        <v-divider vertical length="50" class="border-opacity-50 mt-4"></v-divider>
        <v-btn to="/marketplace" class="ml-2">Marketplace</v-btn>
        <v-btn to="/create">Create</v-btn>
        <v-spacer></v-spacer>
        <v-text-field
            clearable="true"
            class="pt-6"
            rounded="lg"
            bg-color="background"
            label="Search"
            prepend-inner-icon="mdi-magnify"
            variant="solo-filled"
            style="max-width: 300px;"
        ></v-text-field>
        <v-menu
            v-model="wallet"
            :close-on-content-click="false"
            location="bottom"
        >
            <template v-slot:activator="{ props }">
                <v-btn prepend-icon="mdi-wallet"
                       v-bind="props"
                       height="56px"
                       width="200px"
                       class="ml-2"
                       rounded="lg"
                       elevation="2"
                       :style="{ background: $vuetify.theme.global.current.colors.navbtn}"
                >
                    <div>{{ balance.coin }} ETH</div>
                    <v-divider vertical length="100" class="border-opacity-50 mx-2"></v-divider>
                    <div>{{ balance.usd }} USD</div>
                </v-btn>
                <!--                <v-card-text>hello</v-card-text>-->
            </template>

            <v-card min-width="250" rounded="lg" class="mt-2" width="500px" min-height="100px">
                <v-list height="" class="">
                    <v-list-item>
                        <v-row>
                            <v-col cols="9">
                                <p>ID: helloworld69-96</p>
                            </v-col>
                            <v-col>
                                <div class="theborder text-center rounded-lg">
                                    <v-icon icon="mdi-currency-usd"></v-icon>

                                </div>
                            </v-col>
                        </v-row>
                        <v-row>
                            <v-col>
                                <p><span class="usdtext font-weight-bold">$30 USD</span> </p>
                                <p class="mt-2 font">Wallet balance</p>
                            </v-col>
                            <v-col>
                                <v-menu>

                                </v-menu>
                            </v-col>
                        </v-row>
                        <br>
                    </v-list-item>

                    <v-list-item>
                        <v-btn></v-btn>
                    </v-list-item>
                </v-list>
                <v-divider>
                </v-divider>
            </v-card>
            <v-card>
                <v-list-item height="250px" width="" class="d-flex justify-center">
                    <v-list-item class="d-flex justify-center">
                        <v-icon icon="mdi-wallet" size="50px"></v-icon>
                    </v-list-item>
                    <v-list-item class="d-flex justify-center">
                        <v-card-text class="font-weight-bold textSize">Fund your wallet to purchase NFTs</v-card-text>
                    </v-list-item>
                    <v-list-item class="d-flex justify-center">
                        <v-btn class="bg-green" width="230px">Add Funds With Cards</v-btn>
                    </v-list-item>
                    <v-list-item class="d-flex justify-center"  >
                        <v-btn class="bg-purple" width="230px">Deposit</v-btn>
                    </v-list-item>

                </v-list-item>
            </v-card>

        </v-menu>

        <v-dialog width="30%">
            <template v-slot:activator="{ props }">
                <v-btn v-bind="props" icon="mdi-cart" height="56px" width="56" class="ml-2 " rounded="lg" elevation="2"
                       :style="{ background: $vuetify.theme.global.current.colors.navbtn}">
                </v-btn>
            </template>

            <template v-slot:default="{ isActive }" style="position: absolute; bottom: 0;">
                <v-card title="Dialog" rounded="lg">
                    <v-card-text>
                    </v-card-text>

                    <v-card-actions>
                        <v-spacer></v-spacer>

                        <v-btn
                            text="Close Dialog"
                            @click="isActive.value = false"
                        ></v-btn>
                    </v-card-actions>
                </v-card>
            </template>
        </v-dialog>

        <v-menu
            v-model="menu"
            :close-on-content-click="true"
            location="bottom"
        >
            <template v-slot:activator="{ props }">
                <v-btn icon="mdi-account"
                       v-bind="props"
                       height="56px"
                       width="56"
                       class="ml-2 "
                       rounded="lg"
                       elevation="2"
                       :style="{ background: $vuetify.theme.global.current.colors.navbtn}">
                </v-btn>
            </template>

            <v-card min-width="250" rounded="lg" class="mt-2 bg-transparent">
                <v-list>
                    <v-list-item
                        to="/profile"
                        :prepend-avatar="avatar"
                        :title="username"
                        active-class="no-active"
                    >
                    </v-list-item>
                    <v-list-item to="/account" prepend-icon="mdi-cog" title="Settings"></v-list-item>
                    <v-divider class="border-opacity-50"></v-divider>
                    <v-list-item to="/watchlist" prepend-icon="mdi-eye" title="Watchlist"></v-list-item>
                    <v-list-item to="/transaction" prepend-icon="mdi-history" title="Transactions"></v-list-item>
                    <v-divider class="border-opacity-50"></v-divider>
                    <v-switch
                        v-model="isDarkTheme"
                        hide-details
                        false-icon="mdi-white-balance-sunny"
                        true-icon="mdi-weather-night"
                        id="dark-mode-switch"
                        class="ml-2"
                        :label="isDarkTheme ? 'Dark Mode' : 'Light Mode'"
                    >
                    </v-switch>
                    <v-list-item prepend-icon="mdi-logout" title="Logout"></v-list-item>
                </v-list>
            </v-card>
        </v-menu>
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
    border-top-right-radius: 8px;
    border-bottom-right-radius: 8px;
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

.theborder {
    border: solid 1px white;
}
.textSize{
    font-size: 17px;
}

.usdtext{
    font-size: 30px;
    color: lightgreen;
}

.customLogo :deep(.v-btn--active) {
    background-color: transparent;
}
</style>

