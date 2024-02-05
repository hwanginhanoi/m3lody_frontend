<template>
    <!--layout for websites-->
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

</style>
