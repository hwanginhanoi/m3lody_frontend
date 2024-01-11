<script setup lang="ts">
// export default {
//     name: 'Header',
// };
</script>

<template>
    <div class="header">
        <div class="portfolio">
            <h1>Portfolio</h1>
            <p>Updated on 23 May 2023</p>
        </div>
        <div class="search-bar">
            <input type="text" placeholder="Search your coins...">
        </div>
        <div class="user-info">
            <button>Album ▼</button>
            <img src="../assets/vue.svg" alt="User Image">
            <span>Alexim</span>
        </div>
    </div>
</template>

<style scoped>
        .header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            background-color: black;
            color: white;
        }

        .portfolio h1, .portfolio p {
           margin: 0; 
        }

        .search-bar input {
           padding: 10px; 
        }

        .user-info img {
           border-radius: 50%; 
        }
</style>