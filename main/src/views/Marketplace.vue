<script setup lang="ts">
import ImproveNFT from "../components/ImproveNFT.vue";
import data from "../data.json";

const categories = ["All categories", "Anime", "Classic", "Rock", "Angelic"]
</script>

<template>
    <v-main :style="{ background: $vuetify.theme.global.current.colors.background }">
        <v-container class="mb-16">
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

            </v-row>
            <v-divider class="mb-5"></v-divider>
            <v-row class="d-flex justify-center flex-row">
                <v-col cols="12" sm="4" v-for="card in data" ml="2" >
                    <ImproveNFT :key="card.id" :card="card" />
                </v-col>
            </v-row>

        </v-container>
    </v-main>
</template>

<style scoped>
</style>


