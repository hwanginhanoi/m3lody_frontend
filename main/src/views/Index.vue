<script setup lang="ts">
import cards from "../components/InteractiveCards.vue";

const particlesLoaded = async (container: any) => {
    console.log("Particles container loaded", container);
};
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
                    fpsLimit: 120,
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
                            value: '#77ED91'
                        },
                        links: {
                            color: '#77ED91',
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
        <div
            style="background-color: rgba(0, 0, 0, 0.1); height: 100vh; backdrop-filter: blur(2px); color: black;">
                <h1>Welcum</h1>
                <cards/>
        </div>
    </v-main>
</template>

<style scoped>
.main{

}
</style>