<script setup lang="ts">
import cards from "../components/InteractiveCards.vue";
import {ref, onMounted} from 'vue';

const particlesLoaded = async (container: any) => {
    console.log("Particles container loaded", container);
};

let target = ref(50000);
let target2 = ref(15000);
let target3 = ref(3000000);

let transaction = ref(0);
let sold = ref(0);
let artists = ref(0);

onMounted(() => {
    // Increase the transaction variable when the component is first loaded
    setInterval(increaseNumber, 7);
});

function increaseNumber() {
    if (sold.value < target.value) {
        sold.value = Math.min(sold.value + 250, target.value);
    }
    if (artists.value < target2.value) {
        artists.value = Math.min(artists.value + 50, target2.value);
    }
    if (transaction.value < target3.value) {
        transaction.value = Math.min(transaction.value + 10000, target3.value);
    }

    // Format the numbers when they reach the desired values
    if (sold.value === target.value) {
        sold.value = formatNumber(target.value);
    }
    if (artists.value === target2.value) {
        artists.value = formatNumber(target2.value);
    }
    if (transaction.value === target3.value) {
        transaction.value = formatNumber(target3.value);
    }
}

function formatNumber(number) {
    if (number >= 1000000) {
        return (number / 1000000).toFixed(1) + 'M+';
    } else if (number >= 1000) {
        return (number / 1000).toFixed(1) + 'k+';
    } else {
        return number;
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
                <v-col :style="{background: $vuetify.theme.global.current.colors.navbtn}"  class="d-flex justify-center py-16">
                    <div>
                        <h1>{{ sold }}</h1>
                        <p>NFT Sold</p>
                    </div>

                </v-col>
                <v-divider vertical :thickness="2" class="border-opacity-50"></v-divider>
                <v-col :style="{background: $vuetify.theme.global.current.colors.navbtn}"  class="d-flex justify-center py-16">
                    <div>
                        <h1>{{ artists }}</h1>
                        <p>artists</p>
                    </div>
                </v-col>
                <v-divider vertical :thickness="2" class="border-opacity-50"></v-divider>
                <v-col :style="{background: $vuetify.theme.global.current.colors.navbtn}"  class="d-flex justify-center py-16">
                    <div>
                        <h1>${{ transaction }}</h1>
                        <p>Total Transaction</p>
                    </div>
                </v-col>
            </v-row>

            <v-row :style="{background: $vuetify.theme.global.current.colors.navbtn}" class="spaceuper">

                <v-col class="mt-16" cols="12">
                    <v-col cols="7" class=" parallelogram bg-purple-accent-4 setheight" offset="1">
                        <div class="bars">
                            <h2><v-icon>mdi-credit-card-check</v-icon>Fast Transactions</h2>
                            <p>Experience top-of-the-line efficiency with swift NFT transactions, ensuring seamless transfers of digital assets across blockchain networks with unparalleled speed. </p>
                        </div>
                    </v-col>
                </v-col>
                <v-col cols="12" class="mt-4">
                    <v-col cols="7" offset="4" class="setheight parallelogram bg-purple-accent-4">
                        <div class="bars">
                            <h2><v-icon>mdi-link-lock</v-icon>Secure Blockchain System</h2>
                            <p>Benefit from the top-of-the-line, advanced blockchain system, ensuring state-of-the-art security for all digital assets and transactions.</p>
                        </div>
                    </v-col>
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

.setheight {
    min-height: 100px;
}

.bars{
    padding: 0 2em;
}


.spaceuper {
    min-height: 500px;
}

.parallelogram {
    transform: skew(16deg);
}

.parallelogram > div {
    transform: skew(-16deg);
}
</style>