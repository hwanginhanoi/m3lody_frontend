<script setup lang="ts">
import NavDrawer from "./components/NavDrawer.vue";
import Header from "./components/Header.vue";

</script>

<template>
    <v-layout class="rounded rounded-md">
        <NavDrawer>

        </NavDrawer>

        <v-main class="d-flex align-center justify-center" style="min-height: 300px;">
            Main Content
        </v-main>
        <Header >

        </Header >

    </v-layout>
</template>

<style>
#app {
    display: flex;
    width: 100vw;
    min-height: 100vh;
}

#dark-mode-switch {
    position: absolute;
    right: 0;
    top: 0;
}

</style>
