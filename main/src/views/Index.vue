<script setup lang="ts">
import NavDrawer from "../components/NavDrawer.vue";
import Header from "../components/Header.vue";
import MainPage from "../components/MainPage.vue";

</script>

<template>
    <v-layout class="rounded rounded-md">
        <NavDrawer>

        </NavDrawer>

        <MainPage>

        </MainPage>
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