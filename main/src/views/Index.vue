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
    <v-main>

      <swiper
        
        :modules="modules"
        :slidesPerView="3"
        :spaceBetween="30"
        :pagination="{
          clickable: true,
        }"
        class="mySwiper w-100 h-50"
  >
    <swiper-slide class="tab w-25">Slide 1</swiper-slide>
    <swiper-slide class="tab">Slide 2</swiper-slide><swiper-slide class="tab">Slide 3</swiper-slide>
    <swiper-slide class="tab">Slide 4</swiper-slide><swiper-slide class="tab">Slide 5</swiper-slide>
    <swiper-slide class="tab">Slide 6</swiper-slide><swiper-slide class="tab">Slide 7</swiper-slide>
    <swiper-slide class="tab">Slide 8</swiper-slide><swiper-slide class="tab w-25">Slide 9</swiper-slide>
  </swiper>
</v-main>

</template>

<style scoped>
.match-height.v-row {
  .v-card {
    block-size: 100%;
  }
  .tab{
    width: 25%;
    background: red;
  }
}
</style>

<script setup lang="ts">
  import { Swiper, SwiperSlide } from 'swiper/vue';

// Import Swiper styles
import 'swiper/css';

import 'swiper/css/pagination';


// import required modules
import { Pagination } from 'swiper/modules';
let modules = [Pagination];
</script>
