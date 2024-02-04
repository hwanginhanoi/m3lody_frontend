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
</script>

<template>
    <v-main :style="{ background: $vuetify.theme.global.current.colors.background }">
        <v-container>
            <v-row>
                <v-col class="v-col-5">
                    <v-img :src="product.src" height="100%" width="100%"
                           style="border-radius: 20px"></v-img>
                </v-col>
                <v-col class="v-col-7">
                    <v-card style="border-radius: 10px">

                        <v-card-text><h1>{{ product.name }}</h1> by <strong>{{ product.author }}</strong></v-card-text>
                        <v-card-text><p>{{ product.description }}</p>
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
                                <v-col class="v-col-auto align-self-end"><h1>{{product.price}} ETH</h1>
                                    <p>${{product.price * 2300}}</p>
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