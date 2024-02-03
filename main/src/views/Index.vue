<script setup lang="ts">
import Footer from "../components/Footer.vue";
// import required modules
import {Swiper, SwiperSlide} from 'swiper/vue';
import {Navigation, Pagination, Autoplay} from 'swiper/modules';

// Import Swiper styles
import 'swiper/css/bundle';

let modules = [Navigation, Pagination, Autoplay];

let header = [
    {text: 'Rank', value: 'rank', align: 'center', width: '10%'},
    {text: 'Collection', value: 'collection', align: 'center', width: '40%'},
    {text: 'Floor Price', value: 'floorPrice', align: 'center', width: '20%'},
    {text: 'Volume', value: 'volume', align: 'center', width: '20%'},
];

let headers = [
    {text: 'Rank', value: 'rank'},
    {text: 'Collection', value: 'collection'},
    {text: 'Floor Price', value: 'floorPrice'},
    {text: 'Volume', value: 'volume'},
];

let items = [
    {rank: 1, collection: 'Collection 1', floorPrice: 0.1, volume: 0.5},
    {rank: 2, collection: 'Collection 2', floorPrice: 0.2, volume: 0.6},
    {rank: 3, collection: 'Collection 3', floorPrice: 0.3, volume: 0.7},
    {rank: 4, collection: 'Collection 4', floorPrice: 0.4, volume: 0.8},
    {rank: 5, collection: 'Collection 5', floorPrice: 0.5, volume: 0.9},
    {rank: 6, collection: 'Collection 6', floorPrice: 0.6, volume: 1.0},
    {rank: 7, collection: 'Collection 7', floorPrice: 0.7, volume: 1.1},
    {rank: 8, collection: 'Collection 8', floorPrice: 0.8, volume: 1.2},
    {rank: 9, collection: 'Collection 9', floorPrice: 0.9, volume: 1.3},
    {rank: 10, collection: 'Collection 10', floorPrice: 1.0, volume: 1.4},
]
</script>

<template>
    <v-main :style="{ background: $vuetify.theme.global.current.colors.background}" class="" >
        <v-container class="text-center vmain">
            <h1>Dashboard</h1>
            <div class="d-flex justify-center my-10">
                <swiper
                    :slidesPerView="4"
                    :spaceBetween="30"
                    :pagination="{ clickable: true }"
                    navigation
                    :modules="modules"
                    centered-slides="true"
                    class="mySwiper ma-0"
                    loop
                    autoplay
                    :breakpoints="{
                        '500': {
                            slidesPerView: 1,
                            spaceBetween: 10,
                        },
    
                        '640': {
                            slidesPerView: 1,
                            spaceBetween: 20,
                        },
                        '768': {
                            slidesPerView: 2,
                            spaceBetween: 40,
                        },
                        '1024': {
                            slidesPerView: 4,
                            spaceBetween: 50,
                        },
                        }"
                >
                    <swiper-slide class="">Slide 1</swiper-slide>
                    <swiper-slide class="">Slide 2</swiper-slide>
                    <swiper-slide class="">Slide 3</swiper-slide>
                    <swiper-slide class="">Slide 4</swiper-slide>
                    <swiper-slide class="">Slide 5</swiper-slide>
                    <swiper-slide class="">Slide 6</swiper-slide>
                    <swiper-slide class="">Slide 7</swiper-slide>
                    <swiper-slide class="">Slide 8</swiper-slide>
                    <swiper-slide class="">Slide 9</swiper-slide>
                </swiper>
            </div>
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
                :headers="headers"
                :items="items"
                :items-per-page="10"
                class="elevation-1"
                :fixed-header="true"
                :hide-default-footer="true"
            >
                <template v-slot:item.rank="{ item }">
                    {{ item.rank }}
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

        <Footer />
    </v-main>
</template>

<style scoped>
.swiper {
    width: 95%;
    max-width: 100vw;
    height: 50vh;
}

.vmain{
}

.swiper-slide {
    text-align: center;
    font-size: 18px;
    background: green;

    /* Center slide text vertically */
    display: flex;
    justify-content: center;
    align-items: center;
}

.swiper-slide img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
}
</style>
