<script setup lang="ts">
import {useRoute} from "vue-router";
import {h, onBeforeMount, ref} from "vue";
import nft from "../apis/marketplace/nft.ts";
import checkCookieExists from "../ultilities/checkCookieExists.ts";
import router from "../plugins/router.ts";
import {onMounted} from "vue";
import getWalletInfor from "../apis/wallet/getWalletInfor.ts";
import getOwnerNFTWID from "../apis/wallet/getOwnerNFTWID.ts";
import postTransactions from "../apis/transactions/postTransactions.ts";

const product = ref([]);
const route = useRoute()
const {id} = route.params;

// Get item id from previous page
let theNFT = ref([]);
let music_url = ref('');

import purchase from "../apis/purchase/purchase.ts";
import {toString} from "apexcharts";

let sellerWallet = ref([]);
let buyerWallet = ref([]);


onMounted(async () => {
    if (!checkCookieExists()) {
        await router.push('/login');
    } else {
        theNFT.value = await nft(id);
        buyerWallet.value = await getWalletInfor();


        product.value = theNFT.value[0];
        let owner_id = product.value.owner_id;
        console.log(product.value.price);
        sellerWallet = await getOwnerNFTWID(parseInt(owner_id));
        console.log(sellerWallet.data[0].wallet_address);

    }
})

async function handlePurchase() {
    // productId  =  id,
    // price  =  product.value.price,
    // name =  product.value.title,
    // author  =  product.value.author,
    let buyer = buyerWallet.value[0].wallet_address;
    console.log(typeof buyer);
    // seller =  sellerWallet.value[0].wallet_address
    console.log("productId:", id);
    console.log("price:", product.value.price);
    console.log("title:", product.value.title);
    console.log("author:", product.value.author);
    console.log("buyer address:", buyerWallet.value[0].wallet_address);
    console.log("seller address:", sellerWallet.data[0].wallet_address);
    const jsonInput: JSON = {
        "productId": id.toString(), // Assuming id is a variable containing the product ID
        "name": product.value.title.toString(), // Assuming product.value.title is the product title
        "author": product.value.author.toString(), // Assuming product.value.author is the author
        "price": product.value.price.toString(), // Assuming product.value.price is the price
        "buyer": buyer,
        "seller": sellerWallet.data[0].wallet_address // Assuming sellerWallet.data[0].wallet_address is the seller's wallet address
    };

    console.log(JSON.stringify(jsonInput))
    let hashCode = await purchase(JSON.stringify(jsonInput));
    let formData = new FormData();
    formData.append('seller_id', product.value.owner_id)
    formData.append('music_id', id);
    formData.append('hashCode', hashCode);

    let result = await postTransactions(formData);
    if (result) {
        alert('Purchase success');
    } else {
        alert('Purchase failed');
    }
    await router.push({path: '/dashboard'});
}

</script>

<template>
    <!--    Assign item's data for content in page, from product-->
    <v-main :style="{ background: $vuetify.theme.global.current.colors.background }">
        <v-container class="mb-16">
            <v-row>
                <v-col class="v-col-5">
                    <v-img :src="product.picture_url" height="100%" width="100%"
                           style="border-radius: 20px"></v-img>
                    <!--    Assign product image-->
                </v-col>
                <v-col class="v-col-7">
                    <v-card style="border-radius: 10px">

                        <v-card-text><h1>{{ product.title }}</h1><br> by <strong>{{ product.author }}</strong>
                        </v-card-text> <!--    Assign product name-->
                        <v-card-text>
                            <p>{{ product.description }}</p> <!-- Assign product description -->
                        </v-card-text>
                        <v-card-text>
                            <audio controls :src="music_url">
                                <source
                                    :src="music_url"
                                    type="audio/mpeg">
                                Your browser does not support the audio element.
                            </audio>
                        </v-card-text>
                        <br>
                        <v-card-item>
                            <v-row>
                                <v-col class="v-col-2"># 4,864</v-col>
                                <v-col class="v-col-2">10 views</v-col>
                                <v-col class="v-col-2">1 favorite</v-col>
                                <v-col class="v-col-2">PFPs</v-col>
                            </v-row>
                        </v-card-item>
                    </v-card>
                    <br>
                    <v-card style="border-radius: 10px">
                        <v-card-item>
                            <p>Current price </p>
                            <v-row>
                                <v-col class="v-col-auto align-self-end"><h1>{{ product.price }} ETH</h1>
                                    <p>${{ product.price * 2300 }}</p> <!--Assign product price-->
                                </v-col>
                            </v-row>
                            <v-row>
                                <v-col>
                                    <v-btn class="" style="width: 100%; background-color:#2081E2"
                                           @click="handlePurchase">Buy now
                                    </v-btn>
                                </v-col>
                            </v-row>
                        </v-card-item>
                    </v-card>
                </v-col>
            </v-row>
        </v-container>

    </v-main>
</template>

<style scoped>
#avatar {
    width: 80px;
    height: 80px;
    border-radius: 10px;
}

.upper-display {
    display: flex;
}

.upper-display div {
    margin-left: 1vh;
    margin-right: 1vh;
}
</style>