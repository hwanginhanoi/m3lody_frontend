<script setup lang="ts">
import AnalyticAward from "../components/AnalyticAward.vue";
import AnalyticTransaction from "../components/AnalyticTransaction.vue";
</script>

<template>
    <v-main :style="{background: $vuetify.theme.global.current.colors.background}"  >
        <v-row class="ma-6 match-height" >
            <v-col cols="12" md="4">
                <v-c>
                    <AnalyticAward></AnalyticAward>
                </v-c>
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
            <v-col>
                ewfew
            </v-col>
        </v-row>
        <v-row class="ma-6">
            <v-col>
            </v-col>
        </v-row>

    </v-main>
</template>

<style scoped>
.match-height.v-row {
    .v-card {
        block-size: 100%;
    }
}
</style>