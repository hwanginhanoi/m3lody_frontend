<script setup lang="ts">
// import required modules
import {useDisplay} from "vuetify";
// Import Swiper styles
import 'swiper/css/bundle';
import SwiperCard from "../components/SwiperCard.vue";


let header = [
    {
        title: 'Rank',
        key: 'rank',
        align: 'center'
    },
    {title: 'Image', key: 'image', align: 'center'},
    {title: 'Collection', key: 'collection', align: 'center'},
    {title: 'Floor Price', key: 'floorPrice', align: 'center'},
    {title: 'Volume', key: 'volume', align: 'center'},

]

let items = [
    {
        rank: 1,
        image: "https://img.freepik.com/free-vector/hand-drawn-nft-style-ape-illustration_23-2149622021.jpg?size=338&ext=jpg&ga=GA1.1.1448711260.1707004800&semt=sph",
        collection: 'Collection 1',
        floorPrice: 0.1,
        volume: 0.5
    },
    {rank: 2, collection: 'Collection 2', floorPrice: 0.2, volume: 0.6},
    {rank: 3, collection: 'Collection 3', floorPrice: 0.3, volume: 0.7},
    {rank: 4, collection: 'Collection 4', floorPrice: 0.4, volume: 0.8},
    {rank: 5, collection: 'Collection 5', floorPrice: 0.5, volume: 0.9},
    {rank: 6, collection: 'Collection 6', floorPrice: 0.6, volume: 1.0},
    {rank: 7, collection: 'Collection 7', floorPrice: 0.7, volume: 1.1},
    {rank: 8, collection: 'Collection 8', floorPrice: 0.8, volume: 1.2},
    {rank: 9, collection: 'Collection 9', floorPrice: 0.9, volume: 1.3},
    {rank: 10, collection: 'Collection 10', floorPrice: 1.0, volume: 1.4},
];


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
                :items="items"
                :items-per-page="10"
                class="elevation-1"
                :fixed-header="true"
                :hide-default-footer="true"
            >
                <template v-slot:item.rank="{ item }">
                    {{ item.rank }}
                </template>
                <template v-slot:item.image="{item}">
                    <v-img :src="item.image" class="rounded-lg ma-7"></v-img>
                </template>
                <template v-slot:item.collection="{ item }">

                    {{ item.collection }}

                </template>
                <template v-slot:item.floorPrice="{ item }">
                    {{ item.floorPrice }} ETH
                </template>
                <template v-slot:item.volume="{ item }">
                    {{ item.volume }} ETH
                </template>
            </v-data-table>
        </v-container>
    </v-main>
</template>

<style scoped>


</style>
