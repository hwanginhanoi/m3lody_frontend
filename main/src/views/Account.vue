<script setup lang="ts">
import {ref} from "vue";
import { useDisplay } from "vuetify";

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

const security = ref({
    currentpassword: '',
    newpassword: '',
    confirmpassword: ''
})

const paymentDetails = ref({
    cardnumber: '',
    cardholdername: '',
    expirationdate: '',
    cvv: ''
})
const {mdAndUp} = useDisplay();
const tab = ref('1');
</script>

<template>
    <v-main>
        <v-card>
            <v-tabs
                v-model="tab"
                color="deep-purple-accent-4"
                align-tabs="center"
            >
                <v-tab :value="1">Account</v-tab>
                <v-tab :value="2">Security</v-tab>
                <v-tab :value="3">Payment</v-tab>
            </v-tabs>
            <v-window v-model="tab">
                <v-window-item
                    v-for="n in 3"
                    :key="n"
                    :value="1"
                >
                    <v-container class="d-flex justify-center ">
                        <v-card class=" pa-10 backgroundgra my-16 rounded-xl" elevation="20"
                                width="90%"
                        >
                            <v-card-text class="pt-2"><h3>Account Details</h3></v-card-text>
                            <v-card-text class="pt-2">
                                <v-row class="" >
                                    <v-col class="backgroundgrade d-flex justify-center">
                                        <v-img src="https://randomuser.me/api/portraits/women/6.jpg" min-width="140" min-height="140" max-width="200" class=" " ></v-img>
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
                                                    rounded
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
                                                    rounded
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
                                                    rounded
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
                                                    rounded
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
                                                    rounded
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
                                                    rounded
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
                                                    rounded
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
                                                    rounded
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
                                                    rounded
                                                    variant="outlined"
                                                    color="#d777ed"
                                                ></v-text-field>
                                            </v-col>
                                            <v-col cols="12">
                                                <v-select
                                                    label="Select"
                                                    :items="['English', 'Chinese', 'Vietnamese']"
                                                    clearable=""
                                                    rounded
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
                </v-window-item>
                <v-window-item
                    v-for="n in 3"
                    :key="n"
                    :value="2">
                    <v-container class="d-flex justify-center ">

                        <v-card class=" pa-10 backgroundgra my-16 rounded-xl" elevation="20"
                                width="900%"
                        >
                            <v-card-text class="pt-2"><h3>Account Details</h3></v-card-text>
                            <v-card-text class="pt-2">
                                <v-row>
                                    <v-col :cols="mdAndUp?'':12">
                                        <v-row>
                                            <v-col>
                                                <v-text-field
                                                    v-model="security.currentpassword"
                                                    label="Current Password"
                                                    type="text"
                                                    clearable=""
                                                    rounded
                                                    variant="outlined"
                                                    color="#d777ed"
                                                ></v-text-field>
                                                <v-text-field
                                                    v-model="security.newpassword"
                                                    label="New Password"
                                                    type="text"
                                                    clearable=""
                                                    rounded
                                                    variant="outlined"
                                                    color="#d777ed"
                                                    ></v-text-field>

                                            </v-col>
                                        </v-row>
                                    </v-col>
                                    <v-col>
                                        <v-row>
                                            <v-col>
                                                <v-text-field
                                                    v-model="security.confirmpassword"
                                                    label="Confirm Password"
                                                    type="text"
                                                    clearable=""
                                                    rounded
                                                    variant="outlined"
                                                    color="#d777ed"
                                                ></v-text-field>
                                            </v-col>
                                        </v-row>
                                    </v-col>
                                </v-row>
                                <v-row>
                                    <v-card-text class="ml-6">
                                        <p>Password Requirement</p>
                                        <ul>
                                            <li>Minimum 8 characters long - the more, the better</li>
                                            <li>At least one lowercase character</li>
                                            <li>At least one number, symbol, or whitespace character</li>
                                        </ul>
                                    </v-card-text>
                                </v-row>
                                <v-row>
                                    <v-card-text>
                                        <v-btn class="ml-2" color="purple" max-width="150">Save Changes</v-btn>
                                        <v-btn class="ml-2" color="white" max-width="150">Reset</v-btn>
                                    </v-card-text>
                                </v-row>
                            </v-card-text>
                        </v-card>
                    </v-container>
                </v-window-item>

                <v-window-item :value="3">
                    <v-container class="d-flex justify-center ">

                        <v-card class=" pa-10 backgroundgra my-16 rounded-xl" elevation="20"
                                width="90%"
                        >
                            <v-card-text class="pt-2"><h3>Payment Details</h3></v-card-text>
                            <v-card-text class="pt-2">
                                <v-row>
                                    <v-col :cols="mdAndUp?'':12">
                                        <v-row>
                                            <v-col>
                                                <v-text-field
                                                    v-model="paymentDetails.cardholdername"
                                                    label="Card Holder Name"
                                                    type="text"
                                                    clearable=""
                                                    rounded
                                                    variant="outlined"
                                                    color="#d777ed"
                                                ></v-text-field>
                                                <v-text-field
                                                    v-model="paymentDetails.cardnumber"
                                                    label="Card Number"
                                                    type="text"
                                                    clearable=""
                                                    rounded
                                                    variant="outlined"
                                                    color="#d777ed"
                                                ></v-text-field>
                                                <v-text-field
                                                    v-model="paymentDetails.cvv"
                                                    label="CVV"
                                                    type="text"
                                                    clearable=""
                                                    rounded
                                                    variant="outlined"
                                                    color="#d777ed"
                                                ></v-text-field>

                                            </v-col>
                                        </v-row>
                                    </v-col>
                                    <v-col>
                                        <v-row>
                                            <v-col>
                                                <v-text-field
                                                    v-model="security.confirmpassword"
                                                    label="Confirm Password"
                                                    type="text"
                                                    clearable=""
                                                    rounded
                                                    variant="outlined"
                                                    color="#d777ed"
                                                ></v-text-field>
                                                <v-text-field
                                                    v-model="security.expirationdate"
                                                    label="Expiration Date"
                                                    type="text"
                                                    clearable=""
                                                    rounded
                                                    variant="outlined"
                                                    color="#d777ed"
                                                ></v-text-field>
                                            </v-col>
                                        </v-row>
                                    </v-col>
                                </v-row>
                                <v-row>
                                    <v-card-text class="ml-2">
                                        <v-checkbox label="Agree to our Terms and Conditions ">
                                        </v-checkbox>
                                    </v-card-text>
                                </v-row>
                                <v-row>
                                    <v-card-text>
                                        <v-btn class="ml-2" color="purple" max-width="150">Save Changes</v-btn>
                                        <v-btn class="ml-2" color="white" max-width="150">Reset</v-btn>
                                    </v-card-text>
                                </v-row>
                            </v-card-text>
                        </v-card>
                    </v-container>

                </v-window-item>
            </v-window>
        </v-card>


    </v-main>
</template>

<style scoped>
    .backgroundgrade{
        max-width: 300px;
        min-width: 100px;
        justify-content: center;
    }
</style>