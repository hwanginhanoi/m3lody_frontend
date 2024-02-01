<script setup lang="ts">
import {Swiper, SwiperSlide} from 'swiper/vue';

// Import Swiper styles
import 'swiper/css';

import 'swiper/css/pagination';


// import required modules
import {Pagination} from 'swiper/modules';

let modules = [Pagination];
</script>

<template>
    <v-main>
        <h1>Dashboard</h1>
        <swiper
            :slidesPerView="5"
            :spaceBetween="30"
            :pagination="{
                clickable: true,
            }"
            :modules="modules"
            class="mySwiper ma-0 pa-7"
        >
            <swiper-slide>Slide 1</swiper-slide>
            <swiper-slide>Slide 2</swiper-slide>
            <swiper-slide>Slide 3</swiper-slide>
            <swiper-slide>Slide 4</swiper-slide>
            <swiper-slide>Slide 5</swiper-slide>
            <swiper-slide>Slide 6</swiper-slide>
            <swiper-slide>Slide 7</swiper-slide>
            <swiper-slide>Slide 8</swiper-slide>
            <swiper-slide>Slide 9</swiper-slide>
        </swiper>
    </v-main>
</template>

<style scoped>
.swiper {
    width: 100vw;
    height: 50%;
}

.swiper-slide {
    text-align: center;
    font-size: 18px;
    background: green;

    /* Center slide text vertically */
    display: flex;
    justify-content: center;
    align-items: center;
}

.swiper-slide img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
}
</style>
