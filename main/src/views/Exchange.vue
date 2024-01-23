<script setup lang="ts">
import {ref} from "vue";
import {it} from "vuetify/locale";

const tab = ref(1);

const balance = ref(
    [
        {
            asset: "ETH",
            balance: 23,
        },
        {
            asset: "BTC",
            balance: 33,
        }
    ]
);

const items = ['USDT', 'BTC', 'ETH'];
const logo = ["src/assets/cryptocurrency/eth.svg","src/assets/cryptocurrency/eth.usdt","src/assets/cryptocurrency/eth.btc"];

const itemsWithIcons = items.map((item, index) => ({
    text: item,
    icon: logo[index]
}));
</script>

<template>
    <v-main :style="{ background: $vuetify.theme.global.current.colors.background }">
        <v-img><slot name="image"></slot></v-img>
        <v-tabs
            v-model="tab"
            color="deep-purple-accent-4"
            align-tabs="center"
        >
            <v-tab :value="1">Buy</v-tab>
            <v-tab :value="2">Sell</v-tab>
            <v-tab :value="3">Trade</v-tab>
        </v-tabs>
        <v-window v-model="tab">
            <v-window-item :value="1" align="center" class="space">
                <v-card class="ma-5" style="max-width: 600px; margin: auto">
                    <v-row style="align-content: center" height="25vh">
                        <v-col class="d-flex justify-center pl-10 pr-10 pt-15">
                            <v-text-field class=" w-75 ma-2" variant="outlined" label="Spend">

                            </v-text-field>
                            <v-select
                                variant="outline"
                                class="w-25 ma-2"
                                :items = "['name','hello']"

                            >

                                <template v-for="item in itemsWithIcons" :key="item.logo">
                                    <v-list>
                                        <v-list-item>


                                                <v-list-item-title v-text="item.text"></v-list-item-title>

                                        </v-list-item>
                                    </v-list>
                                </template>


                            </v-select>
                        </v-col>
                    </v-row>
                    <v-row style="align-content: center" height="25vh">
                        <v-col class="d-flex justify-center pb-10 pl-10 pr-10">
                            <v-text-field class=" w-75 ma-2" label="Receive" variant="outlined"></v-text-field>
                            <v-select
                                variant="outlined"
                                :items="['USDT', 'BTC', 'ETH' ]"
                                class="w-25 ma-2"
                            ></v-select>
                        </v-col>
                    </v-row>
                </v-card>
            </v-window-item>


            <v-window-item :value="2" align="center">
                <v-card class="ma-5" style="max-width: 600px; margin: auto">
                    <v-row style="align-content: center" height="25vh">
                        <v-col class="d-flex v-col-7 align-center justify-center">
                            <v-label>From currency</v-label>
                        </v-col>
                        <v-col class="d-flex v-col-3 align-center justify-center" style="margin-top: 10px">
                            <v-select
                                variant="outlined"
                                :items="['ETH', 'BTC', 'USDT' ]"
                            ></v-select>
                        </v-col>
                    </v-row>
                    <v-row style="align-content: center">
                        <v-col class="d-flex v-col-7 align-center justify-center">
                            <v-label>Amount</v-label>
                        </v-col>
                        <v-col class="d-flex v-col-3 align-center justify-center">
                            <v-text-field></v-text-field>
                        </v-col>
                    </v-row>
                    <v-row style="align-content: center">
                        <v-col class="d-flex v-col-7 align-center justify-center">
                            <v-label>To currency</v-label>
                        </v-col>
                        <v-col class="d-flex v-col-3 align-center justify-center" style="margin-top: 10px">
                            <v-select
                                variant="outlined"
                                :items="['EUR', 'USD', 'VND' ]"
                            ></v-select>
                        </v-col>
                    </v-row>
                    <v-row style="align-content: center">
                        <v-col class="d-flex v-col-7 align-center justify-center">
                            <v-label>Amount</v-label>
                        </v-col>
                        <v-col class="d-flex v-col-3 align-center justify-center">
                            <v-text-field></v-text-field>
                        </v-col>
                    </v-row>


                </v-card>
            </v-window-item>


            <v-window-item :value="3" align="center">
                <v-card class="ma-5" style="max-width: 600px; margin: auto">
                    <v-card class="ma-5" style="max-width: 600px; margin: auto">
                        <v-row style="align-content: center" height="25vh">
                            <v-col class="d-flex justify-center pa-5">
                                <v-text-field
                                    class=" w-75 ma-2"
                                    label="Spend"
                                    type="text"
                                    clearable=""
                                    rounded
                                    variant="outlined"
                                    color="#d777ed"
                                ></v-text-field>
                                <v-select
                                    variant="outlined"
                                    color="#d777ed"
                                    :items="['ETH', 'BTC', 'USDT' ]"
                                    class="w-25 ma-2"
                                ></v-select>
                            </v-col>
                        </v-row>
                        <v-row style="align-content: center" height="25vh">
                            <v-col class="d-flex justify-center pa-5">
                                <v-text-field
                                    class=" w-75 ma-2"
                                    label="Receive"
                                    type="text"
                                    clearable=""
                                    rounded
                                    variant="outlined"
                                    color="#1aff1a"
                                ></v-text-field>
                                <v-select
                                    variant="outlined"
                                    color="#1aff1a"
                                    :items="['ETH', 'BTC', 'USDT' ]"
                                    class="w-25 ma-2"
                                ></v-select>
                            </v-col>
                        </v-row>
                    </v-card>


                </v-card>
            </v-window-item>
        </v-window>

    </v-main>
</template>

<style scoped>

</style>