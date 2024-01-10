<template>
    <div id="App">
        <NavBar />
        <div id="container">
            <Header />
            <MainPage />
        </div>

    </div>
</template>

<script>
import MainPage from './components/MainPage.vue';
import NavBar from "./components/NavBar.vue";
import Header from "./components/Header.vue";

export default {
    components: {
        Header,
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
    flex-wrap: wrap;
}
#container{
    display: flex;
    flex-direction: column;
    background: bisque;

    width: 100vw;
}
</style>
