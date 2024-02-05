<script setup lang="ts">
import {ref} from "vue";

// Define reactive variables
let show = ref(false); // Boolean flag for controlling visibility
const form = ref({
    userPay: 0,         // Amount user wants to pay
    userReceive: 0,     // Amount user receives
    payCoin: 'USD',     // Currency user is paying with
    receiveCoin: 'ETH', // Currency user is receiving
});

// Function to calculate amount when paying in USD
function payToCoin() {
    // If user is receiving ETH
    if (form.value.receiveCoin === 'ETH') {
        // Calculate amount of ETH user receives based on amount paid in USD
        form.value.userReceive = +(form.value.userPay) * 20;
    }
}

// Function to calculate amount when paying in ETH
function coinToPay() {
    // If user is receiving ETH
    if (form.value.receiveCoin === 'ETH') {
        // Calculate amount of USD user needs to pay based on amount of ETH received
        form.value.userPay = form.value.userReceive / 20;
    }
}
</script>

<template>
    <v-dialog width="25%" min-width="450px">
        <template v-slot:activator="{ props }">
            <!-- buttons for buy-->
            <v-btn v-bind="props" prepend-icon="mdi-plus" class="bg-green" width="200px"
                   height="35px">Buy
            </v-btn>
        </template>

        <template v-slot:default="{ isActive }" style="position: absolute; bottom: 0;">
            <v-card title="Buy" rounded="lg">
                <v-card-text class="">
                    <v-card class="" style="max-width: 600px; margin: auto;">
                        <v-row>
                            <v-col class="text-left">
                                Spend
                            </v-col>
                            <v-col class="text-right">
                                Cash balance
                            </v-col>
                        </v-row>
                        <!--                        inputs field-->
                        <v-row no-gutters
                               class="mt-3"
                               style="height: 60px;
                                      border-radius: 11px;
                                      overflow: hidden; "
                               :style="{ background: $vuetify.theme.global.current.colors.navbtn}"
                        >
                            <v-col class="text-left pl-5" cols="">
                                <v-text-field
                                    placeholder="You pay"
                                    v-model="form.userPay"
                                    type="number"
                                    @change="payToCoin"
                                    rounded="lg"
                                    variant="plain"
                                    color="#d777ed"
                                >
                                </v-text-field>
                            </v-col>
                            <v-col cols="" class="pl-10">
                                <v-select
                                    chips
                                    variant="plain"
                                    v-model="form.payCoin"
                                    :items="['USD']"
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
                                    placeholder="You receive"
                                    type="number"
                                    v-model="form.userReceive"
                                    @change="coinToPay"
                                    rounded="lg"
                                    variant="plain"
                                    color="#d777ed"

                                >
                                </v-text-field>
                            </v-col>
                            <v-col cols="" class="pl-10">
                                <v-select
                                    chips
                                    variant="plain"
                                    v-model="form.receiveCoin"
                                    style="display: flex; justify-content: end;"
                                    :items="['ETH']"
                                    hide-details


                                ></v-select>
                            </v-col>
                        </v-row>
                        <!--                        confirmation cards-->
                        <v-card width="100%" style="border-radius: 11px" class=" mt-3 pa-3"
                                :style="{ background: $vuetify.theme.global.current.colors.navbtn}">
                            <v-row class="font-weight-light">
                                <v-col cols="10" class="d-flex align-center">
                                    <p class="smallText">You get <span
                                        class="font-weight-bold">{{
                                            form.userReceive ? form.userReceive : '...'
                                        }} {{ form.receiveCoin }}</span> for <span
                                        class="font-weight-bold">{{
                                            form.userPay ? form.userPay : '...'
                                        }} {{ form.payCoin }}</span></p>
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
                                                    <p><span
                                                        class="font-weight-bold">{{ ((+form.userPay - 1.48 - 2.10) * 20).toFixed(2) }} {{ form.receiveCoin }}</span>@2.333,20
                                                        US$</p>
                                                </v-col>
                                                <v-col class="text-right pa-2">
                                                    <p class="font-weight-bold">Total:
                                                        {{ ((+form.userPay - 1.48 - 2.10).toFixed(2)) }} US$</p>
                                                </v-col>

                                            </v-row>
                                            <v-row>
                                                <v-col cols="7" class="pa-2">
                                                    <p><span class="font-weight-bold">Network fee</span></p>
                                                </v-col>
                                                <v-col class=" text-right pa-2">
                                                    <p class="font-weight-bold">1,48 US$</p>
                                                </v-col>
                                            </v-row>
                                            <v-row>
                                                <v-col cols="6" class="pa-2">
                                                    <p><span class="font-weight-bold">Processing fee</span></p>
                                                </v-col>
                                                <v-col class="text-right pa-2">
                                                    <p>as low as <span class="font-weight-bold">2,10 US$</span></p>
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


.textSize {
    font-size: 16px;
}

.smallText {
    font-size: 14px;
}

.supersmalltext {
    font-size: 12px;
}

.customLogo :deep(.v-btn--active) {
    background-color: transparent;
}
</style>