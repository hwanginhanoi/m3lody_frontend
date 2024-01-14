<script setup lang="ts">

import {ref} from "vue";

let balance: number = 83189.44
let prev_balance: number = 90000
let balance_dif = balance - prev_balance
let balance_dif_percentage = (((balance - prev_balance) / prev_balance) * 100).toFixed(2)

const crypto_currency = ref([
    {
        asset: 'Etherium',
        price: 159,
        balance: 332,
    },
    {
        asset: 'Bitcoin',
        price: 237,
        balance: 332,
    },
    {
        asset: 'Ripple',
        price: 237,
        balance: 332,
    },
])

function Icon(asset: string) {
    switch (asset.toLowerCase()) {
        case 'etherium':
            return 'src/assets/cryptocurrency/eth.svg';
        case 'bitcoin':
            return 'src/assets/cryptocurrency/btc.svg';
        case 'ripple':
            return 'src/assets/cryptocurrency/xrp.svg';
    }
}
</script>

<template>
    <v-main class="" style="min-height: 300px;">
        <p class="current_balance">Current balance
            <v-icon icon="mdi-eye"></v-icon>
        </p>

        <p class="balance">
            ${{ balance }}
        </p>

        <p :class="{ 'red-text': balance_dif < 0, 'green-text': balance_dif > 0 }">
            {{ balance_dif }} ({{balance_dif_percentage}})
        </p>

        <v-table class="table">
            <thead>
            <tr>
                <th></th>
                <th class="text-left">
                    Asset
                </th>
                <th class="text-left">
                    Price
                </th>
                <th class="text-left">
                    Balance
                </th>
            </tr>
            </thead>
            <tbody>

            <tr
                v-for="item in crypto_currency"
                :key="item.asset"
            >
                <td>
                    <v-img :src="Icon(item.asset)" alt="Crypto Icon" style="width: 22px; height: 24px;">
                    </v-img>
                </td>
                <td>{{ item.asset }}</td>
                <td>{{ item.price }}</td>
                <td>{{ item.balance }}</td>
            </tr>
            </tbody>
        </v-table>
    </v-main>
</template>

<style>
.v-main {
    background: #0D0D0D
}

.current_balance {
    font-family: Lufga;
    font-size: 12px;
    font-style: italic;
    font-weight: 300;
    line-height: normal;
}

.balance {
    font-family: Lufga, serif;
    font-size: 28px;
    font-style: normal;
    font-weight: 500;
    line-height: 38px;
    letter-spacing: 0.42px;
}

.red-text {
    color: red;
}

.green-text {
    color: green;
}

.table {
    width: 400px;
    margin: auto;
}

</style>