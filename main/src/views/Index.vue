<script setup lang="ts">
import NavDrawer from "../components/NavDrawer.vue";
import Header from "../components/Header.vue";

</script>

<template>
    <v-layout class="rounded rounded-md">
        <NavDrawer>

        </NavDrawer>

        <v-main class="" style="min-height: 300px;">
        </v-main>

        <Header >

        </Header >

    </v-layout>
</template>

<style>
.v-main {
    background: #0D0D0D
}
</style>