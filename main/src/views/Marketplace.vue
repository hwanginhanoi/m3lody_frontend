<script setup lang="ts">
import NFT from '../components/NFT.vue';

const cards = [
    {id: 1, title: 'Card 1fewfewfewfewfewfewfewfewefw', content: 'MMB', img: "src/assets/test.png"},
    {id: 2, title: 'Card 1', content: 'MMB', img: "src/assets/test1.jpeg"},
    {id: 3, title: 'Card 1', content: 'MMB', img: "src/assets/test2.avif"},
    {id: 4, title: 'Card 1fewfewfewfewfewfewfewfewefw', content: 'MMB', img: "src/assets/test.png"},
    {id: 5, title: 'Card 1', content: 'MMB', img: "src/assets/test1.jpeg"},
    {id: 6, title: 'Card 1', content: 'MMB', img: "src/assets/test2.avif"},
    {id: 7, title: 'Card 1fewfewfewfewfewfewfewfewefw', content: 'MMB', img: "src/assets/test.png"},
    {id: 8, title: 'Card 1', content: 'MMB', img: "src/assets/test1.jpeg"},
    {id: 9, title: 'Card 1', content: 'MMB', img: "src/assets/test2.avif"},
    {id: 10, title: 'Card 1fewfewfewfewfewfewfewfewefw', content: 'MMB', img: "src/assets/test.png"},
    {id: 11, title: 'Card 1', content: 'MMB', img: "src/assets/test1.jpeg"},
    {id: 12, title: 'Card 1', content: 'MMB', img: "src/assets/test2.avif"},

];

const categories = ["All categories", "Art", "Gaming"]
const chains = ["All chains", "ETH", "BTC"]
</script>

<template>
    <v-main :style="{ background: $vuetify.theme.global.current.colors.background }">
        <v-container>
            <v-row>
                <v-col cols="12">
                    <h1>Drops</h1>
                </v-col>
            </v-row>
            <v-row>
                <v-col cols="3">
                    <v-select variant="solo" rounded="lg" elevation="4" :items="categories"
                              model-value="All categories">
                    </v-select>
                </v-col>
                <v-col cols="2">
                    <v-select variant="solo" rounded="lg" elevation="4" :items="chains" model-value="All chains">
                    </v-select>
                </v-col>
            </v-row>
            <v-divider class="mb-5"></v-divider>
            <v-row>
                <NFT v-for="card in cards" :key="card.id" :card="card"/>
            </v-row>

        </v-container>
    </v-main>
</template>

<style scoped>
</style>


