<!-- Importing the ImproveNFT component and data from JSON file -->
<script setup lang="ts">
import ImproveNFT from "../components/ImproveNFT.vue"; // Importing the ImproveNFT component
import checkCookieExists from "../ultilities/checkCookieExists.ts";
import nftdata from "../apis/marketplace/nftdata.ts";
import router from "../plugins/router.ts";
import {onMounted, ref} from "vue";

let data = ref([]); // Data to store the fetched NFT data
onMounted(async () => {
    if (!checkCookieExists()) {
        await router.push('/login');
    }else {
        data.value = await nftdata();
        console.log(data.value);
    }


});

const categories = ["All categories", "Anime", "Classic", "Rock", "Angelic"]; // Array of categories
</script>

<template>
    <!-- Main container with a background color based on the Vuetify theme -->
    <v-main :style="{ background: $vuetify.theme.global.current.colors.background }">
        <!-- Container to hold the content -->
        <v-container class="mb-16 container">
            <!-- Row for the heading -->
            <v-row>
                <!-- Column for the heading -->
                <v-col cols="12">
                    <!-- Heading for the drops section -->
                    <h1>Drops</h1>
                </v-col>
            </v-row>
            <!-- Row for the category selection dropdown -->
            <v-row>
                <!-- Column for the category selection dropdown -->
                <v-col cols="3">
                    <!-- Dropdown for selecting categories -->
                    <v-select variant="solo" rounded="lg" elevation="4" :items="categories"
                              model-value="All categories">
                    </v-select>
                </v-col>
            </v-row>
            <!-- Divider -->
            <v-divider class="mb-5"></v-divider>
            <!-- Row to display the cards -->
            <v-row class="d-flex justify-center flex-row">
                <!-- Column to display each card -->
                <!-- Iterating over the data to display cards using the ImproveNFT component -->
                <v-col cols="12" sm="6" md="4" lg="3" v-for="card in data">
                    <ImproveNFT :key="card.music_id" :card="card"/> <!-- ImproveNFT component -->
                </v-col>
            </v-row>
        </v-container>
    </v-main>
</template>

<!-- Scoped styles for the component -->
<style scoped>
.container{
    width: 100vw; /* Setting width to 100% of viewport width */
    max-width: 100vw; /* Setting max-width to 100% of viewport width */
}
</style>
