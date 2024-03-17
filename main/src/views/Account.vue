<script setup lang="ts">
// Importing necessary functions from Vue
import {ref} from "vue";
// Importing Vue components for account details, security, and payment
import AccountDetail from "../components/accountCompos/AccountDetail.vue";
import AccountSecurity from "../components/accountCompos/AccountSecurity.vue";
import AccountPayment from "../components/accountCompos/AccountPayment.vue";
import checkCookieExists from "../ultilities/checkCookieExists.ts";
import router from "../plugins/router.ts";
import {onMounted} from "vue";

onMounted(async () => {
    if (!checkCookieExists()) {
        await router.push('/login');
    }
});

// Creating a reactive reference for the tab
const tab = ref(1);

</script>

<template>
    <v-main>
        <!-- Main card for containing the tabs -->
        <v-card class="" min-height="100%" color="background">
            <!-- Tabs for navigation -->
            <v-tabs
                v-model="tab"
                color="deep-purple-accent-4"
                align-tabs="center"
            >
                <!-- Tab for Account -->
                <v-tab :value="1">Account</v-tab>
                <!-- Tab for Security -->
                <v-tab :value="2">Security</v-tab>
                <!-- Tab for Payment -->
                <v-tab :value="3">Payment</v-tab>
            </v-tabs>
            <!-- Window for displaying tab content -->
            <v-window v-model="tab">
                <!-- Window item for Account Detail -->
                <v-window-item
                    v-for="n in 3"
                    :key="n"
                    :value="1"
                    class=""
                >
                    <AccountDetail/>
                </v-window-item>

                <!-- Window item for Account Security -->
                <v-window-item
                    v-for="n in 3"
                    :key="n"
                    :value="2"
                    class="w-100 border-0"
                >
                    <AccountSecurity/>
                </v-window-item>

                <!-- Window item for Account Payment -->
                <v-window-item :value="3">
                    <AccountPayment/>
                </v-window-item>
            </v-window>
        </v-card>
    </v-main>
</template>

<style scoped>
 /* Scoped styles for the component */
 .theborder{
     border: 1px solid gold;
 }
</style>
