<script setup lang="ts">
import {ref} from "vue";

let userPay = ref(100);

let userTransfer = ref(100);

let show = ref(false);
let userID = ref("111000202030-69");
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
    <v-dialog width="35%" min-width="450px">
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
                            <v-col class="text-left pl-5" cols="" >
                                <v-text-field
                                    placeholder="Amount"
                                    type="text"
                                    clearable
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
                                    model-value="USD"
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
                            <v-col class="text-left pl-5" cols="11">
                                <v-text-field
                                    placeholder="Target Wallet(ID)"
                                    type="text"
                                    clearable
                                    rounded="lg"
                                    variant="plain"
                                    color="#d777ed"

                                >
                                </v-text-field>
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
                            <v-col class="d-flex justify-center align-center" cols="7">
                                <p>Select Network:</p>
                            </v-col>
                            <v-col class="text-left pl-5" cols="4">
                                <v-select
                                    chips
                                    variant="plain"
                                    model-value="None"
                                    :items="['---', 'tsc']"
                                    :style="{}"
                                    class=""
                                    hide-details
                                ></v-select>
                            </v-col>
                        </v-row>
                        <v-card width="100%"  class=" mt-3 pa-3" :style="{ background: $vuetify.theme.global.current.colors.navbtn}">
                            <v-row class="font-weight-light">
                                <v-col cols="10" class="d-flex align-center" >
                                    <p class="smallText">You transfer <span class="font-weight-bold">{{userTransfer}} HickCoin</span> to user with <span class="font-weight-bold">ID: {{userID}}</span></p>
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
                                            <v-row >
                                                <v-col cols="8" class="pa-2">
                                                    <p><span class="font-weight-bold">0,1286 HickCoin</span>@2.333,20 US$</p>
                                                </v-col>
                                                <v-col class="text-right pa-2" >
                                                    <p class="font-weight-bold">100,00 US$</p>
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
                                                    <p>as low as <span class="font-weight-bold">2,10 US$</span> </p>
                                                </v-col>
                                            </v-row>

                                        </v-card-text>
                                    </div>
                                </v-expand-transition>
                            </v-row>
                            <v-row>
                                <v-col cols="12">
                                    <v-btn width="100%" class="bg-green">Confirm</v-btn>
                                </v-col>
                                <v-col><p class="text-center supersmalltext">By continuing you agree to our <span class="font-weight-bold">cookie policy</span></p></v-col>
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