<script setup lang="ts">
import cards from "../components/InteractiveCards.vue";
import {ref, onMounted} from 'vue';

const particlesLoaded = async (container: any) => {
    console.log("Particles container loaded", container);
};
let target = ref(50000);

let transaction = ref(0);

onMounted(() => {
    // Increase the transaction variable when the component is first loaded
    if (target.value < 50001)
        setInterval(increaseNumber, 0.4);
});

function increaseNumber() {
    if (transaction.value < target.value) {
        transaction.value = transaction.value + 50;
    }
}

</script>

<template>
    <vue-particles id="tsparticles" :particlesLoaded="particlesLoaded" url="http://foo.bar/particles.json"/>
    <vue-particles
        id="tsparticles"
        :particlesLoaded="particlesLoaded"
        :options="{
                    background: {
                        color: {
                            value: '#000000'
                        }
                    },
                    fpsLimit: 60,
                    interactivity: {
                        events: {
                            onClick: {
                                enable: true,
                                mode: 'push'
                            },
                            onHover: {
                                enable: true,
                                mode: 'repulse'
                            },
                        },
                        modes: {
                            bubble: {
                                distance: 400,
                                duration: 2,
                                opacity: 0.8,
                                size: 40
                            },
                            push: {
                                quantity: 4
                            },
                                repulse: {
                                    distance: 200,
                                    duration: 0.4
                                }
                        }
                    },
                    particles: {
                        color: {
                            value: '#7e66f9'
                        },
                        links: {
                            color: '#7e66f9',
                            distance: 150,
                            enable: true,
                            opacity: 0.5,
                            width: 1
                        },
                        move: {
                            direction: 'none',
                            enable: true,
                            outModes: 'bounce',
                            random: false,
                            speed: 6,
                            straight: false
                        },
                        number: {
                            density: {
                                enable: true,
                            },
                            value: 80
                        },
                        opacity: {
                            value: 0.5
                        },
                        shape: {
                            type: 'circle'
                        },
                        size: {
                            value: { min: 1, max: 5 }
                        }
                    },
                    detectRetina: true
                }"
    />
    <v-main>
        <v-container class="widthofcon pt-16 mx-0 "
                     style="background-color: rgba(0, 0, 0, 0.1); backdrop-filter: blur(2px); color: white;">
            <v-row style="margin: 20px 100px" class="d-flex align-center justify-center">
                <v-col cols="12" lg="7">
                    <h1>Find your vibe with M3LODY</h1>
                    <p>Discover the largest music NFT collection on M3LODY, the world's premier platform for
                        musicians
                        and enthusiasts alike</p>
                    <v-btn variant="outlined" to="/login" class="mr-5 mt-5">Discover</v-btn>
                    <v-btn to="/register" class="mt-5">Create account</v-btn>
                </v-col>
                <v-col>
                    <cards/>
                </v-col>
            </v-row>
            <v-row style="color: #7e66f9">
                <v-col style="background-color: white;" class="d-flex justify-center py-16">
                    <div>
                        <h1>3M+</h1>
                        <p>NFT Sold</p>
                    </div>

                </v-col>

                <v-col style="background-color: black" class="d-flex justify-center py-16">
                    <div>
                        <h1>15K+</h1>
                        <p>artists</p>
                    </div>
                </v-col>

                <v-col style="background-color: white" class="d-flex justify-center py-16">
                    <div>
                        <h1>$ {{ transaction }}</h1>
                        <p>Total Transaction</p>
                    </div>
                </v-col>
            </v-row>
        </v-container>
    </v-main>

</template>

<style scoped>
.widthofcon {
    width: 100vw;
    max-width: 100vw;
}
</style>