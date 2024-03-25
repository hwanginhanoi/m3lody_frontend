<script setup lang="ts">
import {ref, onMounted} from "vue";
import {ethers} from "ethers";
import postWallet from "../../apis/wallet/postWallet.ts";
import getWalletInfor from "../../apis/wallet/getWalletInfor.ts";
import updateTheWallet from "../../apis/wallet/updateWallet.ts";
import updateBalance from "../../apis/wallet/updateBalance.ts";

// Define reactive variables
let show = ref(false); // Boolean flag for controlling visibility
const form = ref({
    userPay: 0,         // Amount user wants to pay
    userReceive: 0,     // Amount user receives
    payCoin: 'USD',     // Currency user is paying with
    receiveCoin: 'ETH', // Currency user is receiving
});

let isMetaMaskInstalled = ref(false);
let provider = ref();
let userAccount = ref();
let walletInfo = ref();
let balance = ref();
let balance2 = ref();

onMounted(async () => {
    // Check if MetaMask is installed
    if (typeof window.ethereum !== 'undefined') {
        isMetaMaskInstalled.value = true;
        provider.value = new ethers.providers.Web3Provider(window.ethereum);
    }
    walletInfo.value = await getWalletInfor()
});
// Function to connect to MetaMask
async function connectMetaMask() {
    try {
        // await provider.value.ready;
        let account = await provider.value.send('eth_requestAccounts', []);
        balance.value = await provider.value.send('eth_getBalance', [account[0]]);
        balance2.value = ethers.utils.formatEther(balance.value);
        userAccount.value = account[0];
        alert('Connected to MetaMask ' + account[0]);
        console.log(userAccount.value);
        console.log(balance2);
    } catch (error) {
        console.error(error);
        alert('Failed to connect to MetaMask');
    }
}
// Function to update wallet
async function updateWallet() {
    let formdata = new FormData();
    let formdata2 = new FormData();
    formdata.append('wallet_address', userAccount.value);
    formdata2.append('balance', balance.value);
    console.log(userAccount.value);
    if (walletInfo.value < 1){
        let result = await postWallet(formdata);
        await updateBalance(formdata2);
        if (result) {
            alert('Wallet added successfully');
            window.location.reload();
        }else{
            alert('Failed to add wallet');
        }
    }else{
        let result = await updateTheWallet(formdata);
        await updateBalance(formdata2);
        if (result) {
            alert('Wallet updated successfully');
            window.location.reload();
        }else{
            alert('Failed to update wallet');
        }
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
                        <!-- MetaMask connection -->
                        <div v-if="!isMetaMaskInstalled">
                            <p>Please install Metamask to continue</p>
                        </div>
                        <div v-else>
                            <p>MetaMask đã được cài đặt.</p>
                            <v-btn width="100%" class="bg-green" @click="async () => {await connectMetaMask(); await updateWallet();}">Kết nối MetaMask</v-btn>
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