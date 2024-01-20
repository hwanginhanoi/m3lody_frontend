<script setup lang="ts">
import {ref} from "vue";
import {useDisplay} from "vuetify";

const {mdAndUp} = useDisplay();
const paymentDetails = ref({
    cardnumber: '',
    cardholdername: '',
    expirationdate: '',
    cvv: ''
})
</script>

<template>
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
                                    v-model="paymentDetails.ccv"
                                    label="Confirm Password"
                                    type="text"
                                    clearable=""
                                    rounded
                                    variant="outlined"
                                    color="#d777ed"
                                ></v-text-field>
                                <v-text-field
                                    v-model="paymentDetails.ccv"
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