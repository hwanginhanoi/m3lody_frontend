<script setup lang="ts">
import {useDisplay} from "vuetify";
import {useRoute} from 'vue-router';
import {defineProps, ref, computed} from 'vue';

defineProps(['card']);
let {mdAndUp, lgAndUp} = useDisplay();
const route = useRoute();
let width = computed(() => {
    if (route.path == "/marketplace") {
        return '';
    } else {
        return !lgAndUp.value ? '350px' : '75%';
    }
});
console.log(route.path);
</script>
<template>

    <v-card class="rounded-lg pa-5" elevation="4"
            :to="{ path: `/product/${card.id}`}">



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
