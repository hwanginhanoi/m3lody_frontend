<script setup lang="ts">
import AuthProvider from '../components/AuthProvider.vue'
import {ref} from "vue";

const form = ref({
    email: '',
    password: '',
    remember: false,
})

const isPasswordVisible = ref(false)

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
                            value: '#7e66f9'
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
                            value: '#000000'
                        },
                        links: {
                            color: '#000000',
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
    <div class="auth-wrapper d-flex align-center justify-center pa-4">
        <v-card
            class="auth-card pa-4 pt-7 rounded-lg"
            max-width="448"
        >

            <v-img src="src/assets/melody.png" max-height="30" class="mt-3 mb-4 "
            ></v-img>

            <v-card-text class="pt-2">
                <h5 class="text-h5 mb-1">
                    Welcome to M3LODY
                </h5>
                <p class="mb-0">
                    Please sign-in to your account and start the adventure
                </p>
            </v-card-text>

            <v-card-text>
                <v-form @submit.prevent="() => {}">
                    <v-row>
                        <v-col cols="12">
                            <v-text-field
                                v-model="form.email"
                                label="Email"
                                type="email"
                                clearable=""
                                rounded="lg"
                                variant="outlined"
                                color="#7e66f9"
                            />
                        </v-col>
                        <v-col cols="12">
                            <v-text-field
                                color="#7e66f9"
                                variant="outlined"
                                rounded="lg"
                                clearable=""
                                v-model="form.password"
                                label="Password"
                                placeholder="············"
                                :type="isPasswordVisible ? 'text' : 'password'"
                                :append-inner-icon="isPasswordVisible ? 'mdi-eye-outline' : 'mdi-eye-off-outline'"
                                @click:append-inner="isPasswordVisible = !isPasswordVisible"
                            />

                            <!-- remember me checkbox -->
                            <div class="d-flex align-center justify-space-between flex-wrap">
                                <v-checkbox
                                    color="#7e66f9"
                                    v-model="form.remember"
                                    label="Remember me"
                                />

                                <RouterLink
                                    class="text-primary ms-2 hyperlink"
                                    to="/register"
                                ><span class="hyperlink">Forgot password</span>
                                </RouterLink>
                            </div>
                            <v-btn
                                block
                                type="submit"
                                to="/dashboard"
                                rounded="lg"
                                color="#7e66f9"
                            >
                                Login
                            </v-btn>
                        </v-col>
                        <v-col
                            cols="12"
                            class="text-center text-base"
                        >
                            <span>New on our platform?</span>
                            <RouterLink
                                class="text-primary ms-2 hyperlink"
                                to="/register"
                            ><span class="hyperlink">Create an account</span>
                            </RouterLink>
                        </v-col>

                        <v-col
                            cols="12"
                            class="d-flex align-center"
                        >
                            <v-divider/>
                            <span class="mx-4">or</span>
                            <v-divider/>
                        </v-col>
                        <v-col
                            cols="12"
                            class="text-center"
                        >
                            <AuthProvider/>
                        </v-col>
                        <v-col class="text-center">
                            <span style="color: #A1A1A1">Built with Vue and Vuetify | </span>
                            <v-icon color="#A1A1A1" icon="mdi-language-typescript"></v-icon>
                            <v-icon color="#A1A1A1" icon="mdi-vuejs"></v-icon>
                            <v-icon color="#A1A1A1" icon="mdi-vuetify"></v-icon>
                        </v-col>
                    </v-row>
                </v-form>
            </v-card-text>
        </v-card>
    </div>
</template>

<style scoped>
.auth-wrapper {
    min-height: 100vh;
    min-width: 100vw;
    /* background-color: #77ED91; */
}

.auth-card {
    z-index: 1 !important;
}

.hyperlink {
    color: #7e66f9
}

</style>
