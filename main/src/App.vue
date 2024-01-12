<script setup lang="ts">
import MainPage from './components/MainPage.vue';
import NavBar from "./components/NavBar.vue";
import Header from "./components/Header.vue";

// export default {
//     components: {
//         Header,
//         NavBar,
//         MainPage,
//     },
// };
</script>

<!--<template>-->
<!--    <div id="App">-->
<!--        <NavBar />-->
<!--        <div id="container">-->
<!--            <Header />-->
<!--            <MainPage />-->
<!--        </div>-->

<!--    </div>-->
  <template>
    <v-layout class="rounded rounded-md">
      <v-navigation-drawer>
        <v-list>
          <v-list-item title="Navigation drawer"></v-list-item>
        </v-list>
      </v-navigation-drawer>

      <v-app-bar title="Application bar"></v-app-bar>

      <v-main class="d-flex align-center justify-center" style="min-height: 300px;">
        Main Content
      </v-main>
    </v-layout>
  </template>
<!--</template>-->

<style>
/* body {
    margin: 0;
    display: flex;
    height: 100vh;
    flex-wrap: wrap;
    background: black;
}
#container{
    display: flex;
    flex-direction: column;
    background: bisque;

    width: 100vw;
} */
</style>
