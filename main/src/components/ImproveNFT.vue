<script setup lang="ts">
import {useRoute} from 'vue-router';
import {defineProps, ref} from 'vue';
// This component to display card item of NFT
defineProps(['card']);
const route = useRoute();

function cal_width() { // Measure differ width for each page
    if (route.path == "/dashboard") {
        return "62%";
    } else if (route.path == "/marketplace") {
        return "";
    }
}

let width_cal = ref('');
width_cal.value = cal_width() as string
console.log(width_cal)
console.log(route.path);
</script>
<template>
<!--Assign card attr to vue element-->
    <v-card class="rounded-lg custom" elevation="3"
            :to="{ path: `/product/${card.music_id}`}"
            :width=width_cal>
        <v-img :src="card.preview_url" class="w-100" cover></v-img>
        <v-card-title>{{ card.title }}</v-card-title>
        <v-row>
            <v-col class="v-col-7">
                <v-card-subtitle>Author</v-card-subtitle>

                <v-card-text class="overflow-hidden">
                    <h3>{{ card.username }}</h3>
                </v-card-text>

            </v-col>
            <v-col>
                <v-card-subtitle>Price</v-card-subtitle>
                <v-card-title>{{ card.price }}</v-card-title>
            </v-col>
        </v-row>
    </v-card>
</template>

<style scoped>
.rounded-lg {
    transition: all 0.25s ease-in-out;
}

.rounded-lg:hover {
    transform: translateY(-10px);
}

.custom {
    aspect-ratio: 4/6;
}

</style>
