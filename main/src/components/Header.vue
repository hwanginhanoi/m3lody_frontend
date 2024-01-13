<script setup lang="ts">
</script>

<template>
    <v-app-bar color="#0D0D0D">
        <v-app-bar-title>
            Application
        </v-app-bar-title>
        <v-text-field
            label="Prepend inner"
            prepend-inner-icon="mdi-map-marker"
            variant="solo"
        ></v-text-field>
        <v-list-item
            prepend-avatar="https://randomuser.me/api/portraits/women/85.jpg"
            title="Sandra Adams">
        </v-list-item>
    </v-app-bar>
</template>

<style scoped>

</style>