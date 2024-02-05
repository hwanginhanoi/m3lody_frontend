<script setup lang="ts">
import {ref} from "vue";
import {useDisplay} from "vuetify";

// Initializing reactive security object to store account security details
const security = ref({
    currentpassword: '',
    newpassword: '',
    confirmpassword: ''
});

// Using the useDisplay function from Vuetify
const {mdAndUp} = useDisplay();
</script>

<template>
    <v-container class="pa-3">
        <!-- Account Details Card -->
        <v-card class="pa-10 rounded-lg" elevation="2" width="99%">
            <v-card-text class="pt-2"><h3>Account Details</h3></v-card-text>
            <v-card-text class="pt-2">
                <v-row>
                    <v-col :cols="mdAndUp ? '' : 12">
                        <v-row>
                            <v-col>
                                <!-- Current Password Input -->
                                <v-text-field
                                    v-model="security.currentpassword"
                                    label="Current Password"
                                    type="text"
                                    clearable
                                    rounded="lg"
                                    variant="outlined"
                                    color="#d777ed"
                                ></v-text-field>
                                <!-- New Password Input -->
                                <v-text-field
                                    v-model="security.newpassword"
                                    label="New Password"
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
                                <!-- Confirm Password Input -->
                                <v-text-field
                                    v-model="security.confirmpassword"
                                    label="Confirm Password"
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
                    <v-card-text class="ml-6">
                        <!-- Password Requirement Information -->
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
                        <!-- Save Changes and Reset Buttons -->
                        <v-btn class="ml-2" color="purple" max-width="150">Save Changes</v-btn>
                        <v-btn class="ml-2" color="white" max-width="150">Reset</v-btn>
                    </v-card-text>
                </v-row>
            </v-card-text>
        </v-card>
    </v-container>
</template>
