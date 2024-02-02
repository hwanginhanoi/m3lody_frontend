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
        <v-container class="w-75 minwidth">
            <v-avatar size="130" style="margin-top: -5%">
                <v-img :src="avatar"></v-img>
            </v-avatar>

            <h1 >{{ username }}</h1>
            <p >ID: 69-96-69-96 &nbsp; <i style="color: #77ED91">Joined January 31</i></p>
            <br>
            <v-tabs v-model="tab">
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
            <v-window v-model="tab" style=" margin-top: 20px">
                <v-window-item :value="1">
                    <v-card>
                        <v-card-title>
                            <h1>Collected</h1>
                        </v-card-title>
                        <v-card-text>
                            <v-row>
                                <v-col cols="12" md="3">
                                    <v-card class="bg-green">
                                        <v-img src="https://cdn.vuetifyjs.com/images/cards/server-room.jpg" width="300px"></v-img>
                                        <v-card-title>
                                            <h1>Card 1</h1>
                                        </v-card-title>
                                        <v-card-text>
                                            <p>Card 1</p>
                                        </v-card-text>
                                    </v-card>
                                </v-col>
                                <v-col cols="12" md="3">
                                    <v-card class="bg-green">
                                        <v-img src="https://cdn.vuetifyjs.com/images/cards/server-room.jpg" width="300px"></v-img>
                                        <v-card-title>
                                            <h1>Card 2</h1>
                                        </v-card-title>
                                        <v-card-text>
                                            <p>Card 2</p>
                                        </v-card-text>
                                    </v-card>
                                </v-col>
                            </v-row>
                        </v-card-text>
                    </v-card>
                </v-window-item>
                <v-window-item :value="2">hello</v-window-item>
            </v-window>


        </v-container>
    </v-main>
</template>

<style scoped>
.minwidth{
    min-width: 450px;
}
</style>
