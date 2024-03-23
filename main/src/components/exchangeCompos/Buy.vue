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
                   height="35px">Add wallet
            </v-btn>
        </template>

        <template v-slot:default="{ isActive }" style="position: absolute; bottom: 0;">
            <v-card title="Add wallet" rounded="lg">
                <v-card-text class="">
                    <v-card class="" style="max-width: 600px; margin: auto;">
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
                                    placeholder="Your address"
                                    v-model="form.userPay"
                                    type="text"
                                    @change="payToCoin"
                                    rounded="lg"
                                    variant="plain"
                                    color="#d777ed"
                                >
                                </v-text-field>
                            </v-col>
                        </v-row>
                        <!--                        confirmation cards-->
                        <v-card width="100%" style="border-radius: 11px" class=" mt-3 pa-3"
                                :style="{ background: $vuetify.theme.global.current.colors.navbtn}">
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