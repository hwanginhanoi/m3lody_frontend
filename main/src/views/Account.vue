<script setup lang="ts">

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
                        <v-img src="https://randomuser.me/api/portraits/women/85.jpg" width="120" class="rounded-xl"></v-img>
                    </v-col>

                    <v-col class="d-flex align-center">
                        <v-row>
                            <v-col cols="12">
                                <v-btn class="ml-2" color="green" width="150">Edit</v-btn>
                                <v-btn class="ml-2" color="white" width="150">Edit</v-btn>
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
                                    placeholder="First Name"
                                ></v-text-field>
                            </v-col>
                            <v-col cols="12">
                                <v-text-field
                                    placeholder="Email"
                                ></v-text-field>
                            </v-col>
                            <v-col cols="12">
                                <v-text-field
                                    placeholder="State"
                                ></v-text-field>
                            </v-col>
                            <v-col cols="12">
                                <v-text-field
                                    placeholder="Country"
                                ></v-text-field>
                            </v-col>
                            <v-col cols="12">
                                <v-text-field
                                    placeholder="Timezone"
                                ></v-text-field>
                            </v-col>
                        </v-row>
                    </v-col >

                    <v-col>
                        <v-row>
                            <v-col cols="12">
                                <v-text-field
                                    placeholder="Last Name"
                                ></v-text-field>
                            </v-col>
                            <v-col cols="12">
                                <v-text-field
                                    placeholder="Organization"
                                ></v-text-field>
                            </v-col>
                            <v-col cols="12">
                                <v-text-field
                                    placeholder="Address"
                                ></v-text-field>
                            </v-col>
                            <v-col cols="12">
                                <v-text-field
                                    placeholder="Zipcode"
                                ></v-text-field>
                            </v-col>
                            <v-col cols="12">
                                <v-text-field
                                    placeholder="Language"
                                ></v-text-field>
                            </v-col>
                        </v-row>
                    </v-col>
                </v-row>
            </v-card-text>
        </v-card>

    </v-main>
</template>

<style scoped>

</style>