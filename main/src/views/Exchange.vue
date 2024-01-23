<script setup lang="ts">
import {ref} from "vue";

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

</script>

<template>
    <v-main :style="{ background: $vuetify.theme.global.current.colors.background }">
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
            <v-window-item :value="1" align="center" >
                <v-card class="ma-5" style="max-width: 600px; margin: auto">
                       <v-row>
                           <v-col class="ma-5" cols="12" md="6" lg="4" xl="3">
                               Spend
                           </v-col>
                           <v-col class="ma-5" cols="12" md="6" lg="4" xl="3">
                               Cash balance:
                           </v-col>
                       </v-row>
                       <v-row>
                           <v-col class="ma-5" cols="12" md="6" lg="4" xl="3">
                               <v-text-field variant="plain">
                               </v-text-field>
                           </v-col>
                           <v-col class="ma-5" cols="12" md="6" lg="4" xl="3">
                               <v-select
                                   variant="plain"
                                   label="Select"
                                   chips
                                   :items="['ETH', 'BTC']"
                               ></v-select>
                           </v-col>
                       </v-row>
                </v-card>
            </v-window-item>
            <v-window-item :value="2">
                fewfewrwe
            </v-window-item>
            <v-window-item :value="3">
                fewfewrew
            </v-window-item>
        </v-window>

    </v-main>
</template>

<style scoped>

</style>