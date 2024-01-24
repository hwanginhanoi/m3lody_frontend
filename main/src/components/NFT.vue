<script setup lang="ts">
defineProps(['card']);
</script>

<template>
    <v-col cols="12" md="6" lg="3">
        <v-lazy :min-height="200" :options="{'threshold': 0.1}" transition="fade-transition">
            <v-card class="rounded-card" elevation="4" to="/product">
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
        </v-lazy>
    </v-col>
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
