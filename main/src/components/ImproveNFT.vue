<script setup lang="ts">
import {useDisplay} from "vuetify";
import { useRoute } from 'vue-router';
import { defineProps, ref, computed } from 'vue';
defineProps(['card']);
let {mdAndUp, lgAndUp} = useDisplay();
const route = useRoute();
let width = computed(() => {
    if (route.path == "/marketplace") {
        return '';
    }
    else{
        return !lgAndUp.value ? '350px' : '75%';
    }
});
console.log(route.path);
</script>
<template>

    <v-card class="rounded-card pa-2" elevation="4"
        :to="{ path: `/product/${card.id}`}"
        :style="{ width: width }"
    >
    <div :style="{ backgroundImage: `url('${card.src}')` }" class="card-image"></div>
    <v-card-title >{{ card.name }}</v-card-title>
    <v-row>
                    <v-col>
                        <v-card-subtitle>Author</v-card-subtitle>
                        <v-card-title>{{card.author}}</v-card-title>
                    </v-col>
                    <v-col>
                        <v-card-subtitle>Price</v-card-subtitle>
                        <v-card-title>{{card.price}}</v-card-title>
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
