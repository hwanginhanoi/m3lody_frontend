<script setup lang="ts">

import Header from "./components/Header.vue";
import NavDrawer from "./components/NavDrawer.vue";
</script>

<template>
    <!-- Conditionally render v-layout only if the route path is not "login" -->
    <v-layout v-if="$route.path !== '/login'" class="rounded rounded-md">
        <NavDrawer></NavDrawer>
        <router-view></router-view>
        <Header></Header>
    </v-layout>
    <v-layout v-else>
        <router-view></router-view>
        <!-- Add any other components you want to render for the login path -->
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