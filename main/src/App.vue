<script setup lang="ts">

import Header from "./components/Header.vue";
import NavDrawer from "./components/NavDrawer.vue";
</script>

<template>
    <v-layout class="rounded rounded-md">
        <NavDrawer>

        </NavDrawer>

       <router-view>
       </router-view>

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