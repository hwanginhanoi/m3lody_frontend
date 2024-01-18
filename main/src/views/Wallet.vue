<script setup lang="ts">
    import {computed, ref} from "vue";

    import VueApexCharts from "vue3-apexcharts";
    import {useTheme} from "vuetify";

    let balance: number = 83189.44
    let prev_balance: number = 90000
    let balance_dif = balance - prev_balance
    let str_balance_dif = ""
    if (balance_dif < 0) {
        str_balance_dif = "-$" + Math.abs(parseFloat(balance_dif.toFixed(2)))
    } else {
        str_balance_dif = "$" + Math.abs(parseFloat(balance_dif.toFixed(2)))
    }

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


    const vuetifyTheme = useTheme()

    const currentTheme = computed(() => vuetifyTheme.current.value.colors)

    const series = [{
        name: 'Tether',
        data: [44]
    }, {
        name: 'BTC',
        data: [53]
    }, {
        name: 'Doge Coin',
        data: [12]
    }]

    const chartOptions = computed(() => {

        return {
            chart: {
                type: 'bar',
                height: '10%',
                width: '10px',
                stacked: true,
                stackType: '100%',
                toolbar: {
                    show: false,
                },

            },

            plotOptions: {
                bar: {
                    horizontal: true,
                    columnWidth: '10%'
                },
            },
            grid: {
                xaxis: {
                    lines: {show: false,}
                },
                borderColor: '#0D0D0D',
            },
            stroke: {
                width: 3,
                colors: ['#000000']
            },
            title: {
                text: 'Crypto You Own'
            },
            xaxis: {

                labels: {
                    show: false,
                },
                axisBorder: {
                    show: false,
                },
                axisTicks: {
                    show: false,
                },

            },
            yaxis: {
                labels: {
                    show: false,
                },
                axisBorder: {
                    show: false,
                }
            },
            tooltip: {
                enable: false,
            },

            fill: {
                opacity: 1

            },
            legend: {
                position: 'top',
                horizontalAlign: 'left',
                offsetX: 0
            }
        }
    })


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
    <v-main width="200"
            :style="{background: $vuetify.theme.global.current.colors.background}">
        <p class="current_balance">Current balance
            <v-icon icon="mdi-eye"></v-icon>
        </p>

        <p class="balance">
            ${{ balance }}

        </p>

        <p :class="{ 'red-text': balance_dif < 0, 'green-text': balance_dif > 0 }">
            {{ str_balance_dif }} ({{ balance_dif_percentage }})
        </p>

        <VueApexCharts
            :options="chartOptions"
            :series="series"
            :height="130"
            style="width: 97%"
            class="my-1"

        />
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

<script setup lang="ts">

</script>
<style>
.current_balance {
    font-family: Lufga;
    font-size: 12px;
    font-style: italic;
    font-weight: 300;
    line-height: normal;
    padding-left: 30px;
}

.balance {
    font-family: Lufga, serif;
    font-size: 28px;
    font-style: normal;
    font-weight: 500;
    line-height: 38px;
    padding-left: 30px;
}

.red-text {
    color: red;
    padding-left: 30px;
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

.v-main {
    min-height: 300px;
}

</style>
