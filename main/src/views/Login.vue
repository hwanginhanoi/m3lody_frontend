<script setup lang="ts">
import AuthProvider from '../components/AuthProvider.vue'
import {ref} from "vue";

const form = ref({
    email: '',
    password: '',
    remember: false,
})

const isPasswordVisible = ref(false)
</script>

<template>
    <div class="auth-wrapper d-flex align-center justify-center pa-4">
        <v-card
            class="auth-card pa-4 pt-7 rounded-xl"
            max-width="448"
        >

            <v-img src="src/assets/trade-dark.png" max-height="30" class="mt-8 mb-8 "
            ></v-img>

            <v-card-text class="pt-2">
                <h5 class="text-h5 mb-1">
                    Welcome to Trad3
                </h5>
                <p class="mb-0">
                    Please sign-in to your account and start the adventure
                </p>
            </v-card-text>

            <v-card-text>
                <v-form @submit.prevent="() => {}">
                    <v-row>
                        <!-- email -->
                        <v-col cols="12">
                            <v-text-field
                                v-model="form.email"
                                label="Email"
                                type="email"
                                clearable=""
                                rounded
                                variant="outlined"
                                color="#77ED91"
                            />
                        </v-col>

                        <!-- password -->
                        <v-col cols="12">
                            <v-text-field
                                color="#77ED91"
                                variant="outlined"
                                rounded
                                clearable=""
                                v-model="form.password"
                                label="Password"
                                placeholder="············"
                                :type="isPasswordVisible ? 'text' : 'password'"
                                :append-inner-icon="isPasswordVisible ? 'mdi-eye-outline' : 'mdi-eye-off-outline'"
                                @click:append-inner="isPasswordVisible = !isPasswordVisible"
                            />

                            <!-- remember me checkbox -->
                            <div class="d-flex align-center justify-space-between flex-wrap mt-1 mb-4">
                                <v-checkbox
                                    color="#77ED91"
                                    v-model="form.remember"
                                    label="Remember me"
                                />

                                <RouterLink
                                    class="text-primary ms-2 hyperlink"
                                    to="/register"
                                ><span class="hyperlink">Forgot password</span>
                                </RouterLink>
                            </div>

                            <!-- login button -->
                            <v-btn
                                block
                                type="submit"
                                to="/index"
                                rounded
                                color="#77ED91"
                            >
                                Login
                            </v-btn>
                        </v-col>

                        <!-- create account -->
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

                        <!-- auth providers -->
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
    background-color: #77ED91;
}

.auth-card {
    z-index: 1 !important;
}

.hyperlink {
    color: #77ED91
}

</style>
