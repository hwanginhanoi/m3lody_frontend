<!--<template>-->
<!--    <v-main :style="{background: $vuetify.theme.global.current.colors.background}">-->
<!--        <v-row class="ma-6 match-height">-->
<!--            <v-col cols="12" md="4">-->
<!--                <v-card>-->
<!--                    <AnalyticAward></AnalyticAward>-->
<!--                </v-card>-->
<!--            </v-col>-->
<!--            <v-col cols="12" md="8">-->
<!--                <v-card>-->
<!--                    <AnalyticTransaction></AnalyticTransaction>-->
<!--                </v-card>-->
<!--            </v-col>-->
<!--            <v-col cols="12" md="4">-->
<!--                <v-card>-->
<!--                    ewffewfew-->
<!--                </v-card>-->
<!--            </v-col>-->
<!--            <v-col>-->
<!--                ewfew-->
<!--            </v-col>-->
<!--        </v-row>-->
<!--        <v-row class="ma-6">-->
<!--            <v-col>-->
<!--            </v-col>-->
<!--        </v-row>-->

<!--    </v-main>-->
<!--</template>-->

<template>
    <swiper
      :modules="modules"
      :slides-per-view="4"
      :space-between="50"
      navigation
      :pagination="{ clickable: true }"
      :scrollbar="{ draggable: true }"
      @swiper="onSwiper"
    >
      <swiper-slide class="bg-green w-25">Slide 1</swiper-slide>
      <swiper-slide>Slide 2</swiper-slide>
      <swiper-slide>Slide 3</swiper-slide>
      <swiper-slide>Slide 3</swiper-slide>
      <swiper-slide>Slide 3</swiper-slide>
      ...
    </swiper>
</template>

<style scoped>
.match-height.v-row {
  .v-card {
    block-size: 100%;
  }
}
</style>

<script setup lang="ts">
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from "swiper/vue";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
function onSwiper(swiper) {
  console.log(swiper);
}
function onSlideChange() {
  console.log("slide change");
}
</script>
