<script setup lang="ts">
// import required modules
import {ref} from "vue";
// Import Swiper styles
import 'swiper/css/bundle';
import SwiperCard from "../components/SwiperCard.vue";

import item from "../data.json"
// Header of table config
let header: Array<Object> = [
    {title: 'Rank', key: 'rank', align: 'center'},
    {title: 'Image', key: 'image', align: 'center'},
    {title: 'Name', key: 'name', align: 'center'},
    {title: 'Floor Price', key: 'price', align: 'center'},
]
const model = ref(0);
const model2 = ref(0);

</script>

<template>
    <v-main :style="{ background: $vuetify.theme.global.current.colors.background}" class="">
        <v-container class="vmain mb-16" style="padding-right: 2em; max-width: 95vw">
            <h1 style="text-align: center">Dashboard</h1>
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
            <!--display ranking table by item of item dataset-->
            <v-data-table
                :headers="header"
                :items="item"
                :items-per-page="5"
                class="elevation-1"
                :fixed-header="true"
                :hide-default-footer="true"
            >
                <!--define data for each column by item attr-->
                <template v-slot:item.rank="{item}">
                    {{ item.id + Math.floor(Math.random() * 30) }}
                </template>
                <template v-slot:item.image="{item}">
                    <v-img :src="item.src" class="rounded-lg ma-2" max-width="200px"></v-img>
                </template>
                <template v-slot:item.name="{ item }">
                    <h3>{{ item.name }}</h3>
                </template>
                <template v-slot:item.price="{ item }">
                    {{ item.price }} ETH
                </template>
            </v-data-table>
        </v-container>
    </v-main>
</template>
