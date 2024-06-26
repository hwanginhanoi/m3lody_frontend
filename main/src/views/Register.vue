<script setup lang="ts">
import {ref} from "vue";
import checkCookieExists from "../ultilities/checkCookieExists.ts";
import router from "../plugins/router.ts";
import {onMounted} from "vue";
import register from "../apis/register/register.ts";

onMounted(async () => {
    if (checkCookieExists()) {
        await router.push('/dashboard');
    }
});
//import placeholders
const form = ref({
    email: '',
    password: '',
    username: '',
    confirmPassword: '',
    remember: false,
})

const isPasswordVisible = ref(false)

//load background particles
const particlesLoaded = async (container: any) => {
    console.log("Particles container loaded", container);
};

async function handleRegister() {
    let formData = new FormData();
    formData.append('email', form.value.email);
    formData.append('username', form.value.username);
    formData.append('password', form.value.password);
    formData.append('confirmPassword', form.value.confirmPassword);

    await register(formData);

    await router.push({path: '/index'});
}
</script>

<template>
    <!--background-->
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
    <!--register form-->
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
                    Step in the game with us
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
                                rounded="lg"
                                variant="outlined"
                                color="#7e66f9"
                            />
                        </v-col>
                        <v-col cols="12">
                            <v-text-field
                                v-model="form.username"
                                label="Username"
                                type="text"
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
                                v-model="form.password"
                                label="Password"
                                placeholder="············"
                                :type="isPasswordVisible ? 'text' : 'password'"
                                :append-inner-icon="isPasswordVisible ? 'mdi-eye-outline' : 'mdi-eye-off-outline'"
                                @click:append-inner="isPasswordVisible = !isPasswordVisible"
                            />
                        </v-col>
                        <v-col cols="12">
                            <v-text-field
                                color="#7e66f9"
                                variant="outlined"
                                rounded="lg"
                                v-model="form.confirmPassword"
                                label="Re-enter password"
                                placeholder="············"
                                :type="'password'"
                                @click:append-inner="isPasswordVisible = !isPasswordVisible"
                            />
                        </v-col>
                        <v-col>
                            <v-btn
                                block
                                type="submit"
                                to="/index"
                                rounded="lg"
                                color="#7e66f9"
                                @click="handleRegister"
                            >
                                Register
                            </v-btn>
                        </v-col>


                        <v-col
                            cols="12"
                            class="d-flex align-center"
                        >
                            <v-divider/>
                            <v-divider/>
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
}

.auth-card {
    z-index: 1 !important;
}

.hyperlink {
    color: #77ED91
}

</style>
