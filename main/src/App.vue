<template>
    <div id="app">
        <NavBar />
        <MainPage />
    </div>
</template>

<script>
import MainPage from './components/MainPage.vue';
import NavBar from "./components/NavBar.vue";

export default {
    components: {
        NavBar,
        MainPage,
    },
};
</script>

<style>
body {
    margin: 0;
    display: flex;
    height: 100vh;
}
</style>
