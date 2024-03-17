<script setup lang="ts">
import {useTheme, useDisplay} from 'vuetify'
import {useRoute} from "vue-router"
import {ref, computed} from 'vue'
import Buy from "./exchangeCompos/Buy.vue"
import Deposit from "./exchangeCompos/Deposit.vue"
import Cart from "./Cart.vue"
import logout from "../apis/logout.ts";
import getWalletInfor from "../apis/wallet/getWalletInfor.ts";
import {onMounted} from "vue";

const theme = useTheme()

//processing darkmode features
const isDarkTheme = computed({
    get: () => theme.global.current.value.dark,
    set: (value) => {
        theme.global.name.value = value ? 'darkMode' : 'lightMode'
    }
})

const drawer = ref(false)
const {mdAndUp} = useDisplay()

//wallet information
let walletInfo = ref()
onMounted(async () => {
    walletInfo.value = await getWalletInfor()
    console.log(walletInfo)
});

let username: string = "Beff Jezos";
let avatar: string = "src/assets/avatar.jpg";

const menu = ref(false)
const wallet = ref(false)

let balance = {coin: 500, usd: walletInfo.value.usd_balance, eth: walletInfo.value.eth_balance}
let userID = ref("01x...3453")

const router = useRoute()

//checking for routes
function checkRoute(): boolean {
    return router.name != "Index";
}

console.log(router.name)

async function handleLogout() {
    await logout()
}


</script>

<template>
    <v-navigation-drawer
        v-model="drawer"
        v-if="!mdAndUp && checkRoute()"
        width="230"
        color="nav-drawer"
        opacity='0.4'
    >

        <v-list density="compact" class="d-flex flex-column h100 rounded-list mt-5">
<!--            profile icon-->
            <v-list-item
                to="/profile"
                :prepend-avatar="avatar"
                :title="username"
                value="profile"
                class="py-2 mb-4 mr-2 rounded-button customPrepend"
            >
            </v-list-item>
            <v-list-item to="/index" prepend-icon="mdi-dots-grid" title="Dashboard" value="dashboard"
                         class="py-2 mb-4 mr-2 rounded-button customPrepend"></v-list-item>
            <v-list-item to="/transaction" prepend-icon="mdi-history" title="Transaction" value="transaction"
                         class="py-2 mb-4 mr-2 rounded-button customPrepend"></v-list-item>
            <v-list-item to="/watchlist" prepend-icon="mdi-eye" title="Watchlist" value="Watchlist"
                         class="py-2 mb-4 mr-2 rounded-button customPrepend"></v-list-item>
            <v-list-item to="/account" prepend-icon="mdi-account-multiple" title="Settings" value="settings"
                         class="py-2 mb-4 mr-2 rounded-button customPrepend"></v-list-item>
            <v-list-item to="/watchlist" prepend-icon="mdi-eye" title="Watchlist" value="watchlist"
                         class="py-2 mb-4 mr-2 rounded-button customPrepend"></v-list-item>
            <v-list-item to="/create" prepend-icon="mdi-music-note-plus" title="Create" value="create"
                         class="py-2 mb-4 mr-2 rounded-button customPrepend"></v-list-item>
            <v-list-item to="/marketplace" prepend-icon="mdi-store" title="Marketplace" value="marketplace"
                         class="py-2 mb-4 mr-2 rounded-button customPrepend"></v-list-item>
        </v-list>


        <template v-slot:append>
            <div>
                <v-list density="compact" class="d-flex flex-column">
<!--                    switches for darkmode/lightmode-->
                    <v-switch
                        v-model="isDarkTheme"
                        hide-details
                        inset
                        false-icon="mdi-white-balance-sunny"
                        true-icon="mdi-weather-night"
                        id="dark-mode-switch"
                        class="mx-auto">
                    </v-switch>
                    <v-btn variant="plain" rounded="xl" prepend-icon="mdi-logout" title="Logout" value="logout" to="/index" @click="handleLogout">Logout
                    </v-btn>
                </v-list>
            </div>
        </template>
    </v-navigation-drawer>

    <v-app-bar elevation="0" color="background" height="85" class="mx-auto">
        <v-app-bar-nav-icon v-if="!mdAndUp && checkRoute()" @click.stop="drawer=!drawer"
                            class="ml-1"></v-app-bar-nav-icon>
        <router-link to="/dashboard" class="mx-4"><img
            src="../assets/melody.png" height="30"></router-link>
        <v-divider v-if="mdAndUp || !checkRoute()" vertical length="50" class="border-opacity-50 mt-4"></v-divider>
        <v-btn v-if="mdAndUp || !checkRoute()" to="/marketplace" class="ml-2">Marketplace</v-btn>
        <v-btn v-if="mdAndUp || !checkRoute()" to="/create">Create</v-btn>
        <v-spacer v-if="mdAndUp"></v-spacer>
        <v-btn v-if="!checkRoute()" to="/login" variant="outlined">Log in</v-btn>
        <v-text-field
            v-if="checkRoute()"
            clearable
            class="pt-6 mx-auto"
            rounded="lg"
            bg-color="background"
            label="Search"
            prepend-inner-icon="mdi-magnify"
            variant="solo-filled"
            style="max-width: 300px;"
        ></v-text-field>
        <v-menu
            v-if="checkRoute()"
            v-model="wallet"
            :close-on-content-click="false"
            location="bottom"
        >
            <template v-slot:activator="{ props }">
                <v-btn prepend-icon="mdi-wallet"
                       v-bind="props"
                       height="56px"
                       class="ml-2"
                       rounded="lg"
                       elevation="2"
                       :style="{ background: $vuetify.theme.global.current.colors.navbtn}"
                >
                    <div v-if="mdAndUp">{{ balance.coin }} ETH</div>
                    <v-divider v-if="mdAndUp" vertical length="100" class="border-opacity-50 mx-2"></v-divider>
                    <div v-if="mdAndUp">{{ balance.usd }} USD</div>
                </v-btn>
            </template>

            <v-card min-width="300px" rounded="lg" class="mt-2" width="400px" min-height="100px">
                <v-list height="" class="" style="border: none">
                    <v-list-item class="">
                        <v-row>
                            <v-col cols="9">
                                <p>ID: {{ userID }}</p>
                            </v-col>
                            <v-col>
                                <p>{{balance.eth}} ETH</p>
                            </v-col>
                        </v-row>
                        <v-row class="mb-2">
                            <v-col>
                                <p><span class="usdtext font-weight-bold">${{ balance.usd }} </span></p>
                                <p class="mt-2 font-weight-light">Wallet balance</p>
                            </v-col>
                            <v-col>
                                <v-menu>

                                </v-menu>
                            </v-col>
                        </v-row>
                        <v-divider>

                        </v-divider>
                    </v-list-item>
                    <v-list-item height="280px" width="" class="d-flex justify-center">
                        <v-list-item class="d-flex justify-center">
                            <v-icon icon="mdi-wallet" size="50px"></v-icon>
                        </v-list-item>
                        <v-list-item class="d-flex justify-center">
                            <v-card-text class="font-weight-bold textSize">Fund your wallet to purchase NFTs
                            </v-card-text>
                        </v-list-item>
                        <v-list-item class="d-flex justify-center">
                            <Buy/>
                        </v-list-item>
                        <v-list-item class="d-flex justify-center">
                            <Deposit/>
                        </v-list-item>
                    </v-list-item>
                </v-list>
                <v-divider>
                </v-divider>
            </v-card>
        </v-menu>
<!--        cart features-->
        <v-dialog width="50%" min-width="470px" v-if="checkRoute()">
            <template v-slot:activator="{ props }">
                <v-btn v-bind="props" icon="mdi-cart" height="56px" width="56" class="ml-2 " rounded="lg" elevation="2"
                       :style="{ background: $vuetify.theme.global.current.colors.navbtn}">
                </v-btn>
            </template>

            <template v-slot:default="{ isActive }" style="position: absolute; bottom: 0;">
                <v-card title="Dialog" rounded="lg">
                    <v-card-text>
                        <Cart/>
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
            v-if="mdAndUp && checkRoute()"
        >
<!--            account icons-->
            <template v-slot:activator="{ props }">
                <v-btn icon="mdi-account"
                       v-bind="props"
                       height="56px"
                       width="56px"
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
                    <v-list-item to="/transaction" prepend-icon="mdi-history" title="Transactions"></v-list-item>
                    <v-switch
                        v-model="isDarkTheme"
                        hide-details
                        false-icon="mdi-white-balance-sunny"
                        true-icon="mdi-weather-night"
                        id="dark-mode-switch"
                        class="ml-2"
                    >
                        <template v-slot:label>
                            <span class="switchLabel">{{ isDarkTheme ? 'Dark Mode' : 'Light Mode' }}</span>
                        </template>
                    </v-switch>
                    <v-list-item to="/index" prepend-icon="mdi-logout" title="Logout" @click="handleLogout"></v-list-item>
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

.textSize {
    font-size: 16px;
}

.smallText {
    font-size: 14px;
}

.supersmalltext {
    font-size: 12px;
}

.usdtext {
    font-size: 30px;
    color: lightgreen;
}

.customLogo :deep(.v-btn--active) {
    background-color: transparent;
}

.vlistborder {
    border-bottom: 1px solid white;
}

.switchLabel {
    margin-left: 14px;
}
</style>

