<script setup lang="ts">
import {ref} from "vue";

let show = ref(false);
const form = ref({
    eth: null,
    usd: null,
    depositCoin: 'ETH',
    depositedFromCoin: 'USD',
})

function convertUsdToEth(amount) {
    return amount / 20;
}

function convertEthToUsd(amount) {
    return amount * 20;
}

function convertUsdToETHFunc(){
    if (form.value.depositedFromCoin === 'USD'){
        form.value.eth = (parseInt(form.value.usd) / 20).toString();
    }
}

function convertETHToUSDFunc(){
        if (form.value.depositCoin === 'ETH')
        form.value.usd = (+form.value.eth * 20).toString();
}
</script>

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

.smallText{
    font-size: 14px;
}

.supersmalltext{
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
</style>

<template>
    <v-dialog width="25%" min-width="450px">
        <template v-slot:activator="{ props }">
            <v-btn v-bind="props" prepend-icon="mdi-arrow-down" class="bg-purple" width="200px" height="35px">Deposit
            </v-btn>
        </template>

        <template v-slot:default="{ isActive }" style="position: absolute; bottom: 0;">
            <v-card title="Deposit" rounded="lg">
                <v-card-text class="">
                    <v-card class="" style="max-width: 600px; margin: auto;" flat>
                        <v-row>
                            <v-col class="text-left">
                                Spend
                            </v-col>
                            <v-col class="text-right">
                                Cash balance
                            </v-col>
                        </v-row>
                        <v-row no-gutters
                               class="mt-3"
                               style="height: 60px;
                                      border-radius: 11px;
                                      overflow: hidden; "
                               :style="{ background: $vuetify.theme.global.current.colors.navbtn}"
                        >
                            <v-col class="text-left pl-5" cols="">
                                <v-text-field
                                    placeholder="You deposit"
                                    v-model="form.eth"
                                    type="number"
                                    @change="convertETHToUSDFunc"
                                    rounded="lg"
                                    variant="plain"
                                    color="#d777ed"
                                >
                                </v-text-field>
                            </v-col>
                            <v-col cols="" class="pl-10">
                                <v-select
                                    chips
                                    variant="flat"
                                    v-model="form.depositCoin"
                                    :items="['ETH']"
                                    style="display: flex; justify-content: end;"
                                    class=""
                                    hide-details
                                ></v-select>
                            </v-col>
                        </v-row>
                        <v-row no-gutters
                               class="mt-3"
                               style="height: 60px;
                                                       background: #242627;
                                                       border-radius: 11px;
                                                       overflow: hidden; "
                               :style="{ background: $vuetify.theme.global.current.colors.navbtn}"
                        >
                            <v-col class="text-left pl-5" cols="">
                                <v-text-field
                                    placeholder="You get"
                                    type="number"
                                    v-model="form.usd"
                                    @change="convertUsdToETHFunc"
                                    rounded="lg"
                                    variant="plain"
                                    color="#d777ed"

                                >
                                </v-text-field>
                            </v-col>
                            <v-col cols="" class="pl-10">
                                <v-select
                                    chips
                                    variant="flat"
                                    v-model="form.depositedFromCoin"
                                    style="display: flex; justify-content: end;"
                                    :items="['USD']"
                                    hide-details


                                ></v-select>
                            </v-col>
                        </v-row>
                        <v-card width="100%" style="border-radius: 11px" class=" mt-3 pa-3"
                                :style="{ background: $vuetify.theme.global.current.colors.navbtn}">
                            <v-row class="font-weight-light">
                                <v-col cols="10" class="d-flex align-center">
                                    <p class="smallText">You get <span
                                        class="font-weight-bold">{{ form.usd? convertEthToUsd(convertUsdToEth((parseInt(form.usd) - 1.48 - 2.10).toFixed(2))):'...' }} {{form.depositedFromCoin}}</span> for <span
                                        class="font-weight-bold">{{ form.eth? convertUsdToEth((parseInt(form.usd) - 1.48 - 2.10).toFixed(2)): '...' }} {{form.depositCoin}}</span></p>
                                </v-col>
                                <v-col class="d-flex justify-end">
                                    <v-btn
                                        :icon="show ? 'mdi-chevron-up' : 'mdi-chevron-down'"
                                        @click="show = !show"
                                        width="30px"
                                        height="30px"
                                    ></v-btn>
                                </v-col>
                            </v-row>
                            <v-row>
                                <v-expand-transition class="w-100">
                                    <div v-show="show">
                                        <v-divider :thickness="4"></v-divider>

                                        <v-card-text>
                                            <v-row>
                                                <v-col cols="8" class="pa-2">
                                                    <p><span class="font-weight-bold">{{form.usd}} {{form.depositedFromCoin}}</span>@2.333,20
                                                        US$</p>
                                                </v-col>
                                                <v-col class="text-right pa-2">
                                                    <p class="font-weight-bold">Total: {{ convertUsdToEth((parseInt(form.usd) - 1.48 - 2.10).toFixed(2)) }} {{form.depositCoin}}</p>
                                                </v-col>

                                            </v-row>
                                            <v-row>
                                                <v-col cols="7" class="pa-2">
                                                    <p><span class="font-weight-bold">Network fee</span></p>
                                                </v-col>
                                                <v-col class=" text-right pa-2">
                                                    <p class="font-weight-bold">{{ convertUsdToEth(1.48) }} {{form.depositCoin}}</p>
                                                </v-col>
                                            </v-row>
                                            <v-row>
                                                <v-col cols="6" class="pa-2">
                                                    <p><span class="font-weight-bold">Processing fee</span></p>
                                                </v-col>
                                                <v-col class="text-right pa-2">
                                                    <p>as low as <span class="font-weight-bold">{{ convertUsdToEth(2.1).toFixed(2) }} {{form.depositCoin}}</span></p>
                                                </v-col>
                                            </v-row>

                                        </v-card-text>
                                    </div>
                                </v-expand-transition>
                            </v-row>
                            <v-row>
                                <v-col cols="12">
                                    <v-btn width="100%"
                                           style="border-radius: 11px"
                                           class="bg-green"
                                           @click="isActive.value = false"
                                    >Confirm

                                    </v-btn>
                                </v-col>
                                <v-col><p class="text-center supersmalltext">By continuing you agree to our <span
                                    class="font-weight-bold">cookie policy</span></p></v-col>
                            </v-row>

                        </v-card>
                    </v-card>
                </v-card-text>
                <v-card-text>
                </v-card-text>

                <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn
                        text="Cancel"
                        @click="isActive.value = false"
                    ></v-btn>
                </v-card-actions>
            </v-card>
        </template>
    </v-dialog>
</template>