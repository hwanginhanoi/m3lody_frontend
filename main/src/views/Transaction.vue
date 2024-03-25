<script setup lang="ts">
// Sample data set
import getTransactions from "../apis/transactions/getTransactions.ts";
import { ref } from "vue";
import { onMounted } from "vue";
import checkCookieExists from "../ultilities/checkCookieExists.ts";
import router from "../plugins/router.ts";
import check from "../apis/check/check.ts";
// Fetch data from API
let items = ref([]);
let checkResult = ref();
onMounted(async () => {
    // Fetch users data
    if (checkCookieExists()){
        items.value = await getTransactions();
    }
    else {
        await router.push('/login');
    }
    // Update the users array with fetched data
});

// adding transacion history data
// const items = [
//     {
//         Name: "BOT",
//         ItemID: "33",
//         Price: "$42,298.37 ",
//         From: "0xf18A...6e4f",
//         To: "0x2Fec...Fx4",
//         Date: "30/1/2024, 14:55:10 PM",
//     },
//     {
//         Name: "Ether",
//         ItemID: "22",
//         Price: "$313,42 ",
//         From: "0xf18A...d34f",
//         To: "0x2Fec...Fx4",
//         Date: "30/1/2024, 14:33:10 PM",
//     },
//     {
//         Name: "VN",
//         ItemID: "01",
//         Price: "$21,22",
//         From: "0x9F8A...6x7f",
//         To: "0x2FiF...Fx4E",
//         Date: "29/1/2024, 14:33:10 PM",
//     },
//     {
//         Name: "EUR",
//         ItemID: "27",
//         Price: "$33,123 ",
//         From: "0xf9A...6E4f",
//         To: "0x2FEc...Fx4",
//         Date: "29/1/2024, 11:35:10 AM",
//     },
//     {
//         Name: "WS3",
//         ItemID: "12",
//         Price: "$132,32",
//         From: "0xf78A...6xO4",
//         To: "0x2F4c...F38X",
//         Date: "28/1/2024, 8:33:10 AM",
//     },
//     {
//         Name: "EXE",
//         ItemID: "21",
//         Price: "$21 ",
//         From: "0xf28A...6dif",
//         To: "0X73ec...Fx4E",
//         Date: "28/1/2024, 7:21:10 AM",
//     },
// ];
// Table header config
let header: Array<Object> = [
    {title: 'NFT_ID', key: 'id', align: 'center'},
    {title: 'Transaction Hash', key: 'price', align: 'center'},
    {title: 'From', key: 'from', align: 'center'},
    {title: 'To', key: 'to', align: 'center'},
    {title: 'Date', key: 'date', align: 'center'},
]

async function handleCheck(token_id:any, music_id:any){
    checkResult.value = await check(token_id, music_id);
    console.log('hello')
}
</script>
<template>
    <v-main :style="{ background: $vuetify.theme.global.current.colors.background}" class="">
        <v-container class="mb-16" style="padding-right: 2em; max-width: 95vw">
            <h1 style="text-align: center">Transaction</h1>
            <!-- Data table defined from items data set -->
            <v-data-table
                :headers="header"
                :items="items"
                :items-per-page="5"
                class="elevation-1"
                :fixed-header="true"
                :hide-default-footer="true"
            >
                <!-- Define data for each column match with date attr-->
                <template v-slot:item.id="{item}">
                    {{ item.music_id }}
                </template>
                <template v-slot:item.price="{ item }">
                    {{ item.token_id }}
                    <v-btn @click="()=>{handleCheck(item.token_id, item.music_id)}">view</v-btn>
                </template>
                <template v-slot:item.from="{ item }">
                    {{ item.buyer_id }}
                </template>
                <template v-slot:item.to="{ item }">
                    {{ item.seller_id }}
                </template>
                <template v-slot:item.date="{ item }">
                    {{ item.transaction_date }}
                </template>
            </v-data-table>
            <v-card>
                <div class="mb-2" style="text-align: center;">
                    {{ checkResult }}
                </div>
            </v-card>

        </v-container>
    </v-main>
</template>
