<script setup lang="ts">
import {Swiper, SwiperSlide} from "swiper/vue";
import ImproveNFT from "./ImproveNFT.vue";
import {Navigation, Pagination, Autoplay} from 'swiper/modules';
let modules = [Navigation, Pagination, Autoplay];
import cards from "../data.json";

function getRandomCards() {
    let randomIndices = new Set();
    while(randomIndices.size < 5) {
        randomIndices.add(Math.floor(Math.random() * cards.length));
    }
    return Array.from(randomIndices).map(index => cards[index]);
}

let randomCards = getRandomCards();
</script>
<template>
    <div class="d-flex justify-center my-10">
        <swiper
            :slidesPerView="1"
            :pagination="{ clickable: true }"
            navigation
            :modules="modules"
            class="mySwiper ma-0"
            loop
            autoplay
            :breakpoints="{
                        '300': {
                            slidesPerView: 1,
                            spaceBetween: 0,
                        },

                        '700': {
                            slidesPerView: 2,
                            spaceBetween: 0,
                        },
                        '1200': {
                            slidesPerView: 3,
                            spaceBetween: 0,
                        },
                        '1800': {
                            slidesPerView: 4,
                            spaceBetween: 0,
                        },
                        }"
        >
            <swiper-slide class="" v-for="card in randomCards">
                <ImproveNFT :card="card"/>
            </swiper-slide>

        </swiper>
    </div>
</template>

<style scoped>
.swiper {
    width: 100%;
    max-width: 100vw;
    height: 55vh;
}

.swiper-slide {
    /* Center slide text vertically */
    display: flex;
    justify-content: center;
    align-items: center;
}

.swiper-pagination-bullet {
    background: green;
}

:deep(.swiper-button-prev::after) {
    font-size: 30px;
    width: 50px;
    color: white;
    line-height: 350px;
    padding: 0px 10px;
    border-radius: 5px;
    transform: translatex(-5px);
    transition: all 0.3s;

}

:deep(.swiper-button-prev:hover::after) {
    background: rgba(189, 195, 199, 0.3);

}

:deep(.swiper-button-next::after) {
    font-size: 30px;
    width: 50px;
    color: white;
    line-height: 350px;
    padding: 0px 10px;
    border-radius: 5px;
    transform: translatex(5px);
    transition: all 0.3s;
}

:deep(.swiper-button-next:hover::after) {
    background: rgba(189, 195, 199, 0.3);
}
</style>