<script setup lang="ts">

</script>

<template>
    <v-layout class="d-flex flex-column">
        <router-view name="header"></router-view>
        <router-view></router-view>
        <router-view name="footer"></router-view>
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
