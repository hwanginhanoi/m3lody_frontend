<script setup lang="ts">
const cryptoList = [
    {name: 'Bitcoin', symbol: 'BTC', price: '$45000'},
    {name: 'Ethereum', symbol: 'ETH', price: '$3000'},
    {name: 'Bitcoin', symbol: 'BTC', price: '$45000'},
    {name: 'Ethereum', symbol: 'ETH', price: '$3000'},
    {name: 'Bitcoin', symbol: 'BTC', price: '$45000'},
    {name: 'Ethereum', symbol: 'ETH', price: '$3000'},
    {name: 'Bitcoin', symbol: 'BTC', price: '$45000'},
    {name: 'Ethereum', symbol: 'ETH', price: '$3000'},
    {name: 'Bitcoin', symbol: 'BTC', price: '$45000'},
    {name: 'Ethereum', symbol: 'ETH', price: '$3000'},
    {name: 'Bitcoin', symbol: 'BTC', price: '$45000'},
    {name: 'Ethereum', symbol: 'ETH', price: '$3000'},
    {name: 'Bitcoin', symbol: 'BTC', price: '$45000'},
    {name: 'Ethereum', symbol: 'ETH', price: '$3000'},
    {name: 'Bitcoin', symbol: 'BTC', price: '$45000'},
    {name: 'Ethereum', symbol: 'ETH', price: '$3000'},
    {name: 'Bitcoin', symbol: 'BTC', price: '$45000'},
    {name: 'Ethereum', symbol: 'ETH', price: '$3000'},
];

function calculateChange(price, percentageChange) {
    const currentPrice = parseFloat(price.replace('$', '').replace(',', ''));
    const changeAmount = (currentPrice * percentageChange) / 100;
    const changedPrice = currentPrice + changeAmount;
    return `$${changedPrice.toFixed(2)}`;
}

function calculateMarketValue(price) {
    const currentPrice = parseFloat(price.replace('$', '').replace(',', ''));
    const businessRatio = 10;
    const marketValue = currentPrice * businessRatio;
    return `$${marketValue.toFixed(2)}`;
}
</script>

<template>
    <v-main :style="{ background: $vuetify.theme.global.current.colors.background }">
    <v-container id="app" >
        <v-card class="w-100" color="background">
        <h1>Crypto Watch List</h1>


        <div class="table-container">
            <table>
                <thead>
                <tr>
                    <th>Name</th>
                    <th>Symbol</th>
                    <th>Price</th>
                    <th>7H</th>
                    <th>Market</th>
                </tr>
                </thead>
                <tbody>
                <tr v-for="(coin, index) in cryptoList" :key="index">
                    <td>{{ coin.name }}</td>
                    <td>{{ coin.symbol }}</td>
                    <td>{{ coin.price }}</td>
                    <td>{{ calculateChange(coin.price, 7) }}</td>
                    <td>{{ calculateMarketValue(coin.price) }}</td>
                </tr>
                </tbody>
            </table>
        </div>
</v-card>
    </v-container>

        </v-main>
</template>

<style scoped>
#app {
    text-align: center;
    color: #ffffff;
    margin-top: 60px;
}

h1 {
    font-size: 2em;
    margin-bottom: 20px;
}

.table-container {
    width: 80%;
    margin: 20px auto;
    overflow-x: auto;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

table {
    width: 100%;
    border-collapse: collapse;
}

thead th,
tbody td {
    padding: 12px;
    text-align: left;
    border-bottom: 1px solid #ddd;
}

tbody tr:hover {
    background-color: #f5f5f5;
    color: black;
}
</style>