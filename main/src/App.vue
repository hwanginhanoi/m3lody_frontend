<script setup lang="ts">
import NavDrawer from "./components/NavDrawer.vue";
</script>

<template>
    <v-layout v-if="$route.path !== '/login'z" class="rounded rounded-md">
        <NavDrawer></NavDrawer>
        <router-view></router-view>
    </v-layout>
    <v-layout v-else>
        <router-view></router-view>
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