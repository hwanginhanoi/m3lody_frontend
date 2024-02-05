<script setup lang="ts">
let activeIndex: number = 0;

const groups: HTMLCollectionOf<Element> = document.getElementsByClassName("card-group");

// handle clicking
const handleLoveClick = (): void => {
    const nextIndex: number = activeIndex + 1 <= groups.length - 1 ? activeIndex + 1 : 0;

    const currentGroup: Element | null = document.querySelector(`[data-index="${activeIndex}"]`),
        nextGroup: Element | null = document.querySelector(`[data-index="${nextIndex}"]`);

    if (currentGroup && nextGroup) {
        (currentGroup as HTMLElement).dataset.status = "after";

        (nextGroup as HTMLElement).dataset.status = "becoming-active-from-before";

        setTimeout(() => {
            (nextGroup as HTMLElement).dataset.status = "active";
            activeIndex = nextIndex;
        });
    }
};

// handle clicking
const handleHateClick = (): void => {
    const nextIndex: number = activeIndex - 1 >= 0 ? activeIndex - 1 : groups.length - 1;

    const currentGroup: Element | null = document.querySelector(`[data-index="${activeIndex}"]`),
        nextGroup: Element | null = document.querySelector(`[data-index="${nextIndex}"]`);

    if (currentGroup && nextGroup) {
        (currentGroup as HTMLElement).dataset.status = "before";

        (nextGroup as HTMLElement).dataset.status = "becoming-active-from-after";

        setTimeout(() => {
            (nextGroup as HTMLElement).dataset.status = "active";
            activeIndex = nextIndex;
        });
    }
};
</script>

<template>
    <div class="i-card">
        <div class="card-swiper">
<!--            showing cards-->
            <div class="card-groups">
                <div class="card-group" data-index="0" data-status="active">
                    <div class="little-card card">

                    </div>
                    <div class="big-card card">

                    </div>
                    <div class="little-card card">

                    </div>
                    <div class="big-card card">

                    </div>
                    <div class="little-card card">

                    </div>
                    <div class="big-card card">

                    </div>
                    <div class="little-card card">

                    </div>
                    <div class="big-card card">

                    </div>
                </div>
                <div class="card-group" data-index="1" data-status="unknown">
                    <div class="little-card card">

                    </div>
                    <div class="big-card card">

                    </div>
                    <div class="little-card card">

                    </div>
                    <div class="big-card card">

                    </div>
                    <div class="little-card card">

                    </div>
                    <div class="big-card card">

                    </div>
                    <div class="little-card card">

                    </div>
                    <div class="big-card card">

                    </div>
                </div>
                <div class="card-group" data-index="2" data-status="unknown">
                    <div class="little-card card">

                    </div>
                    <div class="big-card card">

                    </div>
                    <div class="little-card card">

                    </div>
                    <div class="big-card card">

                    </div>
                    <div class="little-card card">

                    </div>
                    <div class="big-card card">

                    </div>
                    <div class="little-card card">

                    </div>
                    <div class="big-card card">

                    </div>
                </div>
            </div>
<!--            buttons for changing cards group-->
            <div class="card-swiper-buttons">
                <button id="hate-button" @click="handleHateClick()">
                    <v-icon>mdi-close</v-icon>
                </button>
                <button id="love-button" @click="handleLoveClick()">
                    <v-icon>mdi-heart</v-icon>
                </button>
            </div>
        </div>
    </div>
</template>

<style scoped>
.i-card {
    margin: 0px;
    display: grid;
    place-items: center;
}

.card-groups,
.card-group,
.card {
    aspect-ratio: 5 / 7;
}

.card-groups,
.card-group,
.big-card {
    width: 30vmin;
}

.card-group {
    position: absolute;
    transition: transform 400ms ease;
}

.card-group[data-status="unknown"] {
    transform: scale(0);
    transition: none;
}

.card-group[data-status="active"] {
    transition-delay: 300ms;
}

.card-group[data-status="after"] {
    transform: translateX(50%) scale(0);
}

.card-group[data-status="before"] {
    transform: translateX(-50%) scale(0);
}

.card-group[data-status="becoming-active-from-after"] {
    transform: translateX(50%) scale(0);
    transition: none;
}

.card-group[data-status="becoming-active-from-before"] {
    transform: translateX(-50%) scale(0);
    transition: none;
}

.card {
    background-color: rgba(255, 255, 255, 0.05);
    position: absolute;
    transition: transform 800ms cubic-bezier(.05, .43, .25, .95);

    background-position: center;
    background-size: cover;
}

.big-card {
    border-radius: 1vmin;
}

.little-card {
    width: 12vmin;
    border-radius: 2vmin;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    box-shadow: -1vmin 1vmin 2vmin rgba(0, 0, 0, 0.25);
    pointer-events: none;
}

.big-card:nth-child(2) {
    background-image: url("../assets/nft/anime_1.jpg");
    transform: translateX(-10%) rotate(-1deg);
}

.big-card:nth-child(4) {
    background-image: url("../assets/nft/angel_1.jpg");
    transform: rotate(2deg);
}

.big-card:nth-child(6) {
    background-image: url("../assets/nft/rock_1.jpg");
    transform: translateX(-6%) rotate(-3deg);
}

.big-card:nth-child(8) {
    background-image: url("../assets/nft/piano_1.jpg");
    transform: translate(10%, 3%) rotate(5deg);
}

.card-group[data-index="1"] > .big-card:nth-child(6) {
    background-image: url("../assets/nft/anime_3.jpg");
}

.card-group[data-index="1"] > .big-card:nth-child(8) {
    background-image: url("../assets/nft/piano_3.jpg");
}

.card-group[data-index="2"] > .big-card:nth-child(4) {
    background-image: url("../assets/nft/angel_2.jpg");
}

.card-group[data-index="2"] > .big-card:nth-child(8) {
    background-image: url("../assets/nft/rock_4.jpg");
}

.little-card:nth-child(1) {
    background-image: url("https://images.unsplash.com/photo-1639843906796-a2c47fc24330?q=80&w=1965&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D");
}

.little-card:nth-child(3) {
    background-image: url("https://images.unsplash.com/photo-1622632169740-85c306c57aa2?q=80&w=1973&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D");
}

.little-card:nth-child(5) {
    background-image: url("https://images.unsplash.com/photo-1640340434855-6084b1f4901c?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D");
}

.little-card:nth-child(7) {
    background-image: url("https://images.unsplash.com/photo-1642751226411-ea5f2442be20?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D");
}

.card-group:hover > .card {
    box-shadow: -2vmin 2vmin 3vmin rgba(0, 0, 0, 0.4);
}

.card-group:hover > .big-card:nth-child(2) {
    transform: translate(-75%, 16%) rotate(-24deg);
}

.card-group:hover > .big-card:nth-child(4) {
    transform: translate(-25%, 8%) rotate(-8deg);
}

.card-group:hover > .big-card:nth-child(6) {
    transform: translate(25%, 8%) rotate(8deg);
}

.card-group:hover > .big-card:nth-child(8) {
    transform: translate(75%, 16%) rotate(24deg);
}

.card-group:hover > .little-card:nth-child(1) {
    transform: translate(200%, -160%) rotate(-15deg);
}

.card-group:hover > .little-card:nth-child(3) {
    transform: translate(160%, 170%) rotate(15deg);
}

.card-group:hover > .little-card:nth-child(5) {
    transform: translate(-200%, -170%) rotate(15deg);
}

.card-group:hover > .little-card:nth-child(7) {
    transform: translate(-280%, 140%) rotate(-15deg);
}

.card-swiper-buttons {
    margin-top: 8vmin;
    display: flex;
    justify-content: space-around;
    padding: 0vmin 4vmin;
}

.card-swiper-buttons > button {
    font-size: 2.5vmin;
    border: 0.4vmin solid rgb(200, 200, 200);
    border-radius: 100%;
    color: white;
    background-color: transparent;
    height: 7vmin;
    width: 7vmin;
    display: grid;
    place-items: center;
    cursor: pointer;
}

#love-button {
    color: rgb(33, 150, 243);
    border-color: rgb(33, 150, 243);
}

#hate-button {
    color: white;
}

/* -- YouTube Link Styles -- */

body.menu-toggled > .meta-link > span {
    color: rgb(30, 30, 30);
}

#source-link {
    bottom: 60px;
}

#source-link > i {
    color: rgb(94, 106, 210);
}

#yt-link > i {
    color: rgb(239, 83, 80);
}

.meta-link {
    align-items: center;
    backdrop-filter: blur(3px);
    background-color: rgba(255, 255, 255, 0.05);
    border: 1px solid rgba(255, 255, 255, 0.1);
    border-radius: 6px;
    bottom: 10px;
    box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.1);
    cursor: pointer;
    display: inline-flex;
    gap: 5px;
    left: 10px;
    padding: 10px 20px;
    position: fixed;
    text-decoration: none;
    transition: background-color 400ms, border-color 400ms;
    z-index: 10000;
}

.meta-link:hover {
    background-color: rgba(255, 255, 255, 0.1);
    border: 1px solid rgba(255, 255, 255, 0.2);
}

.meta-link > i, .meta-link > span {
    height: 20px;
    line-height: 20px;
}

.meta-link > span {
    color: white;
    font-family: "Rubik", sans-serif;
    font-weight: 500;
}
</style>