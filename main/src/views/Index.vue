<script setup lang="ts">
// import required modules
import {useDisplay} from "vuetify";
// Import Swiper styles
import 'swiper/css/bundle';
import SwiperCard from "../components/SwiperCard.vue";

import item from "../data.json"

let header = [
    {
        title: 'Rank',
        key: 'rank',
        align: 'center'
    },
    {title: 'Image', key: 'image', align: 'center'},
    {title: 'Name', key: 'name', align: 'center'},
    {title: 'Floor Price', key: 'price', align: 'center'},

]
const model = ref(0);
const model2 = ref(0);
</script>

<template>
    <v-main :style="{ background: $vuetify.theme.global.current.colors.background}" class="">
        <v-container class="text-center vmain" style="padding-right: 2em; max-width: 95vw">
            <h1>Dashboard</h1>
            <SwiperCard/>
            <div class="d-flex justify-space-between my-10">
                <v-btn-toggle v-model="model">
                    <v-btn value="0">
                        Trending
                    </v-btn>
                    <v-btn value="1">
                        Top
                    </v-btn>
                </v-btn-toggle>
                <v-btn-toggle v-model="model2">
                    <v-btn value="0">
                        24h
                    </v-btn>
                    <v-btn value="1">
                        7d
                    </v-btn>
                    <v-btn value="2">
                        30d
                    </v-btn>
                </v-btn-toggle>
            </div>

            <v-data-table
                :headers="header"
                :items="item"
                :items-per-page="5"
                class="elevation-1"
                :fixed-header="true"
                :hide-default-footer="true"
            >
                <template v-slot:item.rank="{ item }">
                    {{ item.rank }}
                </template>
                <template v-slot:item.image="{item}">
                    <v-img :src="item.src" class="rounded-lg ma-7"></v-img>
                </template>
                <template v-slot:item.name="{ item }">

                    {{ item.name }}

                </template>
                <template v-slot:item.price="{ item }">
                    {{ item.price }} ETH
                </template>
            </v-data-table>
        </v-container>
    </v-main>
</template>

<style scoped>


</style>