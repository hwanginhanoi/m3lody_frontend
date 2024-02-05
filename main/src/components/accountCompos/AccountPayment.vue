<script setup lang="ts">
import {ref} from "vue";
import {useDisplay} from "vuetify";

// Using the useDisplay function from Vuetify
const {mdAndUp} = useDisplay();

// Initializing reactive paymentDetails object to store form data
const paymentDetails = ref({
    cardnumber: '',
    cardholdername: '',
    expirationdate: '',
    cvv: '',
    billingaddress: ''
})
</script>

<template>
    <v-container class="pa-3">
        <!-- Payment Details Card -->
        <v-card class=" pa-10 background rounded-lg" elevation="2" width="99%">
            <v-card-text class="pt-2"><h3>Payment Details</h3></v-card-text>
            <v-card-text class="pt-2">
                <v-row>
                    <v-col :cols="mdAndUp ? '' : 12">
                        <v-row>
                            <v-col>
                                <!-- Card Holder Name Input -->
                                <v-text-field
                                    v-model="paymentDetails.cardholdername"
                                    label="Card Holder Name"
                                    type="text"
                                    clearable
                                    rounded="lg"
                                    variant="outlined"
                                    color="#d777ed"
                                ></v-text-field>

                                <!-- Card Number Input -->
                                <v-text-field
                                    v-model="paymentDetails.cardnumber"
                                    label="Card Number"
                                    type="text"
                                    clearable
                                    rounded="lg"
                                    variant="outlined"
                                    color="#d777ed"
                                ></v-text-field>

                                <!-- CVV Input -->
                                <v-text-field
                                    v-model="paymentDetails.cvv"
                                    label="CVV"
                                    type="text"
                                    clearable
                                    rounded="lg"
                                    variant="outlined"
                                    color="#d777ed"
                                ></v-text-field>
                            </v-col>
                        </v-row>
                    </v-col>
                    <v-col>
                        <v-row>
                            <v-col>
                                <!-- Expiration Date Input -->
                                <v-text-field
                                    v-model="paymentDetails.expirationdate"
                                    label="Expiration Date"
                                    type="text"
                                    clearable
                                    rounded="lg"
                                    variant="outlined"
                                    color="#d777ed"
                                ></v-text-field>

                                <!-- Billing Address Input -->
                                <v-text-field
                                    v-model="paymentDetails.billingaddress"
                                    label="Billing Address"
                                    type="text"
                                    clearable
                                    rounded="lg"
                                    variant="outlined"
                                    color="#d777ed"
                                ></v-text-field>
                            </v-col>
                        </v-row>
                    </v-col>
                </v-row>
                <v-row>
                    <v-card-text class="ml-2">
                        <!-- Checkbox for Agreeing to Terms and Conditions -->
                        <v-checkbox label="Agree to our Terms and Conditions ">
                        </v-checkbox>
                    </v-card-text>
                </v-row>
                <v-row>
                    <v-card-text>
                        <!-- Save Changes and Reset Buttons -->
                        <v-btn class="ml-2" color="purple" max-width="150">Save Changes</v-btn>
                        <v-btn class="ml-2" color="white" max-width="150">Reset</v-btn>
                    </v-card-text>
                </v-row>
            </v-card-text>
        </v-card>
    </v-container>
</template>

<style scoped>
</style>
