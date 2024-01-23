<script setup lang="ts">
import {ref} from "vue";
import AccountDetail from "../components/accountCompos/AccountDetail.vue";
import AccountSecurity from "../components/accountCompos/AccountSecurity.vue";
import AccountPayment from "../components/accountCompos/AccountPayment.vue";

const tab = ref(1);
</script>

<template>
    <v-main>
        <v-card class="" min-height="100%" color="background">
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
                    <AccountDetail/>
                </v-window-item>

                <v-window-item
                    v-for="n in 3"
                    :key="n"
                    :value="2"
                    class="w-100 border-0"
                >
                    <AccountSecurity/>
                </v-window-item>

                <v-window-item :value="3">
                    <AccountPayment/>
                </v-window-item>
            </v-window>
        </v-card>


    </v-main>
</template>

<style scoped>
 .theborder{
     border: 1px solid gold;
 }
</style>