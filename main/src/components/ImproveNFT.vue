<script setup lang="ts">
import {useDisplay} from "vuetify";

defineProps(['card']);
let {mdAndUp, lgAndUp} = useDisplay();

</script>
<template>

    <v-card class="rounded-card" elevation="4" :to="{ path: `/product/${card.id}`}" :style="{ width: !lgAndUp ? '95%' : '85%' }">
    <div :style="{ backgroundImage: `url('${card.img}')` }" class="card-image"></div>
    <v-card-title >{{ card.title }}</v-card-title>
    <v-row>
        <v-col>
            <v-card-subtitle>fefw</v-card-subtitle>
            <v-card-title>feawf</v-card-title>
        </v-col>
        <v-col>
            <v-card-subtitle>wfew</v-card-subtitle>
            <v-card-title>feaw</v-card-title>
        </v-col>
    </v-row>
    </v-card>
</template>

<style scoped>
.rounded-card {
    border-radius: 8px;
    overflow: hidden;
    aspect-ratio: 1; /* Set the aspect ratio to make the card a square */
    transition: transform 0.3s ease;
}

.card-image {
    height: 60%;
    background-size: cover;
    background-position: center;
}

.rounded-card:hover {
    transform: translateY(-10px);
}

</style>
