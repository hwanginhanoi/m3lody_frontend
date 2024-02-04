<script setup lang="ts">
import {ref} from "vue";
import {useDisplay} from "vuetify";

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
const {mdAndUp} = useDisplay();
const userImage = ref("https://media.contra.com/image/upload/c_limit,fl_lossy,w_850/v1687272519/aw9hf8eeymgoy47riwlr.jpg");

</script>

<template>
    <v-container class="pa-2">
        <v-card class=" pa-10 backgroundgra rounded-lg" elevation="2"
                width="99%"
        >
            <v-card-text class="pt-2"><h3>Account Details</h3></v-card-text>
            <v-card-text class="pt-2">
                <v-row class="" >
                    <v-col class="backgroundgrade d-flex justify-center">
                        <v-img :src="userImage" min-width="140" min-height="140" max-width="180" class="rounded-lg" ></v-img>
                    </v-col>

                    <v-col class="d-flex align-center">
                        <v-row>
                            <v-col cols="12" class="pl-4">
                                <v-btn class="ml-2 mt-4" color="green" max-width="300">Upload New Photot</v-btn>
                                <v-btn class="ml-2 mt-4" color="white" max-width="150">Reset</v-btn>
                            </v-col>
                            <v-col class="ml-9">
                                <p>Allowed PNG, JPG. Max size is 800k</p>
                            </v-col>

                        </v-row>

                    </v-col>
                </v-row>
                <br>
                <br>
                <hr>
            </v-card-text>
            <v-card-text>
                <v-row>
                    <v-col  :cols="mdAndUp?'':12">
                        <v-row>
                            <v-col >
                                <v-text-field
                                    v-model="form.firstname"
                                    label="First Name"
                                    type="text"
                                    clearable=""
                                    rounded="lg"
                                    variant="outlined"
                                    color="#d777ed"
                                ></v-text-field>
                            </v-col>
                            <v-col cols="12">
                                <v-text-field
                                    v-model="form.email"
                                    label="Email"
                                    type="email"
                                    clearable=""
                                    rounded="lg"
                                    variant="outlined"
                                    color="#d777ed"
                                ></v-text-field>
                            </v-col>
                            <v-col cols="12">
                                <v-text-field
                                    v-model="form.phonenumber"
                                    label="Phone Number"
                                    type="number"
                                    clearable=""
                                    rounded="lg"
                                    variant="outlined"
                                    color="#d777ed"
                                ></v-text-field>
                            </v-col>
                            <v-col cols="12">
                                <v-text-field
                                    v-model="form.state"
                                    label="State"
                                    type="text"
                                    clearable=""
                                    rounded="lg"
                                    variant="outlined"
                                    color="#d777ed"
                                ></v-text-field>
                            </v-col>
                            <v-col cols="12">
                                <v-text-field
                                    v-model="form.country"
                                    label="Country"
                                    type="text"
                                    clearable=""
                                    rounded="lg"
                                    variant="outlined"
                                    color="#d777ed"
                                ></v-text-field>
                            </v-col>
                        </v-row>
                    </v-col >

                    <v-col>
                        <v-row>
                            <v-col cols="12">
                                <v-text-field
                                    v-model="form.lastname"
                                    label="Last Name"
                                    type="text"
                                    clearable=""
                                    rounded="lg"
                                    variant="outlined"
                                    color="#d777ed"
                                ></v-text-field>
                            </v-col>
                            <v-col cols="12">
                                <v-text-field
                                    v-model="form.organization"
                                    label="Organization"
                                    type="text"
                                    clearable=""
                                    rounded="lg"
                                    variant="outlined"
                                    color="#d777ed"
                                ></v-text-field>
                            </v-col>
                            <v-col cols="12">
                                <v-text-field
                                    v-model="form.address"
                                    label="Address"
                                    type="text"
                                    clearable=""
                                    rounded="lg"
                                    variant="outlined"
                                    color="#d777ed"
                                ></v-text-field>
                            </v-col>
                            <v-col cols="12">
                                <v-text-field
                                    v-model="form.zipcode"
                                    label="Zip Code"
                                    type="text"
                                    clearable=""
                                    rounded="lg"
                                    variant="outlined"
                                    color="#d777ed"
                                ></v-text-field>
                            </v-col>
                            <v-col cols="12">
                                <v-select
                                    label="Select"
                                    :items="['English', 'Chinese', 'Vietnamese']"
                                    clearable=""
                                    rounded="lg"
                                    variant="outlined"
                                    color="#d777ed"
                                ></v-select>
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
    </v-container>
</template>

<style scoped>
.backgroundgrade{
    max-width: 300px;
    min-width: 100px;
    justify-content: center;
}

.fixborder{
    min-width: 100vh;
}
</style>