<script setup lang="ts">
import {ref} from "vue";
import cards from "../data.json";
import ImproveNFT from "../components/ImproveNFT.vue";
import checkCookieExists from "../ultilities/checkCookieExists.ts";
import router from "../plugins/router.ts";
import {onMounted} from "vue";
import userprofile from "../apis/profile/userprofile.ts";

let username:string;
let avatar: string;
let userID = ref("");
let listOfCards = ref([]);
onMounted(async () => {
    if (!checkCookieExists()) {
        await router.push('/login');
    }
    else {
        let user = await userprofile();

        username = user[0].username;

        avatar = "src/assets/avatar.jpg";
        userID.value = user[0].user_id;
        listOfCards.value = user;
    }

});
const tab = ref(1);

function getRandomCards() {
    let randomIndices = new Set();
    while(randomIndices.size < 3) {
        randomIndices.add(Math.floor(Math.random() * cards.length));
    }
    return Array.from(randomIndices).map((index: unknown) => {
        if (typeof index === 'number') {
        return cards[index];
        } else {
        throw new Error(`Invalid index type: ${typeof index}`);
        }
    });
}

let randomCards = getRandomCards();
</script>

<template>
    <v-main class="mb-16">
        <v-card>
            <v-img cover height="300" src="https://cdn.vuetifyjs.com/images/cards/server-room.jpg"></v-img>
        </v-card>
        <v-container class="w-75 minwidth">
            <v-avatar size="130" style="margin-top: -5%">
                <v-img :src="avatar"></v-img>
            </v-avatar>

            <h1>{{ username }}</h1>
            <p>ID: {{userID}} &nbsp; <i style="color: #77ED91">Joined January 31</i></p>
            <br>
            <v-tabs v-model="tab">
                <v-tab :value="1">
                    Collected
                </v-tab>
                <v-tab :value="2">
                    Created
                </v-tab>
                <v-tab :value="3">
                    About
                </v-tab>
            </v-tabs>
            <v-window v-model="tab" style=" margin-top: 20px">
                <v-window-item :value="1">
                    <v-card-text class="d-flex justify-center">
                        <v-row>
                            <v-col cols="12" md="4" v-for="card in listOfCards" class="d-flex justify-center">
                                <ImproveNFT :card="card"/>
                            </v-col>
                        </v-row>
                    </v-card-text>
                </v-window-item>

                <v-window-item :value="2">
                    <v-card-text class="d-flex justify-center">
                        <p>You haven't created any NFT</p>
                    </v-card-text>
                </v-window-item>

                <v-window-item :value="3" style="line-height: 30px">
                    <p>
                        <h3>
                            <v-icon color="blue">mdi-music</v-icon>
                            About Me
                        </h3>

                        Hey there! I'm Jane Doe, a musician and programmer exploring the world of NFTs. Music has been
                        my
                        passion since 12, and now I'm diving into the digital realm to create unique sonic experiences.

                        <h3>
                            <v-icon color="red">mdi-star-shooting</v-icon>
                            My Journey:
                        </h3>

                        From strumming chords to tinkering with synthesizers, music has always been my sanctuary. Now,
                        I'm
                        excited to merge my love for sound with the innovation of NFTs, crafting digital art that
                        resonates
                        with emotion.

                        <h3>
                            <v-icon color="green">mdi-headphones</v-icon>
                            Beyond the Notes:
                        </h3>

                        When I'm not creating music or delving into blockchain, you'll find me outdoors, enjoying a good
                        book, or savoring a cup of coffee. Life is about exploration and curiosity, and I'm here to
                        embrace
                        every moment.

                        Join me on this journey as we explore the endless possibilities of music and NFTs together!
                    </p>
                </v-window-item>
            </v-window>


        </v-container>
    </v-main>
</template>

<style scoped>
.minwidth {
    min-width: 450px;
}
</style>
