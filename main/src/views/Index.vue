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
</script>

<template>
    <v-main :style="{ background: $vuetify.theme.global.current.colors.background}" class="">
        <v-container class="text-center vmain" style="padding-right: 2em; max-width: 95vw">
            <h1>Dashboard</h1>
            <SwiperCard/>
            <div class="d-flex justify-space-between my-10">
                <v-btn-toggle>
                    <v-btn>
                        Trending
                    </v-btn>
                    <v-btn>
                        Top
                    </v-btn>
                </v-btn-toggle>
                <v-btn-toggle>
                    <v-btn>
                        24h
                    </v-btn>
                    <v-btn>
                        7d
                    </v-btn>
                    <v-btn>
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