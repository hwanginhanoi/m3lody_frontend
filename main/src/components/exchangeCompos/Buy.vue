<script setup lang="ts">
import {ref, onMounted} from "vue";
import {ethers} from "ethers";

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

let isMetaMaskInstalled = ref(false);
let provider = ref();
let defAccount = ref('');
let userBalance = ref(0);

onMounted(() => {
    // Check if MetaMask is installed
    if (typeof window.ethereum !== 'undefined') {
        isMetaMaskInstalled.value = true;
        provider.value = new ethers.providers.Web3Provider(window.ethereum);
    }
});

// async function accountHandler (newAccount) {
//     const address = await newAccount.getAddress();
//     defAccount.value = address;
//     const balance = await newAccount.getBalance()
//     userBalance.value = ethers.utils.formatEther(balance);
//     await getuserBalance(address)
// }
//
// async function getuserBalance(address) {
//     const balance = await provider.value.getBalance(address, "latest");
// }

// Function to connect to MetaMask
async function connectMetaMask() {
    try {
        // await provider.value.ready;
        let account = await provider.value.send('eth_requestAccounts', []);
        alert('Connected to MetaMask ' + account[0]);
    } catch (error) {
        console.error(error);
        alert('Failed to connect to MetaMask');
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
                        <div v-if="!isMetaMaskInstalled">
                            <p>Please install Metamask to continue</p>
                        </div>
                        <div v-else>
                            <p>MetaMask đã được cài đặt.</p>
                            <v-btn width="100%" class="bg-green" @click="connectMetaMask">Kết nối MetaMask</v-btn>
                        </div>
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