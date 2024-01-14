<script setup lang="ts">
import NavDrawer from "../components/NavDrawer.vue";
import Header from "../components/Header.vue";

let balance : number = 83189.44
let prev_balance : number = 90000
let balance_dif = balance - prev_balance

</script>

<template>
    <v-layout class="rounded rounded-md">
        <v-main class="" style="min-height: 300px;">
            <p class="current_balance">Current balance
                <v-icon icon="mdi-eye"></v-icon>
            </p>

            <p class="balance">
                ${{balance}}
            </p>

            <p :class="{ 'red-text': balance_dif < 0, 'green-text': balance_dif > 0 }">
                {{balance_dif}}
            </p>


        </v-main>
    </v-layout>
</template>

<style>
.v-main {
    background: #0D0D0D
}

.current_balance {
    font-family: Lufga;
    font-size: 12px;
    font-style: italic;
    font-weight: 300;
    line-height: normal;
}

.balance {
    font-family: Lufga, serif;
    font-size: 28px;
    font-style: normal;
    font-weight: 500;
    line-height: 38px;
    letter-spacing: 0.42px;
}

.red-text {
    color: red;
}

.green-text {
    color: green;
}

</style>