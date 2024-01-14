<script setup lang="ts">

import {ref} from "vue";

let balance: number = 83189.44
let prev_balance: number = 90000
let balance_dif = balance - prev_balance
let balance_dif_percentage = (((balance - prev_balance) / prev_balance) * 100).toFixed(2)

const crypto_currency = ref([
    {
        abbr: 'ETH',
        asset: 'Ethereum',
        price: 159,
        balance: 332,
    },
    {
        abbr: 'BTC',
        asset: 'Bitcoin',
        price: 237,
        balance: 332,
    },
    {
        abbr: 'XRP',
        asset: 'Ripple',
        price: 237,
        balance: 332,
    },
    {
        abbr: 'USDT',
        asset: 'Tether',
        price: 237,
        balance: 332,
    },
])

function Icon(abbr: string) {
    switch (abbr.toLowerCase()) {
        case 'eth':
            return 'src/assets/cryptocurrency/eth.svg';
        case 'btc':
            return 'src/assets/cryptocurrency/btc.svg';
        case 'xrp':
            return 'src/assets/cryptocurrency/xrp.svg';
        case 'usdt':
            return 'src/assets/cryptocurrency/usdt.svg';
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
                :key="item.abbr"
            >
                <td>
                    <v-img :src="Icon(item.abbr)" alt="Crypto Icon" style="width: 22px; height: 24px;">
                    </v-img>
                </td>
                <td>{{ item.asset }} <span class="abbr">{{ item.abbr }}</span></td>
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
    width: 800px;
    margin: auto;
}

.abbr {
    color: #A1A1A1;
    font-family: Lufga, serif;
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    margin-left: 1px;
}

</style>