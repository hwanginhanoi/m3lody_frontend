<script setup lang="ts">
import { useTheme } from 'vuetify'

const theme = useTheme()

function toggleTheme () {
  theme.global.name.value = theme.global.current.value.dark ? 'light' : 'dark'
}
</script>

<template>
    <v-layout class="rounded rounded-md">
      <v-navigation-drawer>
        <v-list>
          <v-list-item title="Navigation drawer"></v-list-item>
          <v-btn @click="toggleTheme">toggle theme</v-btn>
        </v-list>
      </v-navigation-drawer>

      <v-app-bar title="Application bar"></v-app-bar>

      <v-main class="d-flex align-center justify-center" style="min-height: 300px;">
        Main Content
      </v-main>
    </v-layout>
</template>

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
