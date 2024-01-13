<script setup lang="ts">
</script>

<template>
    <v-app-bar :elevation="0" color="#0D0D0D" height="100">
        <v-app-bar-title>
            Application
        </v-app-bar-title>
        <v-text-field
            clearable="true"
            class="pt-6"
            rounded
            bg-color="#151718"
            label="Search"
            prepend-inner-icon="mdi-magnify"
            variant="solo-filled"
            style="max-width: 250px;"
        ></v-text-field>
        <v-list-item
            prepend-avatar="https://randomuser.me/api/portraits/women/85.jpg"
            title="Sandra Adams">
        </v-list-item>
    </v-app-bar>
</template>

<style scoped>

</style>