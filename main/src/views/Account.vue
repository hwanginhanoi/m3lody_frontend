<script setup lang="ts">
import {ref} from "vue";

const form = ref({
    firstname: '',
    lastname: '',
    organization: '',
    address: '',
    zipcode: '',
    languege: '',
    currency: '',
    timezone: '',
    country: '',
    state: '',
    email: '',
    phonenumber: ''
})
</script>

<template>
    <v-main class="bg-green d-flex align-center justify-center">
        <v-card class="bg-dark pa-10"
                width="100%"
                height="100%"

        >
            <v-card-text class="pt-2"><h3>Account Details</h3></v-card-text>
            <v-card-text class="pt-2">
                <v-row>
                    <v-col cols="2">
                        <v-img src="https://randomuser.me/api/portraits/women/85.jpg" width="120" class="rounded-xl border"></v-img>
                    </v-col>

                    <v-col class="d-flex align-center">
                        <v-row>
                            <v-col cols="12">
                                <v-btn class="ml-2" color="green" max-width="300">Upload New Photot</v-btn>
                                <v-btn class="ml-2" color="white" max-width="150">Reset</v-btn>
                            </v-col>
                            <v-col class="ml-9">
                                <p>Allowed PNG, JPG. Max size is 800k</p>
                            </v-col>

                        </v-row>

                    </v-col>
                </v-row>
            </v-card-text>
            <v-card-text>
                <v-row>
                    <v-col >
                        <v-row>
                            <v-col  cols="12">
                                <v-text-field
                                    v-model="form.firstname"
                                    label="First Name"
                                    type="text"
                                    clearable=""
                                    rounded
                                    variant="outlined"
                                    color="#77ED91"
                                ></v-text-field>
                            </v-col>
                            <v-col cols="12">
                                <v-text-field
                                v-model="form.email"
                                    label="Email"
                                    type="email"
                                    clearable=""
                                    rounded
                                    variant="outlined"
                                    color="#77ED91"
                                ></v-text-field>
                            </v-col>
                            <v-col cols="12">
                                <v-text-field
                                v-model="form.firstname"
                                    label="First Name"
                                    type="email"
                                    clearable=""
                                    rounded
                                    variant="outlined"
                                    color="#77ED91"
                                ></v-text-field>
                            </v-col>
                            <v-col cols="12">
                                <v-text-field
                                v-model="form.firstname"
                                    label="First Name"
                                    type="email"
                                    clearable=""
                                    rounded
                                    variant="outlined"
                                    color="#77ED91"
                                ></v-text-field>
                            </v-col>
                            <v-col cols="12">
                                <v-text-field
                                v-model="form.firstname"
                                    label="First Name"
                                    type="email"
                                    clearable=""
                                    rounded
                                    variant="outlined"
                                    color="#77ED91"
                                ></v-text-field>
                            </v-col>
                        </v-row>
                    </v-col >

                    <v-col>
                        <v-row>
                            <v-col cols="12">
                                <v-text-field
                                v-model="form.firstname"
                                    label="First Name"
                                    type="email"
                                    clearable=""
                                    rounded
                                    variant="outlined"
                                    color="#77ED91"
                                ></v-text-field>
                            </v-col>
                            <v-col cols="12">
                                <v-text-field
                                v-model="form.firstname"
                                    label="First Name"
                                    type="email"
                                    clearable=""
                                    rounded
                                    variant="outlined"
                                    color="#77ED91"
                                ></v-text-field>
                            </v-col>
                            <v-col cols="12">
                                <v-text-field
                                v-model="form.firstname"
                                    label="First Name"
                                    type="email"
                                    clearable=""
                                    rounded
                                    variant="outlined"
                                    color="#77ED91"
                                ></v-text-field>
                            </v-col>
                            <v-col cols="12">
                                <v-text-field
                                v-model="form.firstname"
                                    label="First Name"
                                    type="email"
                                    clearable=""
                                    rounded
                                    variant="outlined"
                                    color="#77ED91"
                                ></v-text-field>
                            </v-col>
                            <v-col cols="12">
                                <v-text-field
                                v-model="form.firstname"
                                    label="First Name"
                                    type="email"
                                    clearable=""
                                    rounded
                                    variant="outlined"
                                    color="#77ED91"
                                ></v-text-field>
                            </v-col>
                        </v-row>
                    </v-col>
                </v-row>
            </v-card-text>

            <v-card-text>
                <v-row>
                    <v-col>
                        <v-btn class="ml-2" color="purple" max-width="150">Save Changes</v-btn>
                        <v-btn class="ml-2" color="white" max-width="150">Reset</v-btn>
                    </v-col>
                </v-row>
            </v-card-text>
        </v-card>

    </v-main>
</template>

<style scoped>

</style>