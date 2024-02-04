<script setup lang="ts">
import {Swiper, SwiperSlide} from "swiper/vue";
import ImproveNFT from "./ImproveNFT.vue";
import {Navigation, Pagination, Autoplay} from 'swiper/modules';
let modules = [Navigation, Pagination, Autoplay];
const cards = [
    {id: 1, title: 'Card 1fewfewfewfewfewfewfewfewefw', content: 'MMB', img: "src/assets/test.png"},
    {id: 2, title: 'Card 1', content: 'MMB', img: "src/assets/test1.jpeg"},
    {id: 3, title: 'Card 1', content: 'MMB', img: "src/assets/test2.avif"},
    {id: 4, title: 'Card 1fewfewfewfewfewfewfewfewefw', content: 'MMB', img: "src/assets/test.png"},
    {id: 5, title: 'Card 1', content: 'MMB', img: "src/assets/test1.jpeg"},
    {id: 6, title: 'Card 1', content: 'MMB', img: "src/assets/test2.avif"},
    {id: 7, title: 'Card 1fewfewfewfewfewfewfewfewefw', content: 'MMB', img: "src/assets/test.png"},
    {id: 8, title: 'Card 1', content: 'MMB', img: "src/assets/test1.jpeg"},
    {id: 9, title: 'Card 1', content: 'MMB', img: "src/assets/test2.avif"},
    {id: 10, title: 'Card 1fewfewfewfewfewfewfewfewefw', content: 'MMB', img: "src/assets/test.png"},
    {id: 11, title: 'Card 1', content: 'MMB', img: "src/assets/test1.jpeg"},
    {id: 12, title: 'Card 1', content: 'MMB', img: "src/assets/test2.avif"},

];
</script>
<template>
    <div class="d-flex justify-center my-10">
        <swiper
            :slidesPerView="1"
            :spaceBetween="10"
            :pagination="{ clickable: true }"
            navigation
            :modules="modules"
            class="mySwiper ma-0"
            loop
            autoplay
            :breakpoints="{
                        '500': {
                            slidesPerView: 1,
                            spaceBetween: 0,
                        },

                        '640': {
                            slidesPerView: 1,
                            spaceBetween: 0,
                        },
                        '768': {
                            slidesPerView: 2,
                            spaceBetween: 0,
                        },
                        '1200': {
                            slidesPerView: 3,
                            spaceBetween: 0,
                        },
                        }"
        >
            <swiper-slide class="" v-for="card in cards">
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

::v-deep .swiper-button-prev::after {
    font-size: 30px;
    width: 50px;
    color: white;
    line-height: 350px;
    padding: 0px 10px;
    border-radius: 5px;
    transform: translatex(-5px);
    transition: all 0.3s;

}

::v-deep .swiper-button-prev:hover::after {
    background: rgba(189, 195, 199, 0.3);

}

::v-deep .swiper-button-next::after {
    font-size: 30px;
    width: 50px;
    color: white;
    line-height: 350px;
    padding: 0px 10px;
    border-radius: 5px;
    transform: translatex(5px);
    transition: all 0.3s;
}

::v-deep .swiper-button-next:hover::after {
    background: rgba(189, 195, 199, 0.3);

}
</style>