<script setup lang="ts">
    import {useRoute} from "vue-router";
    import {onBeforeMount, ref} from "vue";
    import item from "../data.json"
    const product= ref()
    const route = useRoute()
    const {id} = route.params

    onBeforeMount(()=> {
      product.value = item.find(p => p.id === parseInt(id))
    })
</script>

<template>
    <v-main :style="{ background: $vuetify.theme.global.current.colors.background }">
        <v-container>

            <v-img src="src/assets/avatar.jpg" id="avatar" style="margin-left: 20px"/>
            <v-row>
                <v-col>
                    <v-card-text><h1>{{product.name}}</h1></v-card-text>
                </v-col>

                <v-col class="v-col-auto">
                    <v-row>
                        <v-card-text class="pa-2">
                            <p>0.293 ETH</p>
                            <span>Total volume</span>
                        </v-card-text>
                        <v-card-text class="pa-2">
                            <p>0.007 ETH</p>
                            <span>Floor price</span>
                        </v-card-text>
                        <v-card-text class="pa-2">
                            <p>--</p>
                            <span>Best offer</span>
                        </v-card-text>
                        <v-card-text class="pa-2">
                            <p>10%</p>
                            <span>Listed</span>
                        </v-card-text>
                        <v-card-text class="pa-2">
                            <p>327</p>
                            <span>Owner</span>
                        </v-card-text>

                    </v-row>
                </v-col>
            </v-row>
            <v-row>
                <v-col class="v-col-8">
                    <v-card-text><p>From a creative co-op in Tanzania emerges “TingaTinga Arts Collective,” a vibrant
                        showcase of 8 artists breathing new life into the rich visual storytelling traditions of East
                        Africa. Influenced by visionary artist Edward Saidi TingaTinga’s work in the 1960s (where the
                        movement gets its name), this collective carries the torch of this distinctive African art form
                        renowned for its bold and brilliant colors, characters, and captivating narratives.</p>
                    </v-card-text>
                </v-col>


            </v-row>
        </v-container>
        <v-container>
            <v-row>
                <v-col class="v-col-5">

                    <v-img src="src/assets/product1.jpg" height="100%" width="100%"
                           style="border-radius: 20px"></v-img>

                </v-col>
                <v-col class="v-col-7">
                    <v-card style="border-radius: 10px">

                        <v-card-text>
                            <a href="">Ethereum Puppets</a>
                            <h2>Ethereum Puppet #3684</h2>
                            <p>Owned by <a href="">MonsprNFT</a></p>
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
                        <v-card-item><h3>Sale ends January 20, 2024 at 6:52 PM </h3></v-card-item>
                        <br>
                        <br>
                        <hr>
                        <v-card-item>
                            <p>Current price </p>
                            <v-row>
                                <v-col class="v-col-auto align-self-end"><h1>0.0041 ETH</h1>
                                    <p>$101.38</p></v-col>

                            </v-row>
                            <v-row>
                                <v-col>
                                    <v-btn class="" style="width: 100%; background-color:#2081E2">Buy now</v-btn>
                                </v-col>
                                <v-col>
                                    <v-btn class="" style="width: 100%;">Make offer</v-btn>
                                </v-col>
                            </v-row>
                        </v-card-item>

                    </v-card>


                </v-col>
            </v-row>
            <v-row></v-row>
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