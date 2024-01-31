<script setup lang="ts">
import {ref} from "vue";

let username: string = "Jane Doe"
let avatar: string = "https://randomuser.me/api/portraits/women/85.jpg"

const tab = ref(1);
</script>

<template>
    <v-main>
        <v-card>
            <v-img cover height="300" src="https://cdn.vuetifyjs.com/images/cards/server-room.jpg"></v-img>
        </v-card>
        <v-avatar size="130" style="margin-left: 10%; margin-top: -5%">
            <v-img :src="avatar"></v-img>
        </v-avatar>
        <h1 style="margin-left: 10%">{{ username }}</h1>
        <p style="margin-left: 10%">ID: 69-96-69-96 &nbsp; <i style="color: #77ED91">Joined January 31</i></p>
        <br>
        <v-tabs v-model="tab" style="margin-left: 10%">
            <v-tab :value="1">
                Collected
            </v-tab>
            <v-tab :value="2">
                Created
            </v-tab>
            <v-tab :value="3">
                Favourite
            </v-tab>
            <v-tab :value="4">
                About
            </v-tab>
        </v-tabs>
        <v-window v-model="tab" style="margin-left: 10%; margin-top: 20px">
            <v-window-item :value="1">Hello</v-window-item>
            <v-window-item :value="2">hello</v-window-item>
        </v-window>
    </v-main>
</template>

<style scoped>

</style>