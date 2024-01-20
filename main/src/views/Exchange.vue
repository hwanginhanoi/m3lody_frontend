<script setup lang="ts">
import {ref} from "vue";

const tab = ref(1);
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
                           <v-col class="text-left">
                               Spend
                           </v-col>
                           <v-col class="text-right">
                               Cash balance
                           </v-col>
                       </v-row>
                       <v-row>
                           <v-col class="text-left">
                               <v-text-field variant="plain">
                               </v-text-field>
                           </v-col>
                           <v-col class="text-right">
                               <v-select
                                   variant="plain"
                                   label="Select"
                                   chips
                                   :items="['California', 'Colorado', 'Florida', 'Georgia', 'Texas', 'Wyoming']"
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