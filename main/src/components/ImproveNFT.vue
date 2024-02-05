<script setup lang="ts">
import {useDisplay} from "vuetify";
import {useRoute} from 'vue-router';
import {defineProps, ref, computed} from 'vue';

defineProps(['card']);
let {mdAndUp, lgAndUp} = useDisplay();
const route = useRoute();

function cal_width(){
    if (route.path == "/dashboard") {
        return "300px";
    } else if (route.path == "/marketplace") {
        return "350px";
    }
}
let width_cal = ref()
width_cal = cal_width()
console.log(width_cal)
console.log(route.path);
</script>
<template>

    <v-card class="rounded-lg pa-5" elevation="4"
            :to="{ path: `/product/${card.id}`}"
            :width = "{width_cal}">



        <v-img :src="card.src" class="w-100"></v-img>
        <v-card-title>{{ card.name }}</v-card-title>
        <v-row>
            <v-col>
                <v-card-subtitle>Author</v-card-subtitle>

                <v-card-text class="overflow-hidden">
                    <h3>{{ card.author }}</h3>
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

.rounded-lg:hover {
    transform: translateY(-10px);
}

</style>
