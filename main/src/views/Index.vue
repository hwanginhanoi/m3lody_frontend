<script setup lang="ts">

import AnalyticAward from "../components/AnalyticAward.vue";
import AnalyticTransaction from "../components/AnalyticTransaction.vue";
</script>

<template>
    <v-main>
        <v-row>
            <v-col cols="12" md="4">
                <v-card>
                    <AnalyticAward></AnalyticAward>
                </v-card>
            </v-col>
            <v-col cols="12" md="8">
                <v-card>
                    <AnalyticTransaction></AnalyticTransaction>
                </v-card>
            </v-col>
            <v-col cols="12" md ="4">
                <v-card>
                    ewffewfew
                </v-card>
            </v-col>
        </v-row>
    </v-main>
</template>

<style scoped>

</style>