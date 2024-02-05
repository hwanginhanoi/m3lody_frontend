<script setup lang="ts">
import {useRoute} from "vue-router";
import {onBeforeMount, ref} from "vue";
import item from "../data.json"

const product = ref()
const route = useRoute()
const {id} = route.params

onBeforeMount(() => {
    product.value = item.find(p => p.id === parseInt(id))
})

let audioList: [
    {
        name: 'audio1',
        url: 'https://www.0dutv.com/upload/dance/F25F74A0B8FF82503241801D0E2CA5CD.mp3'
    },
    {
        name: 'audio2',
        url: 'https://www.0dutv.com/upload/dance/20200316/C719452E3C7834080007662021EA968E.mp3'
    }
]

function handleBeforePlay(next: () => void): void {
    // There are a few things you can do here...
    // Assuming this is part of a class and you have proper typings for these properties
    this.currentAudioName = this.audioList[this.$refs.audioPlayer.currentPlayIndex].name;

    next(); // Start playing
}

</script>

<template>
    <v-main :style="{ background: $vuetify.theme.global.current.colors.background }" >
        <v-container class="mb-16">
            <v-row>
                <v-col class="v-col-5">
                    <v-img :src="product.src" height="100%" width="100%"
                           style="border-radius: 20px"></v-img>
                </v-col>
                <v-col class="v-col-7">
                    <v-card style="border-radius: 10px">

                        <v-card-text><h1>{{ product.name }}</h1> by <strong>{{ product.author }}</strong></v-card-text>
                        <v-card-text>
                            <p>{{ product.description }}</p>
                        </v-card-text>
                        <v-card-text>
                            <audio controls>
                                <source
                                    src="https://commondatastorage.googleapis.com/codeskulptor-demos/DDR_assets/Kangaroo_MusiQue_-_The_Neverwritten_Role_Playing_Game.mp3"
                                    type="audio/mpeg">
                                Your browser does not support the audio element.
                            </audio>
                        </v-card-text>
                        <br>
                        <v-card-item>
                            <v-row>
                                <v-col class="v-col-2"># 4,864</v-col>
                                <v-col class="v-col-2">10 views</v-col>
                                <v-col class="v-col-2">1 favorite</v-col>
                                <v-col class="v-col-2">PFPs</v-col>
                            </v-row>
                        </v-card-item>
                    </v-card>
                    <br>
                    <v-card style="border-radius: 10px">
                        <v-card-item>
                            <p>Current price </p>
                            <v-row>
                                <v-col class="v-col-auto align-self-end"><h1>{{ product.price }} ETH</h1>
                                    <p>${{ product.price * 2300 }}</p>
                                </v-col>
                            </v-row>
                            <v-row>
                                <v-col>
                                    <v-btn class="" style="width: 100%; background-color:#2081E2">Buy now</v-btn>
                                </v-col>
                            </v-row>
                        </v-card-item>
                    </v-card>
                </v-col>
            </v-row>
        </v-container>

    </v-main>
</template>

<style scoped>
#avatar {
    width: 80px;
    height: 80px;
    border-radius: 10px;
}

.upper-display {
    display: flex;
}

.upper-display div {
    margin-left: 1vh;
    margin-right: 1vh;
}
</style>